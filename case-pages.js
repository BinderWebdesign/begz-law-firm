(function () {
  const LANGS = ['mn', 'en', 'zh', 'ko'];
  const fallbackCases = { items: [] };
  let casesCache = null;

  function currentLang() {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (LANGS.includes(q)) return q;
    const stored = localStorage.getItem('begz-lang');
    return LANGS.includes(stored) ? stored : 'mn';
  }

  function pick(value, lang = currentLang()) {
    if (value == null) return '';
    if (Array.isArray(value)) return value.map((entry) => pick(entry, lang));
    if (typeof value === 'object') {
      if (LANGS.some((key) => Object.prototype.hasOwnProperty.call(value, key))) {
        return value[lang] || value.mn || value.en || value.zh || value.ko || '';
      }
      return value;
    }
    return String(value);
  }

  function pickList(value, lang = currentLang()) {
    if (!Array.isArray(value)) return [];
    return value.map((entry) => pick(entry, lang)).filter((entry) => entry !== '');
  }

  function staticText(mn, map) {
    const lang = currentLang();
    return (map && map[lang]) || mn;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }


  function visibleItems(items) {
    if (!Array.isArray(items)) return [];
    return items.filter((item) => item && item.published !== false);
  }

  function orderedItems(items) {
    return visibleItems(items).slice().sort((a, b) => {
      const ao = Number(a.order);
      const bo = Number(b.order);
      const hasA = Number.isFinite(ao);
      const hasB = Number.isFinite(bo);
      if (hasA && hasB && ao !== bo) return ao - bo;
      if (hasA && !hasB) return -1;
      if (!hasA && hasB) return 1;
      return 0;
    });
  }

  function getCaseId(item, index) {
    return item.id || item.slug || `case-${index + 1}`;
  }

  function getDetailUrl(item, index) {
    const lang = currentLang();
    const suffix = lang === 'mn' ? '' : `&lang=${encodeURIComponent(lang)}`;
    return `case-detail.html?id=${encodeURIComponent(getCaseId(item, index))}${suffix}`;
  }

  function renderTags(tags) {
    const localized = pickList(tags);
    if (!localized.length) return '';
    return `<div class="case-tags">${localized.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>`;
  }

  async function loadCases() {
    if (casesCache) return casesCache;
    const paths = ['content/cases.json', './content/cases.json', '/content/cases.json'];
    let lastError = null;
    for (const path of paths) {
      try {
        const response = await fetch(path, { cache: 'no-store' });
        if (!response.ok) throw new Error(`${path}: ${response.status}`);
        casesCache = await response.json();
        return casesCache;
      } catch (error) {
        lastError = error;
      }
    }
    console.warn('Case JSON fallback:', lastError?.message || 'unknown error');
    casesCache = fallbackCases;
    return casesCache;
  }

  function renderList(data) {
    const list = document.querySelector('#case-list');
    if (!list || !Array.isArray(data.items)) return;
    const items = orderedItems(data.items);
    const countEl = document.querySelector('#case-count');
    if (countEl) countEl.textContent = String(items.length);
    const readMore = staticText('Дэлгэрэнгүй унших →', {
      en: 'Read more →',
      zh: '阅读更多 →',
      ko: '자세히 보기 →'
    });
    list.innerHTML = items.map((item, index) => {
      const color = item.color || '#8A7650';
      return `
        <article class="case-card" style="border-left-color:${escapeHtml(color)}">
          <div class="case-meta">
            <span style="color:${escapeHtml(color)}">${escapeHtml(pick(item.category))}</span>
            <span>${escapeHtml(item.date || item.year)}</span>
          </div>
          <h2>${escapeHtml(pick(item.title))}</h2>
          <p>${escapeHtml(pick(item.text))}</p>
          ${renderTags(item.tags)}
          <a class="read-more" href="${escapeHtml(getDetailUrl(item, index))}" style="color:${escapeHtml(color)}">${escapeHtml(readMore)}</a>
        </article>
      `;
    }).join('');
  }

  function renderDetail(data) {
    const container = document.querySelector('#case-detail');
    if (!container || !Array.isArray(data.items)) return;

    const items = orderedItems(data.items);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const item = items.find((entry, index) => getCaseId(entry, index) === id) || items[0];
    if (!item) {
      container.innerHTML = `<div class="error-box">${escapeHtml(staticText('Мэдээлэл олдсонгүй.', { en: 'No information found.', zh: '未找到信息。', ko: '정보를 찾을 수 없습니다.' }))}</div>`;
      return;
    }
    const color = item.color || '#8A7650';
    const approach = pickList(item.approach);
    const related = items.filter((entry) => entry !== item).slice(0, 3);

    const title = pick(item.title);
    const category = pick(item.category) || staticText('Тойм мэдээ', { en: 'Case Review', zh: '案例综述', ko: '사례 리뷰' });
    const summary = pick(item.text);
    const context = pick(item.context) || summary;
    const result = pick(item.result) || summary;
    const duration = pick(item.duration);

    document.title = `${title} - BEGZ Law Firm`;
    const detailCategory = document.querySelector('#detail-category');
    const detailTitle = document.querySelector('#detail-title');
    const detailSummary = document.querySelector('#detail-summary');
    const detailDate = document.querySelector('#detail-date');
    if (detailCategory) detailCategory.textContent = category;
    if (detailTitle) detailTitle.textContent = title || staticText('Шүүхийн шийдвэрийн тойм', { en: 'Court Decision Case Review', zh: '法院判决案例综述', ko: '법원 판결 사례 리뷰' });
    if (detailSummary) detailSummary.textContent = summary;
    if (detailDate) detailDate.textContent = item.date || item.year || '';

    const resolvedLabel = staticText('Шийдвэрлэсэн', { en: 'Resolved', zh: '已解决', ko: '해결' });
    const durationLabel = staticText('Хугацаа', { en: 'Duration', zh: '期限', ko: '기간' });
    const contextTitle = staticText('Нөхцөл байдал', { en: 'Context', zh: '背景情况', ko: '상황' });
    const approachTitle = staticText('Бидний хийсэн ажил', { en: 'Our Work', zh: '我们的工作', ko: '저희가 수행한 업무' });
    const resultTitle = staticText('Үр дүн', { en: 'Result', zh: '结果', ko: '결과' });
    const privacyTitle = staticText('Нууцлалын тэмдэглэл', { en: 'Confidentiality Note', zh: '保密说明', ko: '비밀유지 안내' });
    const privacyText = staticText('Үйлчлүүлэгчийн нэр, хувийн мэдээлэл, хэрэгт хамаарах нууц баримтыг нийтлээгүй. Энэхүү тойм нь ерөнхий мэдээллийн зориулалттай.', {
      en: 'The client’s name, personal information, and confidential case-related documents are not published. This review is provided for general information only.',
      zh: '客户姓名、个人信息及案件相关保密文件均未公开。本案例综述仅供一般信息参考。',
      ko: '의뢰인의 이름, 개인정보 및 사건 관련 비밀 자료는 공개하지 않았습니다. 본 리뷰는 일반 정보 제공을 위한 것입니다.'
    });
    const relatedTitle = staticText('Бусад тойм мэдээ', { en: 'Other Case Reviews', zh: '其他案例综述', ko: '다른 사례 리뷰' });

    container.innerHTML = `
      <article class="detail-card">
        <div class="case-meta">
          <span style="color:${escapeHtml(color)}">${escapeHtml(category)}</span>
          <span>${escapeHtml(resolvedLabel)}: ${escapeHtml(item.year)}</span>
          ${duration ? `<span>${escapeHtml(durationLabel)}: ${escapeHtml(duration)}</span>` : ''}
        </div>
        ${renderTags(item.tags)}
        <h2>${escapeHtml(contextTitle)}</h2>
        <p>${escapeHtml(context)}</p>
        <h2>${escapeHtml(approachTitle)}</h2>
        <ul>
          ${approach.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
        </ul>
        <h2>${escapeHtml(resultTitle)}</h2>
        <p>${escapeHtml(result)}</p>
        <div class="notice-box">
          <strong>${escapeHtml(privacyTitle)}</strong>
          <p>${escapeHtml(privacyText)}</p>
        </div>
      </article>
      <aside class="related-card">
        <h2>${escapeHtml(relatedTitle)}</h2>
        ${related.map((entry) => `
          <a href="${escapeHtml(getDetailUrl(entry, items.indexOf(entry)))}">
            <span>${escapeHtml(pick(entry.category))}</span>
            <strong>${escapeHtml(pick(entry.title))}</strong>
          </a>
        `).join('')}
      </aside>
    `;
  }

  async function renderCurrentPage() {
    try {
      const data = await loadCases();
      if (document.body.dataset.casePage === 'list') renderList(data);
      if (document.body.dataset.casePage === 'detail') renderDetail(data);
    } catch (error) {
      const target = document.querySelector('#case-list, #case-detail');
      if (target) target.innerHTML = `<div class="error-box">${escapeHtml(staticText('Мэдээлэл ачаалахад алдаа гарлаа.', { en: 'Failed to load information.', zh: '信息加载失败。', ko: '정보를 불러오지 못했습니다.' }))}</div>`;
      console.warn('Case page fallback:', error.message);
    }
  }

  window.BEGZ_CASES = Object.assign(window.BEGZ_CASES || {}, {
    currentLang,
    pick,
    pickList,
    reload: renderCurrentPage
  });

  document.addEventListener('begz:languagechange', () => {
    renderCurrentPage().catch((error) => console.warn('Case page language switch:', error.message));
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCurrentPage, { once: true });
  } else {
    renderCurrentPage();
  }
})();
