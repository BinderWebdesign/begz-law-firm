# Netlify + GitHub admin тохиргоо

Энэ хувилбар Netlify дээр `/admin/` самбараас мэдээлэл хадгалахдаа GitHub repository-ийн `content/*.json` файлуудыг commit хийж шинэчилнэ. GitHub commit орсны дараа Netlify автоматаар дахин deploy хийнэ.

## GitHub дээр

1. Энэ хавтасны бүх файлыг GitHub repository руу push хийнэ.
2. `content/*.json`, `admin/*`, `netlify.toml`, `netlify/functions/admin-content.js` файлууд repository-д орсон байх ёстой.
3. GitHub personal access token үүсгэнэ.
   - Fine-grained token ашиглаж болно.
   - Repository access: зөвхөн энэ repository.
   - Permission: `Contents` → `Read and write`.

## Netlify дээр

Netlify site settings дотор:

1. `Build & deploy` тохиргоо:
   - Publish directory: `.`
   - Functions directory: `netlify/functions`
2. Environment variables нэмнэ:

```text
ADMIN_TOKEN = админ самбарын нууц үг
GITHUB_TOKEN = GitHub personal access token
GITHUB_REPO = github-user-or-org/repository-name
GITHUB_BRANCH = main
```

`GITHUB_BRANCH` танай repository `master` branch ашигладаг бол `master` гэж тавина.

## Admin руу орох

```text
https://танай-domain.mn/admin/
```

`ADMIN_TOKEN` талбарт Netlify environment variable дээр тавьсан нууц үгээ оруулна.

## Ажиллах зарчим

1. `/admin/` самбар `/api/admin/content` endpoint рүү хандана.
2. Netlify `netlify.toml` redirect-ээр энэ хүсэлтийг `netlify/functions/admin-content.js` function руу дамжуулна.
3. Function GitHub API ашиглан `content/*.json` файлыг уншиж/commit хийж хадгална.
4. GitHub commit орсны дараа Netlify шинэ deploy эхлүүлнэ.

## Анхаарах зүйл

- Netlify дээр серверийн filesystem рүү шууд бичих боломжгүй тул локал `server.js` шиг файл шууд хадгалах арга ажиллахгүй.
- `GITHUB_TOKEN`-ийг frontend кодонд бичиж болохгүй. Зөвхөн Netlify environment variable дээр хадгална.
- Хадгалсны дараа сайт шинэ deploy дуустал хэдэн секундээс хэдэн минут хүртэл хугацаа авч болно.
