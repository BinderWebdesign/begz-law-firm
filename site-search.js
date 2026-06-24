(function () {
  let items = [
    {
      title: 'Нүүр хуудас',
      type: 'Хуудас',
      url: 'index.html',
      text: 'BEGZ LAW FIRM Бэгз Ло Консалтинг хууль зүйн үйлчилгээ өмгөөлөл зөвлөгөө шүүхэд төлөөлөх'
    },
    {
      title: 'Түүхэн товчоо',
      type: 'Мэдээлэл',
      url: 'history.html',
      text: '2008 2016 2025 2026 түүхэн товчоо замнал туршлага Бэгз Ло Консалтинг байгуулагдсан шинэ бүтэц'
    },
    {
      title: 'Танилцуулга',
      type: 'Бидний тухай',
      url: 'index.html#about',
      text: 'танилцуулга бидний тухай байгууллага хууль зүйн салбар туршлага'
    },
    {
      title: 'Манай баг',
      type: 'Бидний тухай',
      url: 'index.html#team',
      text: 'баг хуульч өмгөөлөгч мэргэжлийн туршлага'
    },
    {
      title: 'Бид хэрхэн ажилладаг вэ',
      type: 'Бидний тухай',
      url: 'index.html#experience',
      text: 'ажлын процесс арга барил нууцлал стратеги үнэлгээ эрсдэл'
    },
    {
      title: 'Хууль зүйн зөвлөх үйлчилгээ',
      type: 'Үйлчилгээ',
      url: 'legal-advisory.html',
      text: 'зөвлөх үйлчилгээ гэрээ баримт бичиг компанийн шийдвэр эрсдэлийн зөвлөмж тогтмол зөвлөгөө'
    },
    {
      title: 'Шүүхэд төлөөлөх үйлчилгээ',
      type: 'Үйлчилгээ',
      url: 'court-representation.html',
      text: 'шүүхэд төлөөлөх нэхэмжлэл хариу тайлбар нотлох баримт шүүх хуралдаан маргаан'
    },
    {
      title: 'Өмгөөллийн үйлчилгээ',
      type: 'Үйлчилгээ',
      url: 'advocacy.html',
      text: 'өмгөөлөл эрх ашиг хамгаалалт хэрэг маргаан стратеги нууцлал'
    },
    {
      title: 'Хууль зүйн мэдээлэл',
      type: 'Мэдээлэл',
      url: 'index.html#legal-guide',
      text: 'хууль зүйн мэдээлэл гарын авлага зөвлөгөө гэрээ шүүх баримт бичиг'
    },
    {
      title: 'Түгээмэл асуулт хариулт',
      type: 'Мэдээлэл',
      url: 'index.html#faq',
      text: 'асуулт хариулт FAQ зөвлөгөө уулзалт үнэ хугацаа баримт бичиг'
    },
    {
      title: 'Шүүхийн шийдвэрийн тойм мэдээ',
      type: 'Мэдээлэл',
      url: 'cases.html',
      text: 'шүүхийн шийдвэр тойм мэдээ маргаан хэрэг шийдэл амжилтын жишээ'
    },
    {
      title: 'Уулзалт товлох',
      type: 'Холбоо барих',
      url: 'index.html#contact',
      text: 'холбоо барих уулзалт товлох зөвлөгөө авах утас имэйл хаяг'
    },
    {
      title: 'Лого татах',
      type: 'Мэдээлэл',
      url: 'begz-logo-download.svg',
      text: 'лого татах brand svg BEGZ LAW FIRM'
    },
    {
      title: 'Нууцлалын бодлого',
      type: 'Мэдэгдэл',
      url: 'privacy.html',
      text: 'нууцлал хувийн мэдээлэл баримт бичиг хамгаалалт мэдээлэл ашиглах гуравдагч этгээд холбоо барих'
    },
    {
      title: 'Вебсайт ашиглалтын мэдэгдэл',
      type: 'Мэдэгдэл',
      url: 'notice.html',
      text: 'мэдэгдэл хууль зүйн зөвлөгөө биш өмгөөлөгч үйлчлүүлэгчийн харилцаа үр дүнгийн баталгаа зохиогчийн эрх'
    }
  ];


  const LANGS = ['mn', 'en', 'zh', 'ko'];
  const baseItems = items.slice();

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
    return value.map((entry) => pick(entry, lang)).filter(Boolean);
  }


  function visibleItems(list) {
    return Array.isArray(list) ? list.filter((item) => item && item.published !== false) : [];
  }

  function orderedItems(list) {
    return visibleItems(list).slice().sort((a, b) => {
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

  const iconSearch = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="M16 16l4 4"></path></svg>';
  const iconClose = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>';

  function injectStyles() {
    if (document.getElementById('site-search-style')) return;
    const style = document.createElement('style');
    style.id = 'site-search-style';
    style.textContent = `
      .site-search-trigger{width:38px;height:38px;border:1px solid rgba(138,118,80,.24);background:rgba(255,255,255,.72);color:#5F674F;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,color .2s,border-color .2s,box-shadow .2s;flex:0 0 auto}
      .site-search-trigger:hover{background:#fff;border-color:#8E977D;box-shadow:0 8px 22px rgba(63,56,43,.12)}
      .site-search-trigger svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
      header.is-scrolled .site-search-trigger{color:#F8FFFC;border-color:rgba(255,255,255,.36);background:rgba(255,255,255,.08)}
      body.search-open{overflow:hidden}
      .site-search-shell{position:fixed;inset:0;z-index:120;display:none;align-items:flex-start;justify-content:center;background:rgba(20,45,41,.38);backdrop-filter:blur(8px);padding:88px 18px 24px}
      .site-search-shell.open{display:flex}
      .site-search-modal{width:min(720px,100%);max-height:min(720px,calc(100vh - 120px));background:#fff;border:1px solid #CFC39D;border-radius:8px;box-shadow:0 26px 80px rgba(63,56,43,.24);display:flex;flex-direction:column;overflow:hidden}
      .site-search-head{display:grid;grid-template-columns:1fr 38px;gap:12px;align-items:center;padding:18px;border-bottom:1px solid #CFC39D;background:#ECE7D1}
      .site-search-input-wrap{position:relative}
      .site-search-input-wrap svg{position:absolute;left:14px;top:50%;width:18px;height:18px;transform:translateY(-50%);fill:none;stroke:#8E977D;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
      .site-search-input{width:100%;height:46px;border:1px solid #CFC39D;border-radius:8px;background:#fff;color:#3F382B;font:600 15px Calibri,Arial,sans-serif;padding:0 14px 0 44px;outline:none}
      .site-search-input:focus{border-color:#8E977D;box-shadow:0 0 0 3px rgba(142,151,125,.16)}
      .site-search-close{width:38px;height:38px;border:1px solid #CFC39D;background:#fff;color:#5F674F;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer}
      .site-search-close svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}
      .site-search-results{overflow:auto;padding:10px}
      .site-search-result{display:grid;gap:5px;border:1px solid transparent;border-radius:8px;padding:13px 14px;color:#3F382B}
      .site-search-result:hover,.site-search-result:focus{background:#ECE7D1;border-color:#CFC39D;outline:none}
      .site-search-result-title{display:flex;align-items:center;justify-content:space-between;gap:12px;font-weight:800;color:#5F674F}
      .site-search-result-type{font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#8E977D;white-space:nowrap}
      .site-search-result-text{font-size:13px;color:#5E5748;line-height:1.45}
      .site-search-empty{padding:26px 18px;color:#5E5748;text-align:center}
      @media(max-width:640px){
        .site-search-shell{padding:76px 12px 12px}
        .site-search-modal{max-height:calc(100vh - 92px)}
        .site-search-head{padding:12px}
      }
    `;
    document.head.appendChild(style);
  }

  function normalize(value) {
    return (value || '').toString().toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function score(item, query) {
    if (!query) return item.url === 'history.html' || item.url.includes('#contact') || item.url.includes('legal') ? 2 : 1;
    const title = normalize(item.title);
    const type = normalize(item.type);
    const text = normalize(item.text);
    const tokens = query.split(' ').filter(Boolean);
    let value = 0;
    for (const token of tokens) {
      if (title === token) value += 12;
      else if (title.includes(token)) value += 8;
      if (type.includes(token)) value += 4;
      if (text.includes(token)) value += 3;
    }
    return value;
  }

  function getResults(query) {
    const q = normalize(query);
    return items
      .map((item) => ({ item, score: score(item, q) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'mn'))
      .slice(0, 8)
      .map((entry) => entry.item);
  }

  function createShell() {
    if (document.querySelector('.site-search-shell')) return document.querySelector('.site-search-shell');
    const shell = document.createElement('div');
    shell.className = 'site-search-shell';
    shell.setAttribute('role', 'dialog');
    shell.setAttribute('aria-modal', 'true');
    shell.setAttribute('aria-label', 'Хайлт');
    shell.innerHTML = `
      <div class="site-search-modal">
        <div class="site-search-head">
          <label class="site-search-input-wrap">
            ${iconSearch}
            <input class="site-search-input" type="search" placeholder="Хайлт..." autocomplete="off">
          </label>
          <button class="site-search-close" type="button" aria-label="Хаах">${iconClose}</button>
        </div>
        <div class="site-search-results"></div>
      </div>
    `;
    document.body.appendChild(shell);
    return shell;
  }

  function renderResults(shell, query) {
    const box = shell.querySelector('.site-search-results');
    const results = getResults(query);
    if (!results.length) {
      box.innerHTML = '<div class="site-search-empty">Илэрц олдсонгүй.</div>';
      return;
    }
    box.innerHTML = results.map((item) => `
      <a class="site-search-result" href="${item.url}">
        <span class="site-search-result-title">
          <span>${item.title}</span>
          <span class="site-search-result-type">${item.type}</span>
        </span>
        <span class="site-search-result-text">${item.text.split(' ').slice(0, 16).join(' ')}</span>
      </a>
    `).join('');
  }

  function openSearch() {
    const shell = createShell();
    shell.classList.add('open');
    document.body.classList.add('search-open');
    const input = shell.querySelector('.site-search-input');
    input.value = '';
    renderResults(shell, '');
    setTimeout(() => input.focus(), 20);
  }

  function closeSearch() {
    const shell = document.querySelector('.site-search-shell');
    if (!shell) return;
    shell.classList.remove('open');
    document.body.classList.remove('search-open');
  }

  function insertButton() {
    if (document.querySelector('.site-search-trigger')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'site-search-trigger';
    button.setAttribute('aria-label', 'Хайлт');
    button.setAttribute('title', 'Хайлт');
    button.innerHTML = iconSearch;
    button.addEventListener('click', openSearch);

    const hamburger = document.querySelector('.hamburger');
    if (hamburger?.parentElement) {
      hamburger.parentElement.insertBefore(button, hamburger);
      return;
    }

    const flags = document.querySelector('.nav .flags');
    if (flags?.parentElement) {
      flags.insertAdjacentElement('afterend', button);
      return;
    }

    document.querySelector('header')?.appendChild(button);
  }

  function bindEvents() {
    document.addEventListener('input', (event) => {
      if (!event.target.matches('.site-search-input')) return;
      renderResults(createShell(), event.target.value);
    });
    document.addEventListener('click', (event) => {
      if (event.target.closest('.site-search-close')) closeSearch();
      if (event.target.classList.contains('site-search-shell')) closeSearch();
      if (event.target.closest('.site-search-result')) closeSearch();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeSearch();
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openSearch();
      }
    });
  }

  async function loadManagedSearchItems() {
    async function read(path) {
      try {
        const response = await fetch(path, { cache: 'no-store' });
        return response.ok ? response.json() : null;
      } catch (error) {
        return null;
      }
    }

    const [team, history, faq, cases, legalGuide] = await Promise.all([
      read('content/team.json'),
      read('content/history.json'),
      read('content/faq.json'),
      read('content/cases.json'),
      read('content/legal-guide.json')
    ]);

    const managedItems = [];
    if (Array.isArray(team?.members)) {
      orderedItems(team.members).forEach((member) => {
        managedItems.push({
          title: pick(member.name),
          type: 'Манай баг',
          url: 'index.html#team',
          text: [pick(member.role), pick(member.focus), pick(member.bio)].filter(Boolean).join(' ')
        });
      });
    }
    if (Array.isArray(history?.timeline)) {
      orderedItems(history.timeline).forEach((item) => {
        managedItems.push({
          title: `${item.year} ${pick(item.title)}`,
          type: 'Түүхэн товчоо',
          url: 'history.html',
          text: pick(item.text) || ''
        });
      });
    }
    if (Array.isArray(faq?.items)) {
      orderedItems(faq.items).forEach((item) => {
        managedItems.push({
          title: pick(item.question),
          type: 'Түгээмэл асуулт',
          url: 'index.html#faq',
          text: pick(item.answer) || ''
        });
      });
    }
    function getCaseId(item, index) {
      return item.id || item.slug || `case-${index + 1}`;
    }
    if (Array.isArray(cases?.items)) {
      orderedItems(cases.items).forEach((item, index) => {
        managedItems.push({
          title: pick(item.title),
          type: 'Шүүхийн шийдвэрийн тойм',
          url: `case-detail.html?id=${encodeURIComponent(getCaseId(item, index))}`,
          text: [pick(item.category), item.year, item.date, pick(item.text), pick(item.context), pick(item.result), ...pickList(item.tags)].filter(Boolean).join(' ')
        });
      });
    }
    if (Array.isArray(legalGuide?.items)) {
      orderedItems(legalGuide.items).forEach((item) => {
        managedItems.push({
          title: pick(item.title),
          type: 'Хууль зүйн мэдээлэл',
          url: 'index.html#legal-guide',
          text: pickList(item.points).join(' ')
        });
      });
    }

    items = baseItems.slice();
    const seen = new Set(items.map((item) => `${item.url}|${item.title}`));
    managedItems.forEach((item) => {
      const key = `${item.url}|${item.title}`;
      if (!seen.has(key)) {
        items.push(item);
        seen.add(key);
      }
    });
  }

  function init() {
    injectStyles();
    insertButton();
    createShell();
    bindEvents();
    loadManagedSearchItems().catch((error) => console.warn('Search content fallback:', error.message));
    document.addEventListener('begz:languagechange', () => {
      loadManagedSearchItems().catch((error) => console.warn('Search language switch:', error.message));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
