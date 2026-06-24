# BEGZ AI chatbot тохиргоо

Энэ хувилбарын chatbot нь browser-оос шууд OpenAI API дуудахгүй. `server.js` дотор `/api/chat` endpoint ажиллаж, `OPENAI_API_KEY`-г server талд нууц хадгална.

## Локал дээр ажиллуулах

PowerShell дээр:

```powershell
$env:OPENAI_API_KEY="таны_api_key"
$env:OPENAI_MODEL="gpt-5.4-mini"
node server.js
```

Дараа нь browser дээр:

```text
http://127.0.0.1:8011/
```

Хэрэв `8011` порт завгүй бол:

```powershell
$env:PORT="8012"
$env:OPENAI_API_KEY="таны_api_key"
node server.js
```

Дараа нь:

```text
http://127.0.0.1:8012/
```

## API key байхгүй үед

`OPENAI_API_KEY` тохируулаагүй бол chatbot эвдрэхгүй. Энэ үед өмнөх шигээ сайтын дотоод мэдээлэлд тулгуурласан хурдан чиглүүлэгч fallback горимоор ажиллана.

## Deployment

Production дээр дараах environment variable-уудыг hosting/server талдаа тохируулна:

- `OPENAI_API_KEY` - OpenAI API key
- `OPENAI_MODEL` - default нь `gpt-5.4-mini`
- `PORT` - server ажиллах порт, hosting-оос автоматаар өгөгдвөл заавал тохируулах шаардлагагүй

API key-г HTML, JavaScript, Git repository, zip дотор шууд бичиж болохгүй.

## Chatbot юуг ашиглаж хариулдаг вэ?

AI туслах нь `outputs/content/*.json` файлууд болон сайтын үндсэн үйлчилгээний мэдээллийг context болгон ашиглана:

- `faq.json`
- `legal-guide.json`
- `cases.json`
- `team.json`
- `history.json`

Тиймээс эдгээр JSON файлыг шинэчлэхэд chatbot-ийн мэдэх мэдээлэл дагаж шинэчлэгдэнэ.

## Анхаарах зүйл

Chatbot нь ерөнхий мэдээлэл, чиглүүлэг өгнө. Нарийн хууль зүйн зөвлөгөө, хэрэг маргааны эцсийн дүгнэлт, үр дүнгийн баталгаа өгөх зориулалттай биш. Ийм асуултад хэрэглэгчийг хуульчтай уулзах руу чиглүүлэхээр prompt тохируулсан.
