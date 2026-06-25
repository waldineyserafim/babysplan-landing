# Baby's Plan — Guia Completo de Deploy e Infraestrutura

## Arquitetura

```
Cloudflare DNS
│
├── babysplan.com        → GitHub Pages → waldineyserafim/babysplan-landing
├── www.babysplan.com    → Cloudflare Redirect 301 → babysplan.com
└── app.babysplan.com    → GitHub Pages → waldineyserafim/babysplan-app
```

---

## 1. Criar os repositórios no GitHub

### 1.1 Landing Page

```bash
# No diretório do projeto
cd ~/My\ Projects/babysplan-landing
git init
git add .
git commit -m "feat: lançamento inicial Baby's Plan landing page"
git branch -M main
git remote add origin https://github.com/waldineyserafim/babysplan-landing.git
git push -u origin main
```

> **Antes**: crie o repositório `babysplan-landing` em https://github.com/new
> - Name: `babysplan-landing`
> - Visibility: Public (obrigatório para GitHub Pages gratuito)
> - NÃO inicialize com README

### 1.2 App (a partir do repo atual)

```bash
# O babysplan-app já existe como baby-journey-app com histórico.
# Para criar o novo repo preservando o histórico:

# 1. Crie o repo babysplan-app em https://github.com/new
#    - Name: babysplan-app
#    - Visibility: Public
#    - NÃO inicialize

# 2. Adicione o novo remote
cd ~/My\ Projects/baby-journey-app
git remote add babysplan-app https://github.com/waldineyserafim/babysplan-app.git

# 3. Push completo com histórico
git push babysplan-app main

# 4. (Opcional) Renomeie o remote principal se quiser usar babysplan-app como principal
git remote rename origin baby-journey-app
git remote rename babysplan-app origin
```

---

## 2. Ativar GitHub Pages

### 2.1 Landing Page (babysplan-landing)

1. Acesse: `https://github.com/waldineyserafim/babysplan-landing/settings/pages`
2. **Source:** GitHub Actions
3. Clique **Save**
4. O primeiro deploy roda automaticamente após o push

### 2.2 App (babysplan-app)

1. Acesse: `https://github.com/waldineyserafim/babysplan-app/settings/pages`
2. **Source:** GitHub Actions
3. Clique **Save**
4. Configure os **Secrets** (necessários para o build):
   - Acesse: `Settings → Secrets and variables → Actions → New repository secret`
   - `VITE_SUPABASE_URL` = `https://dcyjmkhhoohbhriondwy.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `<sua anon key do Supabase>`

---

## 3. Adicionar Custom Domain no GitHub Pages

### 3.1 Landing Page

1. `https://github.com/waldineyserafim/babysplan-landing/settings/pages`
2. Em **Custom domain**, insira: `babysplan.com`
3. Clique **Save**
4. Aguarde a verificação DNS (pode levar até 24h)
5. Marque **Enforce HTTPS** após verificação

### 3.2 App

1. `https://github.com/waldineyserafim/babysplan-app/settings/pages`
2. Em **Custom domain**, insira: `app.babysplan.com`
3. Clique **Save**
4. Aguarde a verificação DNS
5. Marque **Enforce HTTPS**

> **Nota:** O arquivo `CNAME` já está no repo. O GitHub Pages o usa para manter o domínio entre deploys.

---

## 4. Configurar Cloudflare DNS

### 4.1 Acesse o Cloudflare

1. Login em https://dash.cloudflare.com
2. Selecione o domínio `babysplan.com`
3. Vá em **DNS → Records**

### 4.2 Registros DNS necessários

Adicione os seguintes registros:

| Type  | Name               | Content                          | Proxy      | TTL  |
|-------|--------------------|----------------------------------|------------|------|
| CNAME | `@` (babysplan.com)| `waldineyserafim.github.io`      | ✅ Proxied | Auto |
| CNAME | `www`              | `waldineyserafim.github.io`      | ✅ Proxied | Auto |
| CNAME | `app`              | `waldineyserafim.github.io`      | ✅ Proxied | Auto |

> ⚠️ **Importante:** Todos os três devem apontar para `waldineyserafim.github.io`.
> O GitHub Pages diferencia os repositórios pelo arquivo CNAME em cada repo.

### 4.3 Redirect www → raiz

No Cloudflare, em **Rules → Redirect Rules**, crie uma regra:

