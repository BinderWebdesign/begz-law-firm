(function () {
  'use strict';

  const LANGS = [
    ['mn', 'MN'],
    ['en', 'EN'],
    ['zh', 'ZH'],
    ['ko', 'KO']
  ];
  const API_PATH = '/api/admin/content';
  const NETLIFY_FUNCTION_PATH = '/.netlify/functions/admin-content';
  let activeApiPath = null;

  function apiPaths() {
    const paths = [API_PATH, NETLIFY_FUNCTION_PATH];
    if (activeApiPath) return [activeApiPath, ...paths.filter((path) => path !== activeApiPath)];
    if (location.hostname.endsWith('netlify.app')) return [NETLIFY_FUNCTION_PATH, API_PATH];
    return paths;
  }

  function apiUrl(path, suffix = '') {
    return `${path}${suffix}`;
  }

  async function apiFetch(suffix = '', options = {}) {
    const paths = apiPaths();
    let lastResponse = null;
    let lastError = null;

    for (const path of paths) {
      try {
        const response = await fetch(apiUrl(path, suffix), options);
        if (response.status !== 404 || path === paths[paths.length - 1]) {
          activeApiPath = path;
          return response;
        }
        lastResponse = response;
      } catch (error) {
        lastError = error;
        if (path === paths[paths.length - 1]) throw error;
      }
    }

    if (lastResponse) return lastResponse;
    throw lastError || new Error('Admin API холболт амжилтгүй боллоо.');
  }

  const schemas = {
    team: {
      blank: {
        published: true,
        order: 99,
        name: blankLoc(),
        role: blankLoc(),
        focus: blankLoc(),
        bio: blankLoc(),
        image: '',
        alt: blankLoc()
      },
      summary: (item) => pick(item.name) || 'Шинэ гишүүн',
      sub: (item) => pick(item.role) || item.image || '',
      fields: [
        boolField('published', 'Нийтлэх эсэх'),
        numberField('order', 'Дараалал'),
        locField('name', 'Нэр'),
        locField('role', 'Албан тушаал'),
        locField('focus', 'Мэргэшсэн чиглэл'),
        locField('bio', 'Танилцуулга', 'textarea'),
        textField('image', 'Зургийн зам'),
        locField('alt', 'Зургийн alt')
      ]
    },
    history: {
      blank: {
        published: true,
        order: 99,
        year: '',
        title: blankLoc(),
        text: blankLoc()
      },
      summary: (item) => `${item.year || ''} ${pick(item.title) || 'Шинэ үе шат'}`.trim(),
      sub: (item) => pick(item.text),
      fields: [
        boolField('published', 'Нийтлэх эсэх'),
        numberField('order', 'Дараалал'),
        textField('year', 'Он / огноо'),
        locField('title', 'Гарчиг'),
        locField('text', 'Тайлбар', 'textarea')
      ]
    },
    'legal-guide': {
      blank: {
        published: true,
        order: 99,
        title: blankLoc(),
        icon: 'icon-file',
        theme: 'dark',
        points: [blankLoc()]
      },
      summary: (item) => pick(item.title) || 'Шинэ мэдээлэл',
      sub: (item) => Array.isArray(item.points) ? `${item.points.length} заалт` : '',
      fields: [
        boolField('published', 'Нийтлэх эсэх'),
        numberField('order', 'Дараалал'),
        locField('title', 'Гарчиг'),
        textField('icon', 'Icon class'),
        selectField('theme', 'Загвар', [['dark', 'Бараан'], ['soft', 'Цайвар']]),
        locListField('points', 'Заалтууд')
      ]
    },
    cases: {
      blank: {
        published: true,
        order: 99,
        id: '',
        category: blankLoc(),
        year: '',
        date: '',
        title: blankLoc(),
        text: blankLoc(),
        context: blankLoc(),
        approach: [blankLoc()],
        result: blankLoc(),
        duration: blankLoc(),
        tags: [blankLoc()],
        icon: 'icon-scale',
        color: '#8A7650'
      },
      summary: (item) => pick(item.title) || item.id || 'Шинэ тойм мэдээ',
      sub: (item) => `${pick(item.category) || ''} ${item.date || item.year || ''}`.trim(),
      fields: [
        boolField('published', 'Нийтлэх эсэх'),
        numberField('order', 'Дараалал'),
        textField('id', 'ID / slug'),
        locField('category', 'Ангилал'),
        textField('year', 'Он'),
        textField('date', 'Огноо'),
        locField('title', 'Гарчиг'),
        locField('text', 'Картын товч тайлбар', 'textarea'),
        locField('context', 'Нөхцөл байдлын дэлгэрэнгүй', 'textarea'),
        locListField('approach', 'Бидний хийсэн ажил'),
        locField('result', 'Үр дүн', 'textarea'),
        locField('duration', 'Хугацаа'),
        locListField('tags', 'Түлхүүр үгс / tags'),
        textField('icon', 'Icon class'),
        textField('color', 'Өнгө HEX')
      ]
    },
    faq: {
      blank: {
        published: true,
        order: 99,
        question: blankLoc(),
        answer: blankLoc()
      },
      summary: (item) => pick(item.question) || 'Шинэ асуулт',
      sub: (item) => pick(item.answer),
      fields: [
        boolField('published', 'Нийтлэх эсэх'),
        numberField('order', 'Дараалал'),
        locField('question', 'Асуулт'),
        locField('answer', 'Хариулт', 'textarea')
      ]
    }
  };

  const state = {
    collections: [],
    currentSlug: null,
    currentMeta: null,
    data: null,
    selectedIndex: 0,
    dirty: false,
    jsonMode: false,
    token: localStorage.getItem('begz-admin-token') || ''
  };

  const $ = (selector) => document.querySelector(selector);

  function blankLoc() {
    return { mn: '', en: '', zh: '', ko: '' };
  }

  function textField(key, label, input = 'text') {
    return { type: input === 'textarea' ? 'textarea' : 'text', key, label };
  }

  function numberField(key, label) {
    return { type: 'number', key, label };
  }

  function boolField(key, label) {
    return { type: 'boolean', key, label };
  }

  function selectField(key, label, options) {
    return { type: 'select', key, label, options };
  }

  function locField(key, label, input = 'text') {
    return { type: 'localized', key, label, input };
  }

  function locListField(key, label) {
    return { type: 'localizedList', key, label };
  }

  function pick(value) {
    if (!value) return '';
    if (typeof value === 'object' && !Array.isArray(value)) {
      return value.mn || value.en || value.zh || value.ko || '';
    }
    return String(value);
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function headers() {
    const result = { 'Content-Type': 'application/json' };
    if (state.token) result['x-admin-token'] = state.token;
    return result;
  }

  function setStatus(message, type = '') {
    const el = $('#status');
    el.textContent = message || '';
    el.className = `status ${type}`.trim();
  }

  function markDirty() {
    state.dirty = true;
    $('#save-btn')?.classList.add('dirty');
    setStatus('Хадгалаагүй өөрчлөлт байна.', '');
  }

  function schema() {
    return schemas[state.currentSlug] || schemas.faq;
  }

  function items() {
    if (!state.currentMeta || !state.data) return [];
    const key = state.currentMeta.listKey;
    if (!Array.isArray(state.data[key])) state.data[key] = [];
    return state.data[key];
  }

  function renderNav() {
    $('#collection-nav').innerHTML = state.collections.map((item) => `
      <button type="button" class="${item.slug === state.currentSlug ? 'active' : ''}" data-slug="${escapeHtml(item.slug)}">
        ${escapeHtml(item.label)}
      </button>
    `).join('');
  }

  function renderList() {
    const list = items();
    $('#item-count').textContent = `${list.length}`;
    $('#item-list').innerHTML = list.length ? list.map((item, index) => `
      <button type="button" class="item ${index === state.selectedIndex ? 'active' : ''}" data-index="${index}">
        <strong>${escapeHtml(schema().summary(item))}</strong>
        <span>${escapeHtml(schema().sub(item)).slice(0, 110)}</span>
      </button>
    `).join('') : '<div class="empty">Мөр алга байна.</div>';
  }

  function ensureLoc(item, key) {
    if (!item[key] || typeof item[key] !== 'object' || Array.isArray(item[key])) item[key] = blankLoc();
    for (const [lang] of LANGS) {
      if (typeof item[key][lang] !== 'string') item[key][lang] = item[key][lang] == null ? '' : String(item[key][lang]);
    }
    return item[key];
  }

  function renderTextField(field, item) {
    const value = item[field.key] ?? '';
    const tag = field.type === 'textarea' ? 'textarea' : 'input';
    if (tag === 'textarea') {
      return `<div class="field"><label>${escapeHtml(field.label)}</label><textarea data-field="${field.key}">${escapeHtml(value)}</textarea></div>`;
    }
    return `<div class="field"><label>${escapeHtml(field.label)}</label><input data-field="${field.key}" value="${escapeHtml(value)}"></div>`;
  }

  function renderNumberField(field, item) {
    return `<div class="field"><label>${escapeHtml(field.label)}</label><input type="number" data-field="${field.key}" value="${escapeHtml(item[field.key] ?? '')}"></div>`;
  }

  function renderBoolField(field, item) {
    return `
      <div class="field">
        <span class="label">${escapeHtml(field.label)}</span>
        <label style="display:flex;align-items:center;gap:10px;text-transform:none;letter-spacing:0;color:#3F382B">
          <input type="checkbox" data-field="${field.key}" ${item[field.key] !== false ? 'checked' : ''}>
          Сайт дээр харуулах
        </label>
      </div>
    `;
  }

  function renderSelectField(field, item) {
    return `
      <div class="field">
        <label>${escapeHtml(field.label)}</label>
        <select data-field="${field.key}">
          ${field.options.map(([value, label]) => `<option value="${escapeHtml(value)}" ${item[field.key] === value ? 'selected' : ''}>${escapeHtml(label)}</option>`).join('')}
        </select>
      </div>
    `;
  }

  function renderLocalizedField(field, item) {
    const value = ensureLoc(item, field.key);
    return `
      <div class="localized">
        <div class="label">${escapeHtml(field.label)}</div>
        <div class="localized-grid">
          ${LANGS.map(([lang, label]) => {
            const common = `data-loc-field="${field.key}" data-lang="${lang}"`;
            if (field.input === 'textarea') {
              return `<div class="field"><label>${label}</label><textarea ${common}>${escapeHtml(value[lang])}</textarea></div>`;
            }
            return `<div class="field"><label>${label}</label><input ${common} value="${escapeHtml(value[lang])}"></div>`;
          }).join('')}
        </div>
      </div>
    `;
  }

  function renderLocalizedListField(field, item) {
    if (!Array.isArray(item[field.key])) item[field.key] = [];
    const rows = item[field.key].map((entry, index) => {
      if (!entry || typeof entry !== 'object' || Array.isArray(entry)) item[field.key][index] = blankLoc();
      const value = item[field.key][index];
      return `
        <div class="array-item">
          <div class="array-head">
            <span class="label">Мөр ${index + 1}</span>
            <button class="icon-btn" type="button" data-remove-list="${field.key}" data-list-index="${index}" title="Устгах">×</button>
          </div>
          <div class="localized-grid">
            ${LANGS.map(([lang, label]) => `
              <div class="field">
                <label>${label}</label>
                <textarea data-list-field="${field.key}" data-list-index="${index}" data-lang="${lang}">${escapeHtml(value[lang] || '')}</textarea>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="array-field">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
          <span class="label">${escapeHtml(field.label)}</span>
          <button class="btn" type="button" data-add-list="${field.key}">Мөр нэмэх</button>
        </div>
        ${rows || '<div class="empty">Мөр алга байна.</div>'}
      </div>
    `;
  }

  function renderField(field, item) {
    if (field.type === 'boolean') return renderBoolField(field, item);
    if (field.type === 'number') return renderNumberField(field, item);
    if (field.type === 'select') return renderSelectField(field, item);
    if (field.type === 'localized') return renderLocalizedField(field, item);
    if (field.type === 'localizedList') return renderLocalizedListField(field, item);
    return renderTextField(field, item);
  }

  function renderEditor() {
    renderNav();
    renderList();
    const list = items();
    const item = list[state.selectedIndex];
    $('#page-title').textContent = state.currentMeta ? state.currentMeta.label : 'Мэдээлэл';

    if (state.jsonMode) {
      $('#editor-title').textContent = 'JSON засвар';
      $('#editor').innerHTML = `<textarea class="json-box" id="json-editor">${escapeHtml(JSON.stringify(state.data, null, 2))}</textarea>`;
      return;
    }

    $('#editor-title').textContent = item ? schema().summary(item) : 'Засварлах';
    $('#editor').innerHTML = item
      ? `<div class="fields">${schema().fields.map((field) => renderField(field, item)).join('')}</div>`
      : '<div class="empty">Жагсаалтаас мөр сонгоно уу.</div>';
  }

  async function loadCollections() {
    setStatus('Ачаалж байна...', '');
    const response = await apiFetch('', { headers: headers() });
    if (response.status === 401) {
      $('#token-box').classList.add('show');
      setStatus('ADMIN_TOKEN оруулаад "Дахин ачаалах" дарна уу.', 'error');
      return;
    }
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload.message || `Admin API алдаа: ${response.status}`);
    }
    const data = await response.json();
    state.collections = data.collections || [];
    $('#token-box').classList.toggle('show', Boolean(data.authRequired));
    if (data.authRequired && state.token) $('#admin-token').value = state.token;
    state.currentSlug = state.currentSlug || state.collections[0]?.slug || null;
    renderNav();
    if (state.currentSlug) await loadCollection(state.currentSlug);
  }

  async function loadCollection(slug) {
    if (state.dirty && !confirm('Хадгалаагүй өөрчлөлт байна. Солих уу?')) return;
    state.currentSlug = slug;
    state.selectedIndex = 0;
    state.jsonMode = false;
    setStatus('Мэдээлэл ачаалж байна...', '');
    renderNav();
    const response = await apiFetch(`/${slug}`, { headers: headers() });
    if (response.status === 401) {
      $('#token-box').classList.add('show');
      setStatus('ADMIN_TOKEN оруулаад "Дахин ачаалах" дарна уу.', 'error');
      return;
    }
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload.message || `Мэдээлэл уншиж чадсангүй: ${response.status}`);
    }
    const payload = await response.json();
    state.currentMeta = payload;
    state.data = payload.data;
    state.dirty = false;
    $('#save-btn')?.classList.remove('dirty');
    setStatus('Мэдээлэл ачааллаа.', 'ok');
    renderEditor();
  }

  function currentItem() {
    return items()[state.selectedIndex];
  }

  function updateSimple(target) {
    const item = currentItem();
    if (!item) return;
    let value = target.value;
    if (target.type === 'checkbox') value = target.checked;
    if (target.type === 'number') value = target.value === '' ? '' : Number(target.value);
    item[target.dataset.field] = value;
    markDirty();
    renderList();
  }

  function updateLocalized(target) {
    const item = currentItem();
    if (!item) return;
    const key = target.dataset.locField;
    const lang = target.dataset.lang;
    ensureLoc(item, key)[lang] = target.value;
    markDirty();
    renderList();
  }

  function updateList(target) {
    const item = currentItem();
    if (!item) return;
    const key = target.dataset.listField;
    const index = Number(target.dataset.listIndex);
    const lang = target.dataset.lang;
    if (!Array.isArray(item[key])) item[key] = [];
    if (!item[key][index] || typeof item[key][index] !== 'object') item[key][index] = blankLoc();
    item[key][index][lang] = target.value;
    markDirty();
  }

  function updateJson(value) {
    try {
      state.data = JSON.parse(value);
      markDirty();
      setStatus('JSON зөв байна. Хадгалах боломжтой.', 'ok');
    } catch (error) {
      setStatus(`JSON алдаа: ${error.message}`, 'error');
    }
  }

  function addItem() {
    const list = items();
    list.push(clone(schema().blank));
    state.selectedIndex = list.length - 1;
    state.jsonMode = false;
    markDirty();
    renderEditor();
  }

  function deleteItem() {
    const list = items();
    if (!list.length) return;
    const removed = list.splice(state.selectedIndex, 1)[0];
    const label = schema().summary(removed);
    state.selectedIndex = Math.max(0, state.selectedIndex - 1);
    markDirty();
    renderEditor();
    setStatus(`"${label}" жагсаалтаас хасагдлаа. Бүр хадгалах бол "Хадгалах" дарна уу.`, 'ok');
  }

  async function save() {
    if (state.jsonMode) {
      const jsonValue = $('#json-editor')?.value || '';
      try {
        state.data = JSON.parse(jsonValue);
      } catch (error) {
        setStatus(`JSON алдаа: ${error.message}`, 'error');
        return;
      }
    }

    setStatus('Хадгалж байна...', '');
    const response = await apiFetch(`/${state.currentSlug}`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify({ data: state.data })
    });
    const payload = await response.json().catch(() => ({}));
    if (response.status === 401) {
      $('#token-box').classList.add('show');
      setStatus('ADMIN_TOKEN оруулаад дахин хадгална уу.', 'error');
      return;
    }
    if (!response.ok) {
      setStatus(payload.message || `Хадгалах алдаа: ${response.status}`, 'error');
      return;
    }
    state.currentMeta = payload.collection;
    state.data = payload.collection.data;
    state.dirty = false;
    $('#save-btn')?.classList.remove('dirty');
    const savedText = payload.commitUrl
      ? `Хадгаллаа. GitHub commit үүссэн, Netlify deploy удахгүй шинэчилнэ. ${new Date(payload.savedAt).toLocaleString('mn-MN')}`
      : `Хадгаллаа. ${new Date(payload.savedAt).toLocaleString('mn-MN')}`;
    setStatus(savedText, 'ok');
    renderEditor();
  }

  function bindEvents() {
    $('#collection-nav').addEventListener('click', (event) => {
      const button = event.target.closest('[data-slug]');
      if (!button) return;
      loadCollection(button.dataset.slug).catch((error) => setStatus(error.message, 'error'));
    });

    $('#item-list').addEventListener('click', (event) => {
      const button = event.target.closest('[data-index]');
      if (!button) return;
      state.selectedIndex = Number(button.dataset.index);
      state.jsonMode = false;
      renderEditor();
    });

    $('#editor').addEventListener('input', (event) => {
      const target = event.target;
      if (target.id === 'json-editor') return updateJson(target.value);
      if (target.matches('[data-loc-field]')) return updateLocalized(target);
      if (target.matches('[data-list-field]')) return updateList(target);
      if (target.matches('[data-field]')) return updateSimple(target);
    });

    $('#editor').addEventListener('change', (event) => {
      if (event.target.matches('[data-field]')) updateSimple(event.target);
    });

    $('#editor').addEventListener('click', (event) => {
      const add = event.target.closest('[data-add-list]');
      if (add) {
        const item = currentItem();
        const key = add.dataset.addList;
        if (!Array.isArray(item[key])) item[key] = [];
        item[key].push(blankLoc());
        markDirty();
        renderEditor();
        return;
      }
      const remove = event.target.closest('[data-remove-list]');
      if (remove) {
        const item = currentItem();
        const key = remove.dataset.removeList;
        const index = Number(remove.dataset.listIndex);
        if (Array.isArray(item[key])) item[key].splice(index, 1);
        markDirty();
        renderEditor();
      }
    });

    $('#save-btn').addEventListener('click', () => save().catch((error) => setStatus(error.message, 'error')));
    $('#add-btn').addEventListener('click', addItem);
    $('#delete-btn').addEventListener('click', deleteItem);
    $('#reload-btn').addEventListener('click', () => {
      const loader = state.currentSlug ? loadCollection(state.currentSlug) : loadCollections();
      loader.catch((error) => setStatus(error.message, 'error'));
    });
    $('#json-btn').addEventListener('click', () => {
      state.jsonMode = !state.jsonMode;
      renderEditor();
    });
    $('#admin-token').addEventListener('input', (event) => {
      state.token = event.target.value;
      localStorage.setItem('begz-admin-token', state.token);
    });
    $('#admin-token').addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      event.preventDefault();
      const loader = state.currentSlug ? loadCollection(state.currentSlug) : loadCollections();
      loader.catch((error) => setStatus(error.message, 'error'));
    });
    window.addEventListener('beforeunload', (event) => {
      if (!state.dirty) return;
      event.preventDefault();
      event.returnValue = '';
    });
  }

  bindEvents();
  loadCollections().catch((error) => setStatus(error.message, 'error'));
})();
