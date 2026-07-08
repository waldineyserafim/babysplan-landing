# Índice da Documentação — Baby's Plan Landing

> Índice oficial da documentação da Landing (`babysplan-landing`). Última atualização: 2026-07-08.

## Landing V2 — Estratégia, Arquitetura e Implementação

- **[docs/ux/LANDING_V2_ARCHITECTURE.md](docs/ux/LANDING_V2_ARCHITECTURE.md)** — CR-001: diagnóstico da Landing V1, personas, arquitetura de seções, storytelling seccional, copy, UX, conversão, SEO, acessibilidade e roadmap. *Estratégia — implementada na CR-002.*
- **[docs/ux/LANDING_V2_BRAND_STRATEGY.md](docs/ux/LANDING_V2_BRAND_STRATEGY.md)** — CR-001.1: complemento de brand strategy — posicionamento (Copiloto de Jornada), conceito proprietário (Motor da Jornada), narrativa em capítulos, Momento WOW, Hero, Brand Voice Guide, mapa emocional, mensuração. **Em conflito com a CR-001, a marca prevalece.** *Estratégia — implementada na CR-002.*
- **[docs/ux/DESIGN_SYSTEM.md](docs/ux/DESIGN_SYSTEM.md)** — CR-002: referência viva do que foi de fato implementado — tokens, motion, sistema de ícones SVG, padrão de seção/capítulo, Momento WOW, analytics. Use este documento (não os dois acima) para saber "como o código está hoje".

**Status:** CR-002 (implementação da Landing V2 como lançamento oficial da marca) concluída — ver `index.html`, `css/style.css`, `js/main.js`. Pendências e próximos passos documentados no `README.md`.

## Deploy

- [DEPLOY.md](DEPLOY.md) — processo de deploy, DNS, checklist de validação e regeneração do `og-image.png`.

## Projeto

- [README.md](README.md) — stack, como rodar localmente, mapa de arquivos.

---

`LANDING_V2_ARCHITECTURE.md` e `LANDING_V2_BRAND_STRATEGY.md` continuam sendo a fonte de verdade de *por que* a Landing é como é — não altere copy/estrutura/narrativa sem revisá-los primeiro. `DESIGN_SYSTEM.md` documenta *como* isso foi construído em código.
