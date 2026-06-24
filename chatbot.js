(function () {
  const VERSION = 'chatbot-ai-1';
  const rootId = 'begz-chatbot-root';
  const styleId = 'begz-chatbot-style';

  if (document.getElementById(rootId)) return;

  const links = {
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

  const quickPrompts = [
    'Үйлчилгээ',
    'Уулзалт товлох',
    'Түгээмэл асуулт',
    'Шүүхэд төлөөлөх',
    'Холбоо барих'
  ];

  const iconChat = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.8A5.8 5.8 0 0 1 10.8 3h2.4A5.8 5.8 0 0 1 19 8.8v3.4a5.8 5.8 0 0 1-5.8 5.8H11l-4.5 3v-3.8A5.8 5.8 0 0 1 5 12.2Z"/><path d="M9 9.5h6M9 13h4.5"/></svg>';
  const iconClose = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  const iconSend = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 11 15-7-7 15-2-6-6-2Z"/><path d="m10 13 4-4"/></svg>';

  let faqItems = [];
  let history = [];
  let isWaiting = false;
  let aiStatusChecked = false;

  function injectStyles() {
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .begz-chatbot{position:fixed;right:22px;bottom:22px;z-index:140;font-family:Calibri,Arial,sans-serif;color:#3F382B}
      .begz-chatbot *{box-sizing:border-box}
      .begz-chatbot-button{width:58px;height:58px;border:1px solid rgba(255,255,255,.42);border-radius:50%;background:#5F674F;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 16px 42px rgba(63,56,43,.26);transition:transform .2s ease,background .2s ease,box-shadow .2s ease}
      .begz-chatbot-button:hover{background:#4d5f47;transform:translateY(-2px);box-shadow:0 20px 52px rgba(63,56,43,.3)}
      .begz-chatbot-button svg{width:27px;height:27px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
      .begz-chatbot-panel{position:absolute;right:0;bottom:76px;width:min(386px,calc(100vw - 28px));height:min(620px,calc(100vh - 112px));display:grid;grid-template-rows:auto 1fr auto;background:#fff;border:1px solid #CFC39D;border-radius:12px;box-shadow:0 28px 88px rgba(63,56,43,.26);overflow:hidden;opacity:0;transform:translateY(10px) scale(.98);pointer-events:none;transition:opacity .18s ease,transform .18s ease}
      .begz-chatbot.open .begz-chatbot-panel{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}
      .begz-chatbot-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:15px 16px;background:#ECE7D1;border-bottom:1px solid #CFC39D}
      .begz-chatbot-title{display:flex;align-items:center;gap:10px;min-width:0}
      .begz-chatbot-mark{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#5F674F;color:#fff;flex:0 0 auto}
      .begz-chatbot-mark svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
      .begz-chatbot-name{font-size:15px;font-weight:800;line-height:1.15;color:#3F382B}
      .begz-chatbot-status{font-size:12px;color:#5F674F;margin-top:2px;white-space:nowrap}
      .begz-chatbot-close{width:34px;height:34px;border:1px solid #CFC39D;border-radius:8px;background:#fff;color:#5F674F;display:flex;align-items:center;justify-content:center;cursor:pointer;flex:0 0 auto}
      .begz-chatbot-close svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}
      .begz-chatbot-messages{padding:16px;overflow:auto;background:linear-gradient(180deg,#FFFEFA,#F4F1E3)}
      .begz-chatbot-message{display:flex;margin-bottom:11px}
      .begz-chatbot-message.user{justify-content:flex-end}
      .begz-chatbot-bubble{max-width:86%;border-radius:12px;padding:11px 12px;font-size:14px;line-height:1.48;border:1px solid transparent;white-space:pre-line}
      .begz-chatbot-message.bot .begz-chatbot-bubble{background:#fff;border-color:#D9D0B0;color:#3F382B;box-shadow:0 6px 18px rgba(63,56,43,.06)}
      .begz-chatbot-message.user .begz-chatbot-bubble{background:#5F674F;color:#fff}
      .begz-chatbot-message.typing .begz-chatbot-bubble{color:#5F674F}
      .begz-chatbot-dots{display:inline-flex;gap:4px;vertical-align:middle}
      .begz-chatbot-dots span{width:5px;height:5px;border-radius:50%;background:#8E977D;animation:begzChatPulse 1s ease-in-out infinite}
      .begz-chatbot-dots span:nth-child(2){animation-delay:.14s}
      .begz-chatbot-dots span:nth-child(3){animation-delay:.28s}
      @keyframes begzChatPulse{0%,80%,100%{opacity:.35;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}
      .begz-chatbot-actions{display:flex;flex-wrap:wrap;gap:7px;margin-top:10px}
      .begz-chatbot-action{display:inline-flex;align-items:center;justify-content:center;min-height:32px;border:1px solid #CFC39D;border-radius:999px;background:#ECE7D1;color:#3F382B;padding:7px 11px;font-size:12px;font-weight:700;text-decoration:none}
      .begz-chatbot-action:hover{background:#DBCEA5;color:#3F382B}
      .begz-chatbot-quick{display:flex;flex-wrap:wrap;gap:7px;padding:11px 16px 0;background:#F4F1E3}
      .begz-chatbot-chip{border:1px solid #CFC39D;border-radius:999px;background:#fff;color:#5F674F;padding:7px 10px;font:700 12px Calibri,Arial,sans-serif;cursor:pointer}
      .begz-chatbot-chip:hover{background:#ECE7D1;color:#3F382B}
      .begz-chatbot-chip:disabled,.begz-chatbot-send:disabled{opacity:.58;cursor:not-allowed}
      .begz-chatbot-form{display:grid;grid-template-columns:1fr 42px;gap:9px;padding:12px 16px 16px;background:#F4F1E3;border-top:1px solid #D9D0B0}
      .begz-chatbot-input{height:42px;border:1px solid #CFC39D;border-radius:9px;background:#fff;color:#3F382B;padding:0 12px;font:600 14px Calibri,Arial,sans-serif;outline:none}
      .begz-chatbot-input:focus{border-color:#8E977D;box-shadow:0 0 0 3px rgba(142,151,125,.18)}
      .begz-chatbot-send{width:42px;height:42px;border:0;border-radius:9px;background:#8A7650;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer}
      .begz-chatbot-send:hover{background:#756442}
      .begz-chatbot-send svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
      .begz-chatbot-note{font-size:11px;color:#70664f;line-height:1.35;padding:0 16px 11px;background:#F4F1E3}
      @media(max-width:560px){
        .begz-chatbot{right:14px;bottom:14px}
        .begz-chatbot-button{width:54px;height:54px}
        .begz-chatbot-panel{right:-2px;bottom:68px;height:min(590px,calc(100vh - 92px))}
        .begz-chatbot-bubble{max-width:91%}
      }
      @media(prefers-reduced-motion:reduce){
        .begz-chatbot-button,.begz-chatbot-panel,.begz-chatbot-dots span{transition:none;animation:none}
      }
    `;
    document.head.appendChild(style);
  }

  function normalize(value) {
    return String(value || '').toLowerCase().replace(/[.,!?;:()[\]{}"']/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function tokenScore(query, haystack) {
    const text = normalize(haystack);
    const tokens = normalize(query).split(' ').filter((token) => token.length > 2);
    if (!tokens.length) return 0;
    return tokens.reduce((score, token) => score + (text.includes(token) ? 1 : 0), 0);
  }

  function makeAction(label, href) {
    return { label, href };
  }

  function storeHistory(role, text) {
    if (role !== 'user' && role !== 'bot') return;
    history.push({ role, content: String(text || '').slice(0, 900) });
    history = history.slice(-10);
  }

  function setWaiting(waiting) {
    isWaiting = waiting;
    document.querySelectorAll('.begz-chatbot-chip,.begz-chatbot-send,.begz-chatbot-input').forEach((node) => {
      node.disabled = waiting;
    });
  }

  function appendMessage(role, text, actions, options) {
    const messages = document.querySelector('.begz-chatbot-messages');
    if (!messages) return null;

    const opts = Object.assign({ record: true }, options);
    const row = document.createElement('div');
    row.className = `begz-chatbot-message ${role}`;

    const bubble = document.createElement('div');
    bubble.className = 'begz-chatbot-bubble';
    bubble.textContent = text;

    if (Array.isArray(actions) && actions.length) {
      const actionWrap = document.createElement('div');
      actionWrap.className = 'begz-chatbot-actions';
      actions.forEach((action) => {
        const link = document.createElement('a');
        link.className = 'begz-chatbot-action';
        link.href = action.href;
        link.textContent = action.label;
        actionWrap.appendChild(link);
      });
      bubble.appendChild(actionWrap);
    }

    row.appendChild(bubble);
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
    if (opts.record) storeHistory(role, text);
    return row;
  }

  function showTyping() {
    const messages = document.querySelector('.begz-chatbot-messages');
    if (!messages) return null;
    const row = document.createElement('div');
    row.className = 'begz-chatbot-message bot typing';
    const bubble = document.createElement('div');
    bubble.className = 'begz-chatbot-bubble';
    bubble.innerHTML = '<span class="begz-chatbot-dots"><span></span><span></span><span></span></span>';
    row.appendChild(bubble);
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
    return row;
  }

  function fallbackActions(question) {
    if (/(үйлчилгээ|зөвлөх|зөвлөгөө|service|хууль зүй)/.test(question)) {
      return [
        makeAction('Зөвлөх үйлчилгээ', links.advisory),
        makeAction('Шүүхэд төлөөлөх', links.court),
        makeAction('Өмгөөлөл', links.advocacy)
      ];
    }
    if (/(уулзалт|цаг|товлох|холбоо|утас|залгах|зөвлөгөө авах)/.test(question)) {
      return [makeAction('Холбоо барих хэсэг', links.contact)];
    }
    if (/(шүүх|төлөөлөх|маргаан|нэхэмжлэл)/.test(question)) {
      return [makeAction('Шүүхэд төлөөлөх', links.court), makeAction('Уулзалт товлох', links.contact)];
    }
    if (/(өмгөөл|эрх ашиг|хамгаал)/.test(question)) {
      return [makeAction('Өмгөөллийн үйлчилгээ', links.advocacy), makeAction('Уулзалт товлох', links.contact)];
    }
    if (/(нууц|нууцлал|мэдээлэл хамгаал)/.test(question)) {
      return [makeAction('Нууцлал', links.privacy)];
    }
    if (/(баг|хуульч|өмгөөлөгч)/.test(question)) {
      return [makeAction('Манай баг', links.team)];
    }
    if (/(түүх|түүхэн|товчоо)/.test(question)) {
      return [makeAction('Түүхэн товчоо', links.history)];
    }
    if (/(тойм|шийдвэр|кейс|мэдээ)/.test(question)) {
      return [makeAction('Тойм мэдээ', links.cases)];
    }
    return [makeAction('Үйлчилгээ үзэх', links.advisory), makeAction('Уулзалт товлох', links.contact)];
  }

  function appendServiceResponse() {
    appendMessage(
      'bot',
      'Манай үндсэн үйлчилгээ нь хууль зүйн зөвлөх үйлчилгээ, шүүхэд төлөөлөх үйлчилгээ, өмгөөллийн үйлчилгээ гэсэн 3 чиглэлтэй. Та сонирхож буй чиглэлээ нээгээд дэлгэрэнгүй мэдээлэл үзэж болно.',
      [
        makeAction('Зөвлөх үйлчилгээ', links.advisory),
        makeAction('Шүүхэд төлөөлөх', links.court),
        makeAction('Өмгөөлөл', links.advocacy)
      ]
    );
  }

  function appendContactResponse() {
    appendMessage(
      'bot',
      'Уулзалт товлох болон зөвлөгөө авах бол 8811-9315, 9903-5509 дугаараар холбогдоно уу. Мөн холбоо барих хэсгээр дамжуулан мэдээллээ үлдээж болно.',
      [makeAction('Холбоо барих хэсэг', links.contact)]
    );
  }

  function answerFromFaq(query) {
    if (!faqItems.length) return false;
    const ranked = faqItems
      .map((item) => ({
        item,
        score: tokenScore(query, `${item.question || ''} ${item.answer || ''}`)
      }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score);

    if (!ranked.length || ranked[0].score < 2) return false;
    const best = ranked[0].item;
    appendMessage(
      'bot',
      `${best.question}\n\n${best.answer}`,
      [makeAction('FAQ хэсэг рүү очих', links.faq)]
    );
    return true;
  }

  function respondWithFallback(rawQuestion) {
    const question = normalize(rawQuestion);

    if (answerFromFaq(question)) return;

    if (/(үйлчилгээ|зөвлөх|зөвлөгөө|service|хууль зүй)/.test(question)) {
      appendServiceResponse();
      return;
    }
    if (/(уулзалт|цаг|товлох|холбоо|утас|залгах|зөвлөгөө авах)/.test(question)) {
      appendContactResponse();
      return;
    }
    if (/(шүүх|төлөөлөх|маргаан|нэхэмжлэл)/.test(question)) {
      appendMessage(
        'bot',
        'Шүүхэд төлөөлөх үйлчилгээ нь нэхэмжлэл, хариу тайлбар, нотлох баримт, шүүх хуралдаанд оролцох зэрэг ажиллагаанд чиглэнэ.',
        [makeAction('Шүүхэд төлөөлөх', links.court), makeAction('Уулзалт товлох', links.contact)]
      );
      return;
    }
    if (/(өмгөөл|эрх ашиг|хамгаал)/.test(question)) {
      appendMessage(
        'bot',
        'Өмгөөллийн үйлчилгээ нь таны эрх, хууль ёсны ашиг сонирхлыг хамгаалах, хэрэг маргаанд стратеги боловсруулах, төлөөлөх ажлыг хамарна.',
        [makeAction('Өмгөөллийн үйлчилгээ', links.advocacy), makeAction('Уулзалт товлох', links.contact)]
      );
      return;
    }
    if (/(баримт|бичиг|гэрээ|материал)/.test(question)) {
      appendMessage(
        'bot',
        'Ерөнхийдөө иргэний үнэмлэх, холбогдох гэрээ, төлбөрийн болон захидал харилцааны баримт, нотлох баримт байвал бэлдээрэй. Яг ямар материал хэрэгтэйг хэргийн төрлөөс хамаарч уулзалтаар тодруулна.',
        [makeAction('Түгээмэл асуулт', links.faq)]
      );
      return;
    }
    if (/(үнэ|төлбөр|тариф|зардал)/.test(question)) {
      appendMessage(
        'bot',
        'Үйлчилгээний төлбөр нь асуудлын төрөл, цар хүрээ, шаардагдах хугацаанаас хамаарна. Нөхцөлийг уулзалтаар тодруулж, тохиролцоно.',
        [makeAction('Уулзалт товлох', links.contact)]
      );
      return;
    }
    if (/(нууц|нууцлал|мэдээлэл хамгаал)/.test(question)) {
      appendMessage(
        'bot',
        'Үйлчлүүлэгчийн мэдээллийн нууцлалыг хууль болон мэргэжлийн ёс зүйн хүрээнд хамгаална.',
        [makeAction('Нууцлал', links.privacy)]
      );
      return;
    }
    if (/(баг|хуульч|өмгөөлөгч)/.test(question)) {
      appendMessage(
        'bot',
        'Манай багийн танилцуулга хэсгээс хуульч, өмгөөлөгчдийн чиглэл болон туршлагын мэдээллийг үзэж болно.',
        [makeAction('Манай баг', links.team)]
      );
      return;
    }
    if (/(түүх|түүхэн|товчоо)/.test(question)) {
      appendMessage(
        'bot',
        'Байгууллагын замнал, түүхэн товчооны мэдээллийг тусгай хуудсаар оруулсан.',
        [makeAction('Түүхэн товчоо', links.history)]
      );
      return;
    }
    if (/(тойм|шийдвэр|кейс|мэдээ)/.test(question)) {
      appendMessage(
        'bot',
        'Шүүхийн шийдвэрийн тойм мэдээ хэсгээс сонгосон кейсүүдийн дэлгэрэнгүй мэдээлэл үзэж болно.',
        [makeAction('Тойм мэдээ', links.cases)]
      );
      return;
    }

    appendMessage(
      'bot',
      'Би одоогоор сайтын ерөнхий мэдээллээр чиглүүлдэг туслах байна. Та “үйлчилгээ”, “уулзалт”, “баримт бичиг”, “шүүх”, “өмгөөлөл”, “холбоо барих” гэх мэтээр асуугаарай.',
      fallbackActions(question)
    );
  }

  async function askAi(question) {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: question,
          history: history.slice(-8)
        }),
        signal: controller.signal
      });

      if (!response.ok) return null;
      const data = await response.json();
      if (!data || typeof data.reply !== 'string' || !data.reply.trim()) return null;
      return {
        reply: data.reply.trim(),
        actions: Array.isArray(data.actions) ? data.actions : []
      };
    } catch (error) {
      return null;
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  async function submitQuestion(value) {
    const question = String(value || '').trim();
    if (!question || isWaiting) return;

    appendMessage('user', question);
    setWaiting(true);
    const typing = showTyping();
    const aiAnswer = await askAi(question);
    if (typing) typing.remove();
    setWaiting(false);

    if (aiAnswer) {
      appendMessage('bot', aiAnswer.reply, aiAnswer.actions.length ? aiAnswer.actions : fallbackActions(normalize(question)));
      return;
    }

    respondWithFallback(question);
  }

  function buildWidget() {
    const root = document.createElement('div');
    root.id = rootId;
    root.className = 'begz-chatbot';
    root.innerHTML = `
      <section class="begz-chatbot-panel" role="dialog" aria-modal="false" aria-label="BEGZ цахим туслах">
        <div class="begz-chatbot-head">
          <div class="begz-chatbot-title">
            <span class="begz-chatbot-mark">${iconChat}</span>
            <div>
              <div class="begz-chatbot-name">BEGZ AI туслах</div>
              <div class="begz-chatbot-status">Ерөнхий мэдээлэл, чиглүүлэг өгнө</div>
            </div>
          </div>
          <button class="begz-chatbot-close" type="button" aria-label="Чат хаах">${iconClose}</button>
        </div>
        <div class="begz-chatbot-messages" aria-live="polite"></div>
        <div>
          <div class="begz-chatbot-quick"></div>
          <form class="begz-chatbot-form">
            <input class="begz-chatbot-input" type="text" autocomplete="off" placeholder="Асуултаа бичнэ үү" aria-label="Чат асуулт">
            <button class="begz-chatbot-send" type="submit" aria-label="Илгээх">${iconSend}</button>
          </form>
          <div class="begz-chatbot-note">Энэ нь ерөнхий мэдээлэл бөгөөд хууль зүйн зөвлөгөө биш.</div>
        </div>
      </section>
      <button class="begz-chatbot-button" type="button" aria-label="Чат нээх" aria-expanded="false">${iconChat}</button>
    `;
    document.body.appendChild(root);

    const quick = root.querySelector('.begz-chatbot-quick');
    quickPrompts.forEach((prompt) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'begz-chatbot-chip';
      chip.textContent = prompt;
      chip.addEventListener('click', () => submitQuestion(prompt));
      quick.appendChild(chip);
    });

    const toggle = root.querySelector('.begz-chatbot-button');
    const close = root.querySelector('.begz-chatbot-close');
    const form = root.querySelector('.begz-chatbot-form');
    const input = root.querySelector('.begz-chatbot-input');

    function setOpen(open) {
      root.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Чат хаах' : 'Чат нээх');
      if (open) window.setTimeout(() => input.focus(), 120);
      if (open && !aiStatusChecked) checkAiStatus();
    }

    toggle.addEventListener('click', () => setOpen(!root.classList.contains('open')));
    close.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = input.value;
      input.value = '';
      submitQuestion(value);
    });

    appendMessage(
      'bot',
      'Сайн байна уу. Би BEGZ-ийн AI туслах. Үйлчилгээ, уулзалт товлох, FAQ, холбоо барих мэдээллээр хурдан чиглүүлж өгнө.',
      [],
      { record: false }
    );
  }

  function loadFaq() {
    fetch('content/faq.json', { cache: 'no-store' })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        faqItems = Array.isArray(data && data.items) ? data.items : [];
      })
      .catch(() => {
        faqItems = [];
      });
  }

  function checkAiStatus() {
    aiStatusChecked = true;
    fetch('/api/chat/status', { cache: 'no-store' })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        const status = document.querySelector('.begz-chatbot-status');
        if (!status || !data) return;
        status.textContent = data.ai ? 'AI холболт идэвхтэй' : 'Ерөнхий мэдээлэл, чиглүүлэг өгнө';
      })
      .catch(() => {});
  }

  document.documentElement.dataset.begzChatbot = VERSION;
  injectStyles();
  buildWidget();
  loadFaq();
})();
