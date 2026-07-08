# Baby's Plan — Landing Page

Landing pública do Baby's Plan, o **Copiloto da Jornada de Gestação** — em `babysplan.com`.

## Stack

Site 100% estático — **HTML, CSS e JavaScript puro, sem build step, sem framework, sem dependências**. Deploy direto via GitHub Actions para GitHub Pages (custom domain via `CNAME`). Ver `.github/workflows/deploy.yml`.

```
index.html          → Landing (12 capítulos narrativos)
privacy.html         → Política de Privacidade
terms.html            → Termos de Uso
css/style.css         → todo o CSS do site (tokens, componentes, motion)
js/main.js             → menu mobile, FAQ, scroll-reveal, Momento WOW, analytics
images/                → screenshots, og-image
icons/, favicon.svg    → ícones e PWA
manifest.json           → PWA manifest
```

## Rodar localmente

Os caminhos no HTML são root-absolute (`/css/style.css`), então abrir `index.html` direto via `file://` quebra os links. Sirva a pasta com qualquer servidor estático simples:

```bash
python3 -m http.server 8080
# depois abra http://localhost:8080
```

## Fontes de estratégia (leia antes de alterar copy/estrutura)

- [`docs/ux/LANDING_V2_ARCHITECTURE.md`](docs/ux/LANDING_V2_ARCHITECTURE.md) — arquitetura de UX, personas, SEO, acessibilidade, roadmap.
- [`docs/ux/LANDING_V2_BRAND_STRATEGY.md`](docs/ux/LANDING_V2_BRAND_STRATEGY.md) — posicionamento (Copiloto de Jornada), conceito proprietário (Motor da Jornada), narrativa, Brand Voice Guide. **Em caso de conflito, a marca prevalece sobre a arquitetura.**
- [`docs/ux/DESIGN_SYSTEM.md`](docs/ux/DESIGN_SYSTEM.md) — tokens, sistema de ícones, padrão de seção, referência de implementação real.
- [`PROJECT_INDEX.md`](PROJECT_INDEX.md) — índice de toda a documentação.

## Deploy

Ver [`DEPLOY.md`](DEPLOY.md) — processo completo de deploy, DNS e checklist de validação.

## Pendências conhecidas (ver resumo de entrega da CR-002)

- IDs reais de GA4/Microsoft Clarity ainda não configurados em `js/main.js` (placeholders `G-XXXXXXX`/`XXXXXXXX`).
- Apenas um screenshot real do produto existe hoje (`images/screenshots-showcase.jpg`); demais seções usam ilustração SVG customizada em vez de novas capturas de tela.
- Nomenclatura de marca ("Motor da Jornada", "Copiloto de Jornada") pendente de validação jurídica antes de uso amplo em mídia paga.