- **Name:** `www para raiz`
- **When:** `Hostname equals www.babysplan.com`
- **Then:** Redirect to `https://babysplan.com${uri.path}` | 301 Permanent

---

## 5. Configurar Supabase Auth

Após os domínios estarem ativos, atualize as configurações de autenticação no Supabase:

1. Acesse: https://supabase.com/dashboard/project/dcyjmkhhoohbhriondwy/auth/url-configuration

2. **Site URL:**
   ```
   https://app.babysplan.com
   ```

3. **Redirect URLs** (adicione todas):
   ```
   https://app.babysplan.com/
   https://app.babysplan.com/reset-password
   http://localhost:5173/
   http://localhost:5173/reset-password
   ```

4. Clique **Save**

---

## 6. Fazer novos deploys

### Landing Page

```bash
cd ~/My\ Projects/babysplan-landing
# edite os arquivos
git add .
git commit -m "feat: descrição da alteração"
git push
# GitHub Actions faz o deploy automaticamente
```

### App

```bash
cd ~/My\ Projects/babysplan-app   # ou baby-journey-app
# edite o código
git add .
git commit -m "feat: descrição da alteração"
git push
# GitHub Actions faz build + deploy automaticamente
```

---

## 7. Adicionar novas páginas à Landing Page

Para adicionar uma nova página (ex: `/blog`):

1. Crie `blog.html` na raiz do `babysplan-landing`
2. Use a mesma estrutura de `privacy.html` (navbar + footer)
3. Adicione a URL no `sitemap.xml`
4. Commit e push — deploy automático

Para um blog dinâmico no futuro:
- Migre para **Astro** (SSG, compatível com GitHub Pages)
- Ou adicione um subdomínio `blog.babysplan.com` apontando para Ghost/Hashnode

---

## 8. Estrutura de arquivos

```
babysplan-landing/
├── index.html              # Landing page principal
├── privacy.html            # Política de Privacidade
├── terms.html              # Termos de Uso
├── CNAME                   # babysplan.com
├── robots.txt
├── sitemap.xml
├── manifest.json
├── favicon.svg
├── css/
│   └── style.css
└── .github/
    └── workflows/
        └── deploy.yml

babysplan-app/  (baby-journey-app)
├── src/
├── public/
│   ├── CNAME               # app.babysplan.com
│   ├── manifest.json
│   ├── favicon.svg
│   └── icons/
├── vite.config.ts          # base: '/'
├── index.html
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 9. Checklist de Validação

### GitHub
- [ ] Repo `babysplan-landing` criado e com código
- [ ] Repo `babysplan-app` criado e com código  
- [ ] GitHub Pages ativo em ambos (source: GitHub Actions)
- [ ] Secrets `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` configurados no `babysplan-app`
- [ ] Custom domain `babysplan.com` configurado no `babysplan-landing`
- [ ] Custom domain `app.babysplan.com` configurado no `babysplan-app`
- [ ] HTTPS enforced em ambos

### Cloudflare
- [ ] CNAME `@` → `waldineyserafim.github.io` (Proxied)
- [ ] CNAME `www` → `waldineyserafim.github.io` (Proxied)
- [ ] CNAME `app` → `waldineyserafim.github.io` (Proxied)
- [ ] Redirect Rule: `www.babysplan.com` → `babysplan.com`

### Supabase
- [ ] Site URL: `https://app.babysplan.com`
- [ ] Redirect URL: `https://app.babysplan.com/`
- [ ] Redirect URL: `https://app.babysplan.com/reset-password`

### Funcional
- [ ] `https://babysplan.com` abre a landing page
- [ ] `https://www.babysplan.com` redireciona para `babysplan.com`
- [ ] `https://app.babysplan.com` abre o app (login screen)
- [ ] Login funciona em `app.babysplan.com`
- [ ] Reset de senha envia email com link correto
- [ ] Login com Google redireciona de volta para `app.babysplan.com`
- [ ] PWA instalável no celular (iOS e Android)
- [ ] Landing page score Lighthouse > 90 em Performance e SEO

---

## Tempo estimado de propagação DNS

| Ação | Tempo |
|------|-------|
| Cloudflare propaga DNS | 5–15 minutos |
| GitHub Pages valida domínio | até 24h |
| Certificado HTTPS ativo | até 24h após validação DNS |
| Propagação global completa | até 48h |
