const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const PORT = Number(process.env.PORT || 8011);
const OUTPUT_ROOT = path.join(__dirname, 'outputs');
const ROOT = fs.existsSync(path.join(OUTPUT_ROOT, 'index.html')) ? OUTPUT_ROOT : __dirname;
const CONTENT_ROOT = path.join(ROOT, 'content');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-5.4-mini';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';

const contentCollections = {
  faq: { file: 'faq.json', label: 'Түгээмэл асуулт', listKey: 'items' },
  'legal-guide': { file: 'legal-guide.json', label: 'Хууль зүйн мэдээлэл', listKey: 'items' },
  cases: { file: 'cases.json', label: 'Шүүхийн шийдвэрийн тойм мэдээ', listKey: 'items' },
  team: { file: 'team.json', label: 'Манай баг', listKey: 'members' },
  history: { file: 'history.json', label: 'Түүхэн товчоо', listKey: 'timeline' }
};

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

const siteLinks = {
  contact: 'index.html#contact',
  advisory: 'legal-advisory.html',
  court: 'court-representation.html',
  advocacy: 'advocacy.html',
  faq: 'index.html#faq',
  cases: 'cases.html',
  history: 'history.html',
  team: 'index.html#team',
  privacy: 'privacy.html'
};

function sendJson(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function sendText(res, status, text) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(text);
}

function isAdminAuthorized(req) {
  if (!ADMIN_TOKEN) return true;
  return req.headers['x-admin-token'] === ADMIN_TOKEN;
}

function getCollection(slug) {
  return contentCollections[slug] || null;
}

function getCollectionPath(collection) {
  return path.join(CONTENT_ROOT, collection.file);
}

