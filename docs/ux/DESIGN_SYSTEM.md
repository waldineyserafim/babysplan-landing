# Landing V2 — Design System (referência de implementação)

Documenta o que foi **de fato construído** na CR-002 (`css/style.css`, `index.html`, `js/main.js`), para servir de referência a futuras mudanças e evitar que a Landing perca consistência de marca com o tempo (Brand Strategy, Etapa 10). Não é um documento de estratégia — para isso, ver `LANDING_V2_BRAND_STRATEGY.md`.

## Tokens (`:root` em `css/style.css`)

**Cor** — mantidos da V1, sem mudança de paleta:
`--teal #4FB6AC` (primária), `--coral #F28C82` (secundária), `--violet #7C3AED` / `--violet-mid #8B5CF6` (reservados para a seção de IA/Guia de Jornada — não usar roxo fora desse contexto), `--text #243447`, `--bg #FAFAF8`.

**Motion** (novos nesta CR):
```
--ease-out:    cubic-bezier(.16,1,.3,1)
--ease-in-out: cubic-bezier(.65,0,.35,1)
--motion-fast: 0.18s   /* hover, foco */
--motion-base: 0.4s    /* scroll-reveal, milestones do WOW */
--motion-slow: 0.9s    /* desenho da trilha da Jornada */
```

**`prefers-reduced-motion: reduce`** é tratado globalmente em um único bloco no topo do CSS — desativa toda `animation`/`transition`, força `[data-reveal]` ao estado final e trava a trilha SVG em `stroke-dashoffset: 0`. Qualquer novo componente animado deve funcionar corretamente com esse bloco ativo (testar sempre via DevTools → Rendering → Emulate CSS prefers-reduced-motion).

## Sistema de ícones

Nenhum emoji é usado na Landing. Todos os ícones são SVG de linha (`stroke-width: 1.8`, `viewBox 0 0 24 24`) definidos como `<symbol>` dentro de um `<svg class="icon-sprite">` oculto no topo do `<body>` de `index.html`, referenciados via:

```html
<svg class="icon" aria-hidden="true"><use href="#icon-nome"/></svg>
```

Para adicionar um ícone novo: criar o `<symbol id="icon-nome">` no sprite, seguindo o mesmo `viewBox` e peso de traço dos existentes. Tamanhos: `.icon` (24px, padrão), `.icon-sm` (18px), `.icon-lg` (32px).

## Padrão de seção / capítulo

Cada seção da Landing segue a estrutura narrativa da Brand Strategy (Etapa 4) — não é um "bloco de feature", é um capítulo:

```html
<section class="section" id="nome-do-capitulo" aria-labelledby="titulo-id">
  <div class="container">
    <div class="section-header centered" data-reveal>
      <p class="chapter-index">Capítulo NN</p>   <!-- opcional, só nos 10 capítulos principais -->
      <p class="eyebrow">Categoria curta</p>
      <h2 class="h2" id="titulo-id">Headline como linha narrativa, não nome de módulo.</h2>
      <p class="subtitle">Uma frase de contexto.</p>
    </div>
    <!-- conteúdo da seção, com [data-reveal] nos blocos principais -->
  </div>
</section>
```

Toda `<section>` tem `id` (âncora e alvo do tracking `section_view`) e `aria-labelledby` apontando para o heading.

## Scroll-reveal

Qualquer elemento com `data-reveal` recebe `.is-visible` uma única vez, via `IntersectionObserver` em `js/main.js`, nunca reanimando. `data-reveal-delay="1"` a `"4"` escalonam a entrada de itens irmãos (ex.: cards de um grid). Não criar animações de scroll fora desse mecanismo — evita duplicar observers e mantém o comportamento consistente com `prefers-reduced-motion`.

## Momento WOW (Motor da Jornada ao vivo)

Componente: `.wow-panel` (Hero) → `.wow-badges` (4 `button[data-journey]`) → `.wow-result` com `.wow-path-svg` (trilha desenhada via toggle da classe `.is-drawn`) e `.wow-milestones` (populado dinamicamente por `JOURNEY_DATA` em `js/main.js`). Para adicionar um 5º tipo de jornada, adicionar uma entrada em `JOURNEY_DATA` e um `button.wow-badge[data-journey="chave"]` correspondente no HTML — nenhuma outra mudança é necessária.

## Motor da Jornada (mecanismo visual da seção de Solução)

`.motor-mech[data-motor-mechanism]` com 4 `.motor-step[data-step]` (`entrada`/`processamento`/`adaptacao`/`resultado`). O atributo `data-state` no container é avançado sequencialmente por `js/main.js` ao entrar em viewport; o CSS usa seletores cumulativos (`[data-state="processamento"] [data-step="entrada"]`, etc.) para manter os passos já revelados visíveis.

## Analytics

Config centralizada no topo de `js/main.js` (`ANALYTICS_CONFIG`). Eventos padronizados: `hero_cta_click`, `wow_interaction` (com `journey_type`), `section_view` (com `chapter` = id da seção), `faq_expand` (com `question`), `cta_final_click`. Qualquer novo CTA de conversão deve receber `data-analytics="nome_do_evento"` (e opcionalmente `data-analytics-source`) em vez de tracking manual — o listener genérico em `main.js` cobre automaticamente qualquer elemento com esse atributo.

## Breakpoints (mobile-first, inalterados desde a V1)

`640px`, `768px`, `1024px`. Novos componentes devem seguir mobile-first (estilo base = mobile, `min-width` para telas maiores), consistente com o restante do arquivo.
