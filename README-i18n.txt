BEGZ multilingual content system
================================

This package uses a multilingual CMS/content structure for dynamic content.

Supported languages:
- mn: Mongolian
- en: English
- zh: Chinese
- ko: Korean

Important behavior
------------------
1. Static website text is still handled by full-i18n.js.
2. Managed content from content/*.json now uses language objects:

   {
     "mn": "Монгол текст",
     "en": "English text",
     "zh": "中文文本",
     "ko": "한국어 텍스트"
   }

3. Lists such as case approach, tags, and legal guide points are stored as lists
   of language objects:

   "points": [
     {
       "mn": "Монгол заалт",
       "en": "English point",
       "zh": "中文要点",
       "ko": "한국어 항목"
     }
   ]

4. When a visitor chooses a language, content-loader.js and case-pages.js pick
   the same language from these objects. Therefore newly added history, legal
   guide, FAQ, team, and case detail content will display in the selected
   language as long as the language fields are filled in.

5. This is not machine translation. The CMS now has fields for four languages;
   the site automatically chooses the correct saved text.

Files changed
-------------
- admin/config.yml: updated to multilingual fields for CMS editing.
- content/team.json: multilingual fields.
- content/history.json: multilingual fields.
- content/faq.json: multilingual fields.
- content/legal-guide.json: multilingual fields.
- content/cases.json: multilingual fields, including detail text.
- content-loader.js: reads mn/en/zh/ko objects and re-renders on language change.
- case-pages.js: reads mn/en/zh/ko objects for case list and detail pages.
- site-search.js: indexes multilingual managed content safely.
- full-i18n.js: dispatches a language-change event for dynamic re-rendering.
