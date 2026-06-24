(function () {
  const contentCache = {};
  const LANGS = ['mn', 'en', 'zh', 'ko'];

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

  function getCaseDetailUrl(item, index) {
    return `case-detail.html?id=${encodeURIComponent(getCaseId(item, index))}`;
  }

  async function loadJson(path) {
    if (contentCache[path]) return contentCache[path];
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${path}: ${response.status}`);
    const data = await response.json();
    contentCache[path] = data;
    return data;
  }

  function renderTeam(data) {
    const grid = document.querySelector('#team .team-grid');
    if (!grid || !Array.isArray(data.members)) return;
    const bookText = staticText('Уулзалт товлох →', {
      en: 'Book a Consultation →',
      zh: '预约咨询 →',
      ko: '상담 예약 →'
    });
    grid.innerHTML = orderedItems(data.members).map((member) => {
      const name = pick(member.name);
      return `
        <div class="team-card">
          <div class="team-photo">
            <img src="${escapeHtml(member.image)}" alt="${escapeHtml(pick(member.alt) || name)}">
          </div>
          <div class="team-name-block">
            <div class="team-photo-name">${escapeHtml(name)}</div>
            <div class="team-photo-role">${escapeHtml(pick(member.role))}</div>
          </div>
          <div class="team-body">
            <div class="team-focus">${escapeHtml(pick(member.focus))}</div>
            <p class="team-bio">${escapeHtml(pick(member.bio))}</p>
            <a href="#contact" class="team-link">${escapeHtml(bookText)}</a>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderHistory(data) {
    const list = document.querySelector('.timeline-list');
    if (!list || !Array.isArray(data.timeline)) return;
    list.innerHTML = orderedItems(data.timeline).map((item) => `
      <article class="timeline-item">
        <div class="timeline-year">${escapeHtml(item.year)}</div>
        <div>
          <h3>${escapeHtml(pick(item.title))}</h3>
          <p class="muted">${escapeHtml(pick(item.text))}</p>
        </div>
      </article>
    `).join('');
  }

  function renderFAQ(data) {
    const list = document.querySelector('#faq-list');
    if (!list || !Array.isArray(data.items)) return;
    list.innerHTML = orderedItems(data.items).map((item, index) => `
      <div class="faq-item" style="border-bottom:${index === orderedItems(data.items).length - 1 ? '0' : '1px solid rgba(255,255,255,.1)'};padding:20px 0">
        <button onclick="toggleFAQ(this)" style="width:100%;background:none;border:none;display:flex;justify-content:space-between;align-items:center;cursor:pointer;gap:16px">
          <span style="font-family:'PT Serif',serif;font-size:17px;font-weight:700;color:#fff;text-align:left">${escapeHtml(pick(item.question))}</span>
          <span style="color:#DBCEA5;font-size:22px;flex-shrink:0;transition:transform .3s">+</span>
        </button>
        <div class="faq-ans" style="display:none;padding-top:12px">
          <p style="font-size:14px;color:rgba(255,255,255,.7);line-height:1.7">${escapeHtml(pick(item.answer))}</p>
        </div>
      </div>
    `).join('');
  }

  function findSectionGrid(id) {
    return document.querySelector(`#${id} .section-inner > div[style*="grid-template-columns"]`);
  }

  function renderCases(data) {
    const grid = findSectionGrid('cases');
    if (!grid || !Array.isArray(data.items)) return;
    const readMore = staticText('Дэлгэрэнгүй унших →', {
      en: 'Read more →',
      zh: '阅读更多 →',
      ko: '자세히 보기 →'
    });
    const resolvedLabel = staticText('Шийдвэрлэсэн', {
      en: 'Resolved',
      zh: '已解决',
      ko: '해결'
    });
    grid.innerHTML = orderedItems(data.items).map((item, index) => {
      const color = item.color || '#8A7650';
      const tags = pickList(item.tags);
      const detailUrl = getCaseDetailUrl(item, index);
      return `
        <div style="background:#fff;border-radius:20px;padding:32px;border-left:4px solid ${escapeHtml(color)}">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
            <div class="case-icon"><svg class="ui-icon"><use href="#${escapeHtml(item.icon || 'icon-scale')}"/></svg></div>
            <div>
              <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:${escapeHtml(color)}">${escapeHtml(pick(item.category))}</div>
              <div style="font-size:13px;color:#5E5748">${escapeHtml(resolvedLabel)}: ${escapeHtml(item.year)}</div>
            </div>
          </div>
          <h4 style="font-family:'PT Serif',serif;font-size:20px;font-weight:700;color:#3F382B;margin-bottom:12px">${escapeHtml(pick(item.title))}</h4>
          <p style="font-size:13.5px;color:#5E5748;line-height:1.7;margin-bottom:16px">${escapeHtml(pick(item.text))}</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px">
            ${tags.map((tag) => `<span style="font-size:11px;background:#DBCEA5;color:#3F382B;padding:4px 12px;border-radius:999px;font-weight:600">${escapeHtml(tag)}</span>`).join('')}
          </div>
          <a href="${escapeHtml(detailUrl)}" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:800;color:${escapeHtml(color)}">${escapeHtml(readMore)}</a>
        </div>
      `;
    }).join('');
  }

  function renderLegalGuide(data) {
    const grid = findSectionGrid('legal-guide');
    if (!grid || !Array.isArray(data.items)) return;
    const adviceText = staticText('Зөвлөгөө авах →', {
      en: 'Get Advice →',
      zh: '获取咨询 →',
      ko: '상담 받기 →'
    });
    grid.innerHTML = orderedItems(data.items).map((item) => {
      const isDark = item.theme !== 'soft';
      const bg = isDark ? '#3F382B' : '#DBCEA5';
      const titleColor = isDark ? '#DBCEA5' : '#3F382B';
      const textColor = isDark ? 'rgba(255,255,255,.75)' : '#5E5748';
      const linkColor = isDark ? '#DBCEA5' : '#8A7650';
      const points = pickList(item.points);
      return `
        <div style="background:${bg};border-radius:20px;padding:28px;color:${isDark ? '#fff' : '#3F382B'}">
          <div class="guide-icon${isDark ? '' : ' is-soft'}"><svg class="ui-icon"><use href="#${escapeHtml(item.icon || 'icon-file')}"/></svg></div>
          <h4 style="font-family:'PT Serif',serif;font-size:19px;font-weight:700;color:${titleColor};margin-bottom:10px">${escapeHtml(pick(item.title))}</h4>
          <ul style="font-size:13px;color:${textColor};line-height:1.8;padding-left:16px">
            ${points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
          </ul>
          <a href="#contact" style="display:inline-flex;align-items:center;gap:6px;margin-top:16px;font-size:12px;font-weight:700;color:${linkColor}">${escapeHtml(adviceText)}</a>
        </div>
      `;
    }).join('');
  }

  async function loadManagedContent() {
    const jobs = [
      ['content/team.json', renderTeam],
      ['content/history.json', renderHistory],
      ['content/faq.json', renderFAQ],
      ['content/cases.json', renderCases],
      ['content/legal-guide.json', renderLegalGuide]
    ];

    await Promise.all(jobs.map(async ([path, render]) => {
      try {
        render(await loadJson(path));
      } catch (error) {
        console.warn('Managed content fallback:', error.message);
      }
    }));
  }

  window.BEGZ_CONTENT = Object.assign(window.BEGZ_CONTENT || {}, {
    currentLang,
    pick,
    pickList,
    reload: loadManagedContent
  });

  document.addEventListener('begz:languagechange', () => {
    loadManagedContent().catch((error) => console.warn('Managed content language switch:', error.message));
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadManagedContent, { once: true });
  } else {
    loadManagedContent();
  }
})();
