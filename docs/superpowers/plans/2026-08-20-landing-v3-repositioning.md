# Landing V3 Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolve the existing Landing V2 (`index.html`, `css/style.css`, `js/main.js`) into V3 by adding the three narrative sections the current build is missing (Diferenciação, Smart Missions/Próximo Passo, Quadro Comparativo), and validating the whole page against the mission's hard constraints — no invented features/testimonials/numbers, no fear-based copy, no premature monetization claims.

**Architecture:** Pure static site, no build step. All work happens in the three existing files, following the established "capítulo" section pattern (`.section`, `.section-header.centered`, `data-reveal`) documented in `docs/ux/DESIGN_SYSTEM.md`. New CSS extends existing tokens/classes; no new libraries.

**Tech Stack:** HTML5, CSS3 (custom properties, IntersectionObserver-driven `data-reveal`), vanilla JS. No framework, no build.

**Spec:** The mission brief pasted into this conversation (Baby's Plan Landing V3 repositioning), cross-referenced against `docs/ux/LANDING_V2_ARCHITECTURE.md`, `docs/ux/LANDING_V2_BRAND_STRATEGY.md`, `docs/ux/DESIGN_SYSTEM.md`.

## Pre-flight audit (already done, do not repeat)

Reading `index.html` confirmed the current build (V2) already implements, in spirit and often near-verbatim wording, most of what the V3 mission asks for:
- Hero already leads with "você nunca mais vai se perguntar o que fazer agora" / "sempre com o próximo passo certo" — matches the mission's core promise. **Do not rewrite.**
- Momento WOW (`#hero .wow-panel`) already implements "a Jornada que se desenha ao vivo" with 4 journey types, exactly as mission section 8 asks. **Do not rewrite.**
- `#problema` = Dor/Sobrecarga chapter. `#motor-da-jornada` = personalization engine. `#como-funciona`, `#guia-jornada`, `#plataforma`, `#enxoval`, `#memorias`, `#sincronizados`, `#prova-social`, `#faq`, `#comecar` all exist and already follow the emotional arc and copy principles the mission describes (no fear-mongering, no fabricated testimonials, PWA disclosed honestly, no price mentioned, IA correctly scoped with medical disclaimer).

**Gaps vs. the mission (the actual scope of this plan):**
1. No dedicated "não é mais um aplicativo de gravidez" category-differentiation section with a before/after contrast mock (mission §10).
2. No dedicated, large "Smart Missions / próximo passo" section with a prioritized checklist mockup (mission §11) — today this idea is only implied inside `#como-funciona` step 3.
3. No comparison table(s) — neither the feature matrix (mission §17) nor the paradigm-shift table (mission §18).
4. FAQ, footer, SEO/schema need no structural change but must be re-checked once new sections/anchors exist.

Everything else in the mission (tone, emotional triggers, restrictions on fabricated content, PWA framing, pricing silence) is **already satisfied** by the current copy — confirmed by reading the full `index.html` and `docs/ux/LANDING_V2_BRAND_STRATEGY.md`. This plan does not touch those sections' copy.

## Global Constraints

- Preserve existing palette (`--teal #4FB6AC`, `--coral #F28C82`, `--violet #7C3AED`/`--violet-mid`, reserved for AI/Guide context only), typography, spacing scale, `--radius`/`--shadow` tokens. No new palette.
- No emoji anywhere — new icons must be added as `<symbol>` entries in the existing `.icon-sprite` (stroke-width 1.8, viewBox 0 0 24 24), referenced via `<svg class="icon"><use href="#icon-x"/></svg>`.
- Every new animated/revealed element must use the existing `data-reveal` / `data-reveal-delay="1..4"` mechanism — no new IntersectionObserver, no new animation library. Must degrade correctly under `prefers-reduced-motion` (already handled globally in CSS — verify new markup doesn't rely on JS-only animation state).
- Every new top-level `<section>` needs a unique `id` and `aria-labelledby` — chapter tracking (`section_view`) in `js/main.js` auto-observes `section[id]`, no JS change needed for that.
- Every new conversion-relevant CTA/interactive element gets `data-analytics="event_name"` (+ optional `data-analytics-source`) — the generic listener in `js/main.js` covers it automatically. No manual tracking calls.
- No fabricated testimonials, user counts, ratings, integrations, or competitor-specific negative claims. Comparison tables compare against "Aplicativos tradicionais de gravidez" as a category, never a named competitor.
- No pricing, no "sem cartão de crédito"-style claims beyond what's already asserted elsewhere in the page (the existing hero/CTA already say "Grátis · Sem cartão de crédito" — reuse that exact claim, don't invent new ones).
- Mobile-first: build each new component unstyled/stacked at base, add `min-width: 640px/768px/1024px` rules matching the file's existing breakpoints. Comparison tables must become a stacked/accordion-like list under 640px — never a horizontally scrolling illegible table as the *only* mobile treatment without an explicit `overflow-x:auto` wrapper as fallback.
- Don't touch: Journey Engine, Smart Missions backend, billing, Mercado Pago, Supabase, auth. This is a static marketing page only — CTAs continue to point at `https://app.babysplan.com`.

---

## Task 1: Add "Diferenciação" section (category reframe)

**Files:**
- Modify: `index.html` — insert new `<section>` between the closing `</section>` of `#motor-da-jornada` (line 375) and the `<!-- Capítulo 4 · Como Funciona -->` comment (line 377).
- Modify: `css/style.css` — add `.diff-section`, `.diff-compare`, `.diff-col`, `.diff-mock-line` rules near the existing `.motor-section`/`.pain-grid` block (after line ~294).

**Interfaces:**
- Produces: new section `id="diferenca"`, headings `id="diferenca-title"`. Referenced by nothing else, but keep the id stable in case nav/footer want to link it later.
- Consumes: existing icon sprite (`#icon-route`, `#icon-check`, `#icon-clock`), existing `.eyebrow`/`.h2`/`.subtitle`/`.section-header.centered` classes, `.chapter-index` pattern is optional (only used on the 10 main mission chapters per `DESIGN_SYSTEM.md`; this is a supporting section, skip `.chapter-index`).

- [ ] **Step 1: Write the HTML**

Insert after line 375 (`</section>` closing Capítulo 3) in `index.html`:

```html
<!-- ── Diferenciação ────────────────────────────────────────── -->
<section class="section diff-section" id="diferenca" aria-labelledby="diferenca-title">
  <div class="container">
    <div class="section-header centered" data-reveal>
      <p class="eyebrow">Uma categoria diferente</p>
      <h2 class="h2" id="diferenca-title">Não é mais um aplicativo de gravidez.</h2>
      <p class="subtitle">Outros aplicativos ajudam você a acompanhar o que está acontecendo. O Baby's Plan ajuda você a entender o que fazer a seguir.</p>
    </div>

    <div class="diff-compare" data-reveal>
      <div class="diff-col diff-col-before">
        <p class="diff-col-label">Aplicativo tradicional</p>
        <p class="diff-mock-week">Você está na semana 24.</p>
        <p class="diff-mock-note">E agora? Você decide sozinha.</p>
      </div>
      <div class="diff-col diff-col-after">
        <p class="diff-col-label">Baby's Plan</p>
        <p class="diff-mock-week">Você está na semana 24.</p>
        <ul class="diff-mock-list" role="list">
          <li class="diff-mock-line is-done"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg> Consulta registrada</li>
          <li class="diff-mock-line is-done"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg> Exame registrado</li>
          <li class="diff-mock-line is-done"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg> Enxoval 62% concluído</li>
          <li class="diff-mock-line is-next"><svg class="icon-sm" aria-hidden="true"><use href="#icon-route"/></svg> Seu próximo passo: agendar o ultrassom morfológico</li>
        </ul>
        <p class="diff-mock-illustrative">Exemplo ilustrativo — sua jornada real é montada a partir do seu plano.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Write the CSS**

Add after the `.pain-card` block (after line ~292, before `.motor-section`) in `css/style.css`:

```css
.diff-compare {
  display: grid; grid-template-columns: 1fr; gap: 16px;
  max-width: 720px; margin: 40px auto 0;
}
.diff-col {
  border-radius: var(--radius-lg); padding: 24px 22px;
}
.diff-col-before {
  background: var(--bg-subtle); border: 1px solid var(--border); opacity: .75;
}
.diff-col-after {
  background: var(--white); border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
}
.diff-col-label { font-size: .8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: var(--text-light); margin-bottom: 10px; }
.diff-mock-week { font-size: 1.0625rem; font-weight: 700; margin-bottom: 12px; }
.diff-mock-note { font-size: .9375rem; color: var(--text-muted); }
.diff-mock-list { display: grid; gap: 8px; }
.diff-mock-line {
  display: flex; align-items: center; gap: 8px;
  font-size: .9375rem; color: var(--text-muted);
}
.diff-mock-line.is-done .icon-sm { color: var(--teal); }
.diff-mock-line.is-next {
  color: var(--text); font-weight: 600;
  background: var(--bg-subtle); border-radius: var(--radius-sm);
  padding: 8px 10px; margin-top: 4px;
}
.diff-mock-line.is-next .icon-sm { color: var(--coral-dark); }
.diff-mock-illustrative { font-size: .75rem; color: var(--text-light); margin-top: 12px; font-style: italic; }

@media (min-width: 768px) {
  .diff-compare { grid-template-columns: 1fr 1fr; align-items: start; }
}
```

- [ ] **Step 3: Verify visually**

Serve the site (`python3 -m http.server 8080` from repo root) and load `http://localhost:8080/#diferenca` in a browser (or via the Playwright MCP tool). Confirm: section renders between "Personalização real" and "Como funciona", two-column layout appears ≥768px, single-column stack <768px, no console errors, `data-reveal` fades the block in on scroll.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat(landing): add category-differentiation section"
```

---

## Task 2: Add "Smart Missions / Próximo Passo" section

**Files:**
- Modify: `index.html` — insert new `<section>` between the closing `</section>` of `#como-funciona` (line 413) and `<!-- Capítulo 5 · Guia de Jornada -->` (line 415).
- Modify: `css/style.css` — add `.missions-section`, `.missions-panel`, `.mission-row` rules after the `.step-card` block.
- Modify: `js/main.js` — none required (no new interactivity; static illustrative mock, tracked automatically via existing `section_view` observer).

**Interfaces:**
- Produces: `id="proximos-passos"`, heading `id="missions-title"`.
- Consumes: `.icon-check`, plus one new icon symbol `#icon-circle` (empty/pending state) to add to the sprite in `index.html` (near the other `<symbol>` defs, e.g. after `#icon-close` at line 146).

- [ ] **Step 1: Add the missing icon symbol**

In `index.html`, inside `<svg class="icon-sprite">` (after the `#icon-close` symbol, line 146), add:

```html
<symbol id="icon-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></symbol>
```

- [ ] **Step 2: Write the HTML**

Insert after line 413 (`</section>` closing Capítulo 4 · Como Funciona):

```html
<!-- ── Smart Missions / Próximo Passo ──────────────────────── -->
<section class="section missions-section" id="proximos-passos" aria-labelledby="missions-title">
  <div class="container">
    <div class="section-header centered" data-reveal>
      <p class="eyebrow">Nunca mais "e agora?"</p>
      <h2 class="h2" id="missions-title">Nunca mais se pergunte: "e agora?"</h2>
      <p class="subtitle">O Baby's Plan olha para o momento da sua jornada e organiza as próximas ações por prioridade.</p>
    </div>

    <div class="missions-panel" data-reveal>
      <p class="missions-panel-title">Seus próximos passos</p>
      <ul class="missions-list" role="list">
        <li class="mission-row is-done" role="listitem">
          <svg class="icon" aria-hidden="true"><use href="#icon-check"/></svg>
          <span>Agendar consulta do segundo trimestre</span>
        </li>
        <li class="mission-row is-done" role="listitem">
          <svg class="icon" aria-hidden="true"><use href="#icon-check"/></svg>
          <span>Registrar exame de rotina</span>
        </li>
        <li class="mission-row is-current" role="listitem">
          <svg class="icon" aria-hidden="true"><use href="#icon-route"/></svg>
          <span>Organizar itens essenciais do enxoval</span>
        </li>
        <li class="mission-row is-pending" role="listitem">
          <svg class="icon" aria-hidden="true"><use href="#icon-circle"/></svg>
          <span>Preparar documentos da maternidade</span>
        </li>
      </ul>
      <p class="missions-illustrative">Exemplo ilustrativo — seus próximos passos reais mudam conforme sua jornada.</p>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Write the CSS**

Add after the `.step-card` rules (after line ~337) in `css/style.css`:

```css
.missions-panel {
  max-width: 560px; margin: 40px auto 0;
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
  padding: 28px 24px;
}
.missions-panel-title { font-size: .8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: var(--text-light); margin-bottom: 16px; }
.missions-list { display: grid; gap: 10px; }
.mission-row {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 14px; border-radius: var(--radius-sm);
  font-size: .9375rem;
}
.mission-row .icon { flex-shrink: 0; width: 20px; height: 20px; }
.mission-row.is-done { color: var(--text-light); }
.mission-row.is-done .icon { color: var(--teal); }
.mission-row.is-done span { text-decoration: line-through; text-decoration-color: var(--border); }
.mission-row.is-current {
  background: var(--bg-subtle); color: var(--text); font-weight: 600;
  border: 1px solid var(--teal);
}
.mission-row.is-current .icon { color: var(--coral-dark); }
.mission-row.is-pending { color: var(--text-muted); }
.mission-row.is-pending .icon { color: var(--border); }
.missions-illustrative { font-size: .75rem; color: var(--text-light); margin-top: 16px; font-style: italic; text-align: center; }
```

- [ ] **Step 4: Verify visually**

Reload the local server, confirm the section appears between "Como funciona" and "Guia de Jornada", checklist rows show done/current/pending states distinctly, layout is legible at 390px width.

- [ ] **Step 5: Commit**

```bash
git add index.html css/style.css
git commit -m "feat(landing): add Smart Missions / próximo passo section"
```

---

## Task 3: Add comparison tables (feature matrix + paradigm shift)

**Files:**
- Modify: `index.html` — insert new `<section>` between the closing `</section>` of `#sincronizados` (line 615) and `<!-- Capítulo 8 · Prova -->` (line 617).
- Modify: `css/style.css` — add `.compare-section`, `.compare-table`, `.compare-shift` rules after `.sync-section` block.

**Interfaces:**
- Produces: `id="comparativo"`, heading `id="comparativo-title"`.
- Consumes: existing `.icon-check` for "✓" cells; plain text for "Alguns"/"Limitado"/"—" cells (no icon needed there — keep it honest, not falsely affirmative).

- [ ] **Step 1: Write the HTML**

Insert after line 615 (`</section>` closing Capítulo 7 · Pais Sincronizados):

```html
<!-- ── Quadro Comparativo ──────────────────────────────────── -->
<section class="section compare-section" id="comparativo" aria-labelledby="comparativo-title">
  <div class="container">
    <div class="section-header centered" data-reveal>
      <p class="eyebrow">A diferença</p>
      <h2 class="h2" id="comparativo-title">A diferença não está em ter mais uma lista.</h2>
      <p class="subtitle">Está em saber o que fazer com ela.</p>
    </div>

    <div class="compare-table-wrap" data-reveal>
      <table class="compare-table">
        <caption class="sr-only">Comparação entre aplicativos tradicionais de gravidez e o Baby's Plan</caption>
        <thead>
          <tr>
            <th scope="col">Recurso</th>
            <th scope="col">Aplicativos tradicionais</th>
            <th scope="col">Baby's Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr><th scope="row">Acompanhar semana a semana</th><td>Sim</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Desenvolvimento do bebê</th><td>Sim</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Conteúdo educativo</th><td>Sim</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Registrar consultas</th><td>Alguns</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Registrar exames</th><td>Alguns</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Organizar documentos</th><td>Limitado</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Enxoval</th><td>Checklist</td><td class="is-yes">Inteligente</td></tr>
          <tr><th scope="row">Orçamento do enxoval</th><td>Limitado</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Jornada personalizada</th><td>Limitada</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Próximos passos priorizados</th><td>—</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Guia contextual com IA</th><td>Varia</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Linha do tempo da jornada</th><td>Limitado</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Memórias</th><td>Sim</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Compartilhamento familiar</th><td>Varia</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Plano de parto</th><td>Alguns</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
          <tr><th scope="row">Bolsa maternidade</th><td>Alguns</td><td class="is-yes"><svg class="icon-sm" aria-hidden="true"><use href="#icon-check"/></svg></td></tr>
        </tbody>
      </table>
    </div>

    <div class="compare-shift" data-reveal>
      <p class="compare-shift-lead">De informação para orientação. De checklist para jornada.</p>
      <div class="compare-shift-grid">
        <div class="compare-shift-row"><span class="compare-shift-before">"O que está acontecendo?"</span><span class="compare-shift-after">"O que está acontecendo?"</span></div>
        <div class="compare-shift-row"><span class="compare-shift-before">"O que eu deveria fazer?"</span><span class="compare-shift-after">"Aqui está seu próximo passo."</span></div>
        <div class="compare-shift-row"><span class="compare-shift-before">"O que falta?"</span><span class="compare-shift-after">"Nós organizamos o que falta."</span></div>
        <div class="compare-shift-row"><span class="compare-shift-before">"Onde encontro essa informação?"</span><span class="compare-shift-after">"Seu Guia conhece sua jornada."</span></div>
        <div class="compare-shift-row"><span class="compare-shift-before">"O que compro?"</span><span class="compare-shift-after">"Veja o que faz sentido para o seu momento."</span></div>
        <div class="compare-shift-row"><span class="compare-shift-before">"Estou atrasada?"</span><span class="compare-shift-after">"Veja o que realmente importa agora."</span></div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Write the CSS**

Add after the `.sync-section` block (after line ~504) in `css/style.css`. Table is horizontally scrollable as a fallback at all widths (`overflow-x:auto` wrapper) but restyled into a stacked label/value list below 640px so it's legible without scrolling on phones:

```css
.compare-table-wrap { margin-top: 40px; overflow-x: auto; }
.compare-table { width: 100%; border-collapse: collapse; min-width: 480px; }
.compare-table th, .compare-table td {
  padding: 12px 14px; text-align: center; font-size: .875rem;
  border-bottom: 1px solid var(--border);
}
.compare-table thead th { font-weight: 700; color: var(--text-light); font-size: .8125rem; text-transform: uppercase; letter-spacing: .03em; }
.compare-table th[scope="row"] { text-align: left; font-weight: 600; color: var(--text); }
.compare-table td.is-yes { color: var(--teal); font-weight: 700; }
.compare-table td.is-yes .icon-sm { color: var(--teal); }
.compare-table tbody tr:nth-child(even) { background: var(--bg-subtle); }

.compare-shift { max-width: 640px; margin: 56px auto 0; text-align: center; }
.compare-shift-lead { font-size: 1.125rem; font-weight: 700; margin-bottom: 24px; }
.compare-shift-grid { display: grid; gap: 10px; text-align: left; }
.compare-shift-row {
  display: grid; grid-template-columns: 1fr; gap: 4px;
  padding: 12px 16px; border-radius: var(--radius-sm); background: var(--bg-subtle);
}
.compare-shift-before { font-size: .8125rem; color: var(--text-light); }
.compare-shift-after { font-size: .9375rem; font-weight: 600; color: var(--text); }
.compare-shift-after::before { content: "→ "; color: var(--teal); }

@media (min-width: 640px) {
  .compare-table-wrap { overflow-x: visible; }
  .compare-shift-row { grid-template-columns: 1fr 1fr; align-items: center; gap: 12px; }
  .compare-shift-before::after { content: ""; }
}
```

Check `css/style.css` for an existing `.sr-only` utility class before adding a new one (search `grep -n "sr-only" css/style.css`); if absent, add the standard visually-hidden pattern near the top utility section:

```css
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
```

- [ ] **Step 3: Verify visually and check mobile legibility**

Reload local server. Confirm: table renders with a header row + 16 data rows, teal checkmarks in the Baby's Plan column, no horizontal scroll needed at ≥640px, and at 375px width the table wrapper scrolls horizontally without breaking page layout (`overflow-x: auto` contained, not causing body scroll). Confirm the paradigm-shift rows stack single-column on mobile and go two-column ≥640px.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat(landing): add comparison table and paradigm-shift section"
```

---

## Task 4: SEO/meta touch-up and cross-page consistency check

**Files:**
- Modify: `index.html` head block (lines 1–117) only if needed after review.

**Interfaces:** none (content-only pass).

- [ ] **Step 1: Re-read `<title>`, meta description, OG/Twitter tags, Schema.org blocks (lines 1–116)**

Current copy: `"Baby's Plan — Um plano para cada semana da sua gravidez"` / description `"O Baby's Plan monta um plano só seu — consultas, enxoval e apoio de IA, sempre com o próximo passo certo..."`. This already reflects the "próximo passo" positioning the mission wants — **no change needed** unless it clashes with new section content. Confirm no clash (it doesn't: the new sections reinforce, not contradict, this framing).

- [ ] **Step 2: Confirm FAQPage JSON-LD still mirrors the visible FAQ section exactly**

Since Task 1–3 don't touch `#faq`, the existing JSON-LD (lines 74–116) still matches 1:1. No change required. Verify with a diff-by-eye between the JSON-LD questions and the rendered `.faq-item` list.

- [ ] **Step 3: Commit (only if a change was made in Step 1)**

If no head changes were needed, skip the commit — note this explicitly in the final report rather than committing a no-op.

---

## Task 5: Full-page verification pass

**Files:** none modified; verification only.

- [ ] **Step 1: Serve locally**

```bash
cd "/Users/serafim/My Projects/babysplan-landing" && python3 -m http.server 8080
```

- [ ] **Step 2: Grep for forbidden content patterns across the whole file**

```bash
grep -niE "arrepender|se você realmente ama|boa mãe|colocando seu bebê em risco|última chance|oferta termina|R\$ ?79|premium|assinatura|chatbot" index.html
```

Expected: no matches (or only matches inside comments/attribute names that are clearly not user-facing copy — inspect any hit individually). If a match is found in visible copy, fix it before proceeding.

- [ ] **Step 3: Browser check — desktop (1440px) and mobile (390px)**

Use the Playwright browser tool: navigate to `http://localhost:8080`, resize to 1440×900, take a full-page screenshot; resize to 390×844, take a full-page screenshot. Scroll through both to confirm:
- New sections (`#diferenca`, `#proximos-passos`, `#comparativo`) render in the correct order and don't visually collide with neighboring sections (spacing consistent with `.section` padding).
- `data-reveal` fade-in triggers correctly on scroll in both viewports.
- Comparison table doesn't cause horizontal body scroll on 390px (only the `.compare-table-wrap` should scroll internally, if at all).
- Nav, hero WOW panel, and all pre-existing sections are visually unchanged.

- [ ] **Step 4: Accessibility spot-check**

Confirm every new `<section>` has `aria-labelledby` pointing to an existing heading id, the comparison table has a `<caption class="sr-only">` and proper `scope="col"/"row"` attributes, and no new icon-only interactive element lacks a text label (the new sections have no new interactive elements beyond static content, so this should be a quick confirmation).

- [ ] **Step 5: Report findings**

Summarize in the final report: files changed, sections added, any deviation from the mission and why, any pending items (e.g., analytics IDs still placeholder — pre-existing, not part of this plan's scope), confirmation that no app/backend/billing/Mercado Pago code was touched.
