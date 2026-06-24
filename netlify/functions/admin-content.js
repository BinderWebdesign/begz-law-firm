const collections = {
  faq: { file: 'faq.json', label: 'Түгээмэл асуулт', listKey: 'items' },
  'legal-guide': { file: 'legal-guide.json', label: 'Хууль зүйн мэдээлэл', listKey: 'items' },
  cases: { file: 'cases.json', label: 'Шүүхийн шийдвэрийн тойм мэдээ', listKey: 'items' },
  team: { file: 'team.json', label: 'Манай баг', listKey: 'members' },
  history: { file: 'history.json', label: 'Түүхэн товчоо', listKey: 'timeline' }
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, x-admin-token',
      'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS'
    },
    body: JSON.stringify(body)
  };
}

function normalizeRepo(value) {
  return String(value || '')
    .trim()
    .replace(/^https:\/\/github\.com\//i, '')
    .replace(/\.git$/i, '')
    .replace(/^\/+|\/+$/g, '');
}

function githubConfig() {
  const repo = normalizeRepo(process.env.GITHUB_REPO);
  const token = process.env.GITHUB_TOKEN || '';
  const branch = process.env.GITHUB_BRANCH || 'main';
  if (!repo || !repo.includes('/')) {
    throw new Error('GITHUB_REPO тохируулаагүй байна. Жишээ: owner/repository');
  }
  if (!token) {
    throw new Error('GITHUB_TOKEN тохируулаагүй байна.');
  }
  return { repo, token, branch };
}

function isAuthorized(event) {
  const required = process.env.ADMIN_TOKEN || '';
  if (!required) return true;
  const headers = event.headers || {};
  return headers['x-admin-token'] === required || headers['X-Admin-Token'] === required;
}

function getSlug(event) {
  const parts = String(event.path || '').split('/').filter(Boolean);
  const functionIndex = parts.lastIndexOf('admin-content');
  if (functionIndex >= 0) return parts[functionIndex + 1] || null;
  const contentIndex = parts.lastIndexOf('content');
  if (contentIndex >= 0) return parts[contentIndex + 1] || null;
  return null;
}

function decodeBase64(value) {
  return Buffer.from(String(value || '').replace(/\n/g, ''), 'base64').toString('utf8');
}

function encodeBase64(value) {
  return Buffer.from(value, 'utf8').toString('base64');
}

async function githubRequest(path, options = {}) {
  const { repo, token } = githubConfig();
  const response = await fetch(`https://api.github.com/repos/${repo}${path}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'begz-law-admin',
      ...(options.headers || {})
    }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data && data.message ? data.message : `GitHub API ${response.status}`;
    throw new Error(message);
  }
  return data;
}

function encodePath(filePath) {
  return filePath.split('/').map((part) => encodeURIComponent(part)).join('/');
}

async function readCollection(slug) {
  const collection = collections[slug];
  if (!collection) return null;
  const { branch } = githubConfig();
  const filePath = `content/${collection.file}`;
  const file = await githubRequest(`/contents/${encodePath(filePath)}?ref=${encodeURIComponent(branch)}`);
  const data = JSON.parse(decodeBase64(file.content));
  return {
    slug,
    label: collection.label,
    file: collection.file,
    listKey: collection.listKey,
    sha: file.sha,
    data
  };
}

function ensureContentShape(collection, data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('Content must be a JSON object');
  }
  if (!Array.isArray(data[collection.listKey])) {
    throw new Error(`Content must include an array named "${collection.listKey}"`);
  }
}

async function writeCollection(slug, data) {
  const collection = collections[slug];
  if (!collection) return null;
  ensureContentShape(collection, data);

  const current = await readCollection(slug);
  const { branch } = githubConfig();
  const filePath = `content/${collection.file}`;
  const updatedFile = await githubRequest(`/contents/${encodePath(filePath)}`, {
    method: 'PUT',
    body: JSON.stringify({
      message: `Update ${collection.file} from BEGZ admin`,
      content: encodeBase64(`${JSON.stringify(data, null, 2)}\n`),
      sha: current.sha,
      branch
    })
  });

  return {
    slug,
    label: collection.label,
    file: collection.file,
    listKey: collection.listKey,
    data,
    commitUrl: updatedFile.commit && updatedFile.commit.html_url
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return json(200, { ok: true });
  }

  const slug = getSlug(event);

  if (event.httpMethod === 'GET' && !slug) {
    return json(200, {
      collections: Object.entries(collections).map(([key, value]) => ({
        slug: key,
        label: value.label,
        file: value.file,
        listKey: value.listKey
      })),
      authRequired: Boolean(process.env.ADMIN_TOKEN),
      backend: 'github-netlify'
    });
  }

  if (!isAuthorized(event)) {
    return json(401, { error: 'UNAUTHORIZED', authRequired: true });
  }

  if (!slug || !collections[slug]) {
    return json(404, { error: 'UNKNOWN_COLLECTION' });
  }

  try {
    if (event.httpMethod === 'GET') {
      return json(200, await readCollection(slug));
    }

    if (event.httpMethod === 'PUT') {
      const payload = JSON.parse(event.body || '{}');
      const data = Object.prototype.hasOwnProperty.call(payload, 'data') ? payload.data : payload;
      const collection = await writeCollection(slug, data);
      return json(200, {
        ok: true,
        savedAt: new Date().toISOString(),
        collection,
        commitUrl: collection.commitUrl
      });
    }
  } catch (error) {
    return json(500, {
      error: 'ADMIN_CONTENT_FAILED',
      message: error.message || 'Admin content update failed'
    });
  }

  return json(405, { error: 'METHOD_NOT_ALLOWED' });
};