function readContentCollection(slug) {
  const collection = getCollection(slug);
  if (!collection) return null;
  const file = getCollectionPath(collection);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  return {
    slug,
    label: collection.label,
    file: collection.file,
    listKey: collection.listKey,
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

function writeContentCollection(slug, data) {
  const collection = getCollection(slug);
  if (!collection) return null;
  ensureContentShape(collection, data);

  const file = getCollectionPath(collection);
  const backupDir = path.join(CONTENT_ROOT, '.backups');
  fs.mkdirSync(backupDir, { recursive: true });

  if (fs.existsSync(file)) {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    fs.copyFileSync(file, path.join(backupDir, `${slug}-${stamp}.json`));
  }

  const tempFile = `${file}.tmp`;
  fs.writeFileSync(tempFile, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  fs.renameSync(tempFile, file);
  return readContentCollection(slug);
}

function safeReadJson(name, fallback) {
  try {
    const file = path.join(CONTENT_ROOT, name);
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    return fallback;
  }
}

function cleanText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function list(values, limit) {
  return values.filter(Boolean).slice(0, limit).join('\n');
}

function buildSiteContext() {
  const faq = safeReadJson('faq.json', { items: [] }).items || [];
  const historyData = safeReadJson('history.json', { timeline: [] });
  const history = historyData.timeline || historyData.items || [];
  const legalGuide = safeReadJson('legal-guide.json', { items: [] }).items || [];
  const cases = safeReadJson('cases.json', { items: [] }).items || [];
  const teamData = safeReadJson('team.json', { members: [] });
  const team = teamData.members || teamData.items || [];

  const faqLines = faq.map((item) => `- ${cleanText(item.question)}: ${cleanText(item.answer)}`);
  const historyLines = history.map((item) => `- ${cleanText(item.year || item.title)}: ${cleanText(item.title || item.description)} ${cleanText(item.description)}`);
  const guideLines = legalGuide.map((item) => `- ${cleanText(item.title)}: ${(item.points || []).map(cleanText).join(', ')}`);
  const caseLines = cases.map((item) => `- ${cleanText(item.title)}: ${cleanText(item.summary || item.description)} ${item.id ? `(id: ${item.id})` : ''}`);
  const teamLines = team.map((item) => `- ${cleanText(item.name)}: ${cleanText(item.role)} ${cleanText(item.focus || item.bio)}`);

  return [
    'Байгууллага: "Бэгз Ло Консалтинг" ХХК, BEGZ Law Firm.',
    'Үндсэн үйлчилгээ: хууль зүйн зөвлөх үйлчилгээ, шүүхэд төлөөлөх үйлчилгээ, өмгөөллийн үйлчилгээ.',
    'Холбоо барих утас: 8811-9315, 9903-5509.',
    'Чухал холбоосууд: legal-advisory.html, court-representation.html, advocacy.html, index.html#contact, cases.html, history.html.',
    '',
    'Түгээмэл асуулт:',
    list(faqLines, 8),
    '',
    'Хууль зүйн мэдээллийн гарын авлага:',
    list(guideLines, 8),
    '',
    'Шүүхийн шийдвэрийн тойм мэдээ:',
    list(caseLines, 8),
    '',
    'Багийн товч мэдээлэл:',
    list(teamLines, 8),
    '',
    'Түүхэн товчоо:',
    list(historyLines, 8)
  ].join('\n').slice(0, 9000);
}

function buildInstructions() {
  return `Та "Бэгз Ло Консалтинг" ХХК-ийн вебсайтын AI туслах.

Зорилго:
- Сайтад байгаа мэдээлэлд тулгуурлан хэрэглэгчийг зөв үйлчилгээ, хуудас, холбоо барих хэсэг рүү чиглүүл.
- Монгол хэлээр, товч, эелдэг, мэргэжлийн өнгөөр хариул.
- Хэрэглэгч хуулийн нарийн нөхцөл асуувал ерөнхий чиглэл өгөөд заавал хуульчтай уулзахыг зөвлө.
- Өөрийгөө өмгөөлөгч гэж бүү танилцуул. Эцсийн хууль зүйн дүгнэлт, баталгаатай үр дүн, шүүхийн шийдвэрийн таамаг бүү өг.
- Сайтад байхгүй үнэ, хугацаа, баталгаа зохиож хэлж болохгүй.
- Хариулт 2-5 богино өгүүлбэр байвал сайн.

Сайтын мэдээлэл:
${buildSiteContext()}`;
}

function normalize(value) {
  return String(value || '').toLowerCase();
}

function action(label, href) {
  return { label, href };
}

function recommendActions(message) {
  const text = normalize(message);
  if (/үйлчилгээ|зөвлөх|зөвлөгөө|хууль зүй|service/.test(text)) {
    return [
      action('Зөвлөх үйлчилгээ', siteLinks.advisory),
      action('Шүүхэд төлөөлөх', siteLinks.court),
      action('Өмгөөлөл', siteLinks.advocacy)
    ];
  }
  if (/шүүх|төлөөлөх|маргаан|нэхэмжлэл/.test(text)) {
    return [action('Шүүхэд төлөөлөх', siteLinks.court), action('Уулзалт товлох', siteLinks.contact)];
  }
  if (/өмгөөл|эрх ашиг|хамгаал/.test(text)) {
    return [action('Өмгөөллийн үйлчилгээ', siteLinks.advocacy), action('Уулзалт товлох', siteLinks.contact)];
  }
  if (/уулзалт|цаг|товлох|холбоо|утас|залгах|имэйл/.test(text)) {
    return [action('Холбоо барих хэсэг', siteLinks.contact)];
  }
  if (/асуулт|faq|баримт|бичиг|гэрээ/.test(text)) {
    return [action('Түгээмэл асуулт', siteLinks.faq)];
  }
  if (/тойм|шийдвэр|кейс|мэдээ/.test(text)) {
    return [action('Тойм мэдээ', siteLinks.cases)];
  }
  if (/түүх|товчоо/.test(text)) {
    return [action('Түүхэн товчоо', siteLinks.history)];
  }
  return [action('Уулзалт товлох', siteLinks.contact), action('Үйлчилгээ үзэх', siteLinks.advisory)];
}

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .filter((item) => item && (item.role === 'user' || item.role === 'bot'))
    .slice(-8)
    .map((item) => ({
      role: item.role === 'bot' ? 'assistant' : 'user',
      content: cleanText(item.content).slice(0, 900)
    }))
    .filter((item) => item.content);
}

function extractOutputText(data) {
  if (typeof data.output_text === 'string' && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const chunks = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (typeof content.text === 'string') chunks.push(content.text);
      if (typeof content.output_text === 'string') chunks.push(content.output_text);
    }
  }
  return chunks.join('\n').trim();
}

async function readRequestBody(req, maxBytes = 24000) {
  return await new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > maxBytes) {
        reject(new Error('Request body is too large'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

async function callOpenAI(message, history) {
  const input = [
    ...sanitizeHistory(history),
    { role: 'user', content: message }
  ];

  const payload = {
    model: OPENAI_MODEL,
    instructions: buildInstructions(),
    input,
    max_output_tokens: 520
  };

  if (/^(gpt-5|o\d|o-|gpt-4\.1)/.test(OPENAI_MODEL)) {
    payload.reasoning = { effort: 'low' };
  }

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = data && data.error && data.error.message ? data.error.message : `OpenAI API returned ${response.status}`;
    const error = new Error(detail);
    error.status = response.status;
    throw error;
  }

  return extractOutputText(data);
}

async function handleChat(req, res) {
  if (!OPENAI_API_KEY) {
    sendJson(res, 503, { error: 'AI_NOT_CONFIGURED' });
    return;
  }

  let payload;
  try {
    payload = JSON.parse(await readRequestBody(req));
  } catch (error) {
    sendJson(res, 400, { error: 'BAD_REQUEST' });
    return;
  }

  const message = cleanText(payload.message).slice(0, 1200);
  if (!message) {
    sendJson(res, 400, { error: 'EMPTY_MESSAGE' });
    return;
  }

  try {
    const reply = await callOpenAI(message, payload.history);
    sendJson(res, 200, {
      reply: reply || 'Уучлаарай, одоогоор хариу үүсгэж чадсангүй. Та 8811-9315, 9903-5509 дугаараар холбогдоно уу.',
      actions: recommendActions(message),
      model: OPENAI_MODEL
    });
  } catch (error) {
    sendJson(res, 502, {
      error: 'AI_UPSTREAM_ERROR',
      message: error.message || 'OpenAI API error'
    });
  }
}

async function handleAdminContent(req, res, url) {
  const parts = url.pathname.split('/').filter(Boolean);
  const slug = parts[3];

  if (req.method === 'GET' && parts.length === 3) {
    sendJson(res, 200, {
      collections: Object.entries(contentCollections).map(([key, value]) => ({
        slug: key,
        label: value.label,
        file: value.file,
        listKey: value.listKey
      })),
      authRequired: Boolean(ADMIN_TOKEN)
    });
    return;
  }

  if (!isAdminAuthorized(req)) {
    sendJson(res, 401, { error: 'UNAUTHORIZED', authRequired: true });
    return;
  }

  if (!slug || !getCollection(slug)) {
    sendJson(res, 404, { error: 'UNKNOWN_COLLECTION' });
    return;
  }

  if (req.method === 'GET') {
    try {
      sendJson(res, 200, readContentCollection(slug));
    } catch (error) {
      sendJson(res, 500, { error: 'READ_FAILED', message: error.message });
    }
    return;
  }

  if (req.method === 'PUT') {
    let payload;
    try {
      payload = JSON.parse(await readRequestBody(req, 900000));
    } catch (error) {
      sendJson(res, 400, { error: 'BAD_JSON', message: error.message });
      return;
    }

    try {
      const data = payload && Object.prototype.hasOwnProperty.call(payload, 'data') ? payload.data : payload;
      const updated = writeContentCollection(slug, data);
      sendJson(res, 200, {
        ok: true,
        savedAt: new Date().toISOString(),
        collection: updated
      });
    } catch (error) {
      sendJson(res, 400, { error: 'SAVE_FAILED', message: error.message });
    }
    return;
  }

  sendJson(res, 405, { error: 'METHOD_NOT_ALLOWED' });
}

function serveStatic(req, res, pathname) {
  const cleanPath = decodeURIComponent(pathname === '/' ? '/index.html' : pathname);
  const target = path.normalize(path.join(ROOT, cleanPath));

  if (!target.startsWith(ROOT)) {
    sendText(res, 403, 'Forbidden');
    return;
  }

  fs.stat(target, (statError, stat) => {
    if (statError) {
      sendText(res, 404, 'Not found');
      return;
    }

    const fileTarget = stat.isDirectory() ? path.join(target, 'index.html') : target;
    if (!fileTarget.startsWith(ROOT)) {
      sendText(res, 403, 'Forbidden');
      return;
    }

    fs.stat(fileTarget, (fileError, fileStat) => {
      if (fileError || !fileStat.isFile()) {
        sendText(res, 404, 'Not found');
        return;
      }

      const ext = path.extname(fileTarget).toLowerCase();
      res.writeHead(200, {
        'Content-Type': mimeTypes[ext] || 'application/octet-stream',
        'Cache-Control': ext === '.html' ? 'no-store' : 'public, max-age=300'
      });
      fs.createReadStream(fileTarget).pipe(res);
    });
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || '127.0.0.1'}`);

  if (req.method === 'GET' && url.pathname === '/api/chat/status') {
    sendJson(res, 200, {
      ok: true,
      ai: Boolean(OPENAI_API_KEY),
      model: OPENAI_MODEL,
      endpoint: 'responses'
    });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/chat') {
    handleChat(req, res);
    return;
  }

  if (url.pathname === '/api/admin/content' || url.pathname.startsWith('/api/admin/content/')) {
    handleAdminContent(req, res, url);
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    sendJson(res, 405, { error: 'METHOD_NOT_ALLOWED' });
    return;
  }

  serveStatic(req, res, url.pathname);
});

server.listen(PORT, '127.0.0.1', () => {
  const aiState = OPENAI_API_KEY ? `AI enabled with ${OPENAI_MODEL}` : 'AI fallback mode: OPENAI_API_KEY is not set';
  console.log(`BEGZ site running at http://127.0.0.1:${PORT}/`);
  console.log(aiState);
});
