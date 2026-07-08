# Landing Page V2 — Arquitetura de Produto, UX e Conversão

**CR-001 · Fase 1 — Estratégia (sem implementação)**
**Status:** Especificação para aprovação. Nenhum arquivo de produção foi alterado por este documento.
**Fontes analisadas:** `babysplan-landing` (index.html, css/style.css, privacy.html, terms.html) e `baby-journey-app/docs/` (PRODUCT_FEATURES.md, FEATURE_MATRIX.md, USER_FLOWS.md, NAVIGATION.md, TECH_DEBT.md, README.md, docs/ai/, docs/premium/).

---

## 1. Diagnóstico completo da Landing atual

### 1.1 O problema central

A landing atual (`index.html`, 502 linhas) descreve o Baby's Plan como **um app de checklist de gravidez com sincronização entre casal**. O produto real é uma **plataforma de jornada orientada por IA**, com um motor de recomendação próprio (Enxoval, 11 regras + simulador Brasil×EUA), um guia de IA com 4 modos (Conversar/Explicadora/Resumidora/Observadora proativa), seleção automática de jornada por condição clínica (gêmeos, FIV, trombofilia, diabetes gestacional) e um conceito arquitetural unificador — a **Jornada** — que não existe na comunicação atual.

A landing vende a versão de 2023 de um produto que já é a versão de 2026. Esse é o gap que esta CR resolve.

### 1.2 Pontos fortes (o que já funciona e deve ser preservado)

- **Performance técnica de base**: site estático, sem framework, carrega rápido; deve ser preservado no V2.
- **Sistema de design coerente**: paleta teal/coral/violeta, tipografia Inter/Manrope, `clamp()` para escala fluida, glassmorphism sutil na navbar. É uma boa fundação visual, não precisa ser reinventada — precisa ser estendida.
- **Estrutura mobile-first do CSS**: breakpoints em 640/768/1024px, grid mobile-first funcional.
- **Copy do "Como funciona"**: claro, direto, em 4 passos — o melhor microcopy da página atual.
- **SEO técnico básico presente**: OG tags, Twitter Card, Schema.org `WebApplication`, canonical, `lang="pt-BR"`.

### 1.3 Pontos fracos — Comunicação e posicionamento

- **Subvenda severa de valor.** A grade de "Benefícios" trata Enxoval, Jornada com IA e Consultas como itens equivalentes numa grade de 12 cards genéricos. O diferencial mais defensável do produto (motor de IA + jornada personalizada por condição clínica) não é sequer mencionado.
- **Nenhuma menção à IA.** Em 2026, "app com IA que te acompanha" é um gatilho de interesse forte; a landing atual não usa a palavra "inteligência artificial" em nenhum lugar, apesar de o Guia da Jornada ser um dos ativos mais fortes do produto.
- **Card "Sono" com descrição errada.** A auditoria de código encontrou que o card nomeado "Sono" na seção Benefícios descreve, na verdade, chutes/contrações/rotina — um bug de copy que confunde o usuário e sinaliza descuido.
- **Posicionamento genérico.** "Toda a gestação, em um só lugar" é uma promessa que qualquer concorrente (incluindo uma planilha do Google) também faz. Não comunica singularidade.

### 1.4 Pontos fracos — UX e hierarquia

- **Screenshots falsos.** A seção "Interface" usa placeholders coloridos com emoji (não capturas reais) rotulados "Dashboard Principal", "Enxoval Inteligente", "Desenvolvimento do Bebê". Isso é a antítese de "prova" — um usuário que perceber (e muitos percebem) perde confiança instantaneamente.
- **Arquitetura de informação divorciada do produto real.** O app organiza tudo em torno de 5 grupos de navegação (Acompanhamento, Saúde, Memórias, Preparação, Geral) com a Jornada como centro gravitacional e `JourneyAction` unificando CTAs. A landing usa uma grade plana de 12 features sem hierarquia nem narrativa — força o usuário a fazer o trabalho de entender o que é essencial.
- **Emoji como único sistema de iconografia.** Falta de investimento visual sério (zero ilustração customizada) passa impressão de produto amador, contradizendo a maturidade real (33 módulos, motor de IA, backoffice administrativo).

### 1.5 Pontos fracos — Conversão

- **CTA único, genérico, sem segmentação.** Todos os 6 CTAs de conversão dizem "Começar agora" ou "Criar conta" e apontam para `app.babysplan.com` sem UTM. Não há CTA diferenciado por persona (gestante vs. parceiro vs. quem já está em semana 30).
- **Zero prova social real.** Nenhum número de usuários, depoimento, avaliação de loja de app, ou logo de imprensa. A única frase ("Junte-se a famílias que já usam...") é uma afirmação vazia sem dado.
- **Nenhuma redução de atrito ativa.** Não há indicação de tempo de cadastro, não há vídeo, não há demo interativa, não há prova de segurança de terceiros (o selo "Dados 100% seguros" é auto-declarado).
- **FAQ menciona "premium" sem necessidade.** O FAQ atual já expõe a existência de um plano premium futuro que, segundo `FEATURE_MATRIX.md`, **não está implementado no código** — risco de gerar expectativa que o produto não cumpre hoje.

### 1.6 Pontos fracos — Emocionais

- A gravidez é uma jornada emocionalmente intensa (medo, ansiedade, alegria, sobrecarga de decisões). A landing atual comunica **organização**, mas não comunica **acolhimento**. Não há storytelling, não há momento de identificação emocional, não há linguagem que reconheça o medo do "será que estou esquecendo de algo importante".

### 1.7 Pontos fracos — Visuais

- Inconsistência entre `theme-color` (`#0D9488`) e a paleta CSS (`--teal: #4FB6AC`) — detalhe técnico pequeno, mas sintoma de falta de processo de design system.
- `logo-symbol.svg` (183KB) presente no repo mas não usado — indica ativo visual não aproveitado ou órfão.
- OG image (`og-image.png`) referenciada mas ausente no repositório — compartilhamentos em redes sociais hoje provavelmente quebram (sem preview de imagem).

### 1.8 Pontos fracos — Posicionamento competitivo

- A landing não diz por que o Baby's Plan é diferente de um app de checklist genérico ou de uma planilha compartilhada. Os diferenciais reais e funcionais (jornada personalizada por condição clínica, IA com 4 modos, motor de recomendação do Enxoval, Lista de Presentes pública sem login) são justamente os elementos ausentes na comunicação.

---

## 2. Personas

Baseado nos fluxos reais do produto (`USER_FLOWS.md`, `NAVIGATION.md`) — papéis de owner/partner, convite via link/WhatsApp, Lista de Presentes pública sem login, templates de jornada por condição clínica.

### Persona 1 — Marina, 29 anos, primeira gravidez (persona primária)

- **Contexto:** Descobriu a gravidez há 3 semanas. Ainda não sabe o que precisa saber.
- **Medos:** "Vou esquecer algo importante." "Não sei se o que estou sentindo é normal." "Meu parceiro não está tão engajado quanto eu gostaria."
- **Desejos:** Sentir controle sobre um processo que parece caótico. Ser guiada passo a passo. Compartilhar a experiência com o parceiro sem precisar repetir tudo.
- **Objeções:** "Já uso um app de gravidez genérico, por que trocar?" "Isso vai dar trabalho de configurar?"
- **Como navega:** Chega via busca orgânica ("app acompanhamento gravidez") ou indicação de amiga/grupo de WhatsApp. Lê rápido, no celular, entre tarefas. Decide em segundos se continua ou fecha a aba.
- **Gatilho de conversão:** Ver a jornada semana-a-semana e o Guia de IA respondendo dúvidas reais, sem precisar pesquisar no Google.

### Persona 2 — Rafael, 32 anos, parceiro/pai (persona secundária, crítica para ativação)

- **Contexto:** Recebe um link de convite da parceira. Não escolheu o produto, foi convidado.
- **Medos:** "Vou parecer que não estou envolvido." "Não sei o que fazer, só sei que quero ajudar."
- **Desejos:** Uma forma fácil e não constrangedora de participar sem precisar aprender tudo sozinho.
- **Objeções:** "Preciso criar conta e configurar tudo de novo?"
- **Como navega:** Clica no link de convite direto, muitas vezes sem passar pela landing pública — mas se passar, precisa entender em 10 segundos "o que é isso e por que eu deveria confiar".
- **Gatilho de conversão:** Ver explicitamente a seção "Pais sincronizados" com prova de que a entrada é instantânea e sem fricção.

### Persona 3 — Camila, 34 anos, segunda gravidez, gestação de alto risco (trombofilia/diabetes gestacional)

- **Contexto:** Já viveu uma gravidez, sabe o básico, mas agora tem uma condição clínica que muda tudo.
- **Medos:** "Preciso de acompanhamento diferente do genérico." "Apps de gravidez tratam tudo como se fosse uma gestação padrão."
- **Desejos:** Sentir que o produto entende sua condição específica, não que ela precisa adaptar um conteúdo genérico à sua realidade.
- **Objeções:** "Já testei 2 apps e nenhum considerava minha condição."
- **Como navega:** Pesquisa termos mais específicos ("app gravidez gêmeos", "acompanhamento gravidez diabetes gestacional"). Alto intento, baixo volume.
- **Gatilho de conversão:** Esta é a persona para quem o diferencial real do produto (seleção automática de template de jornada por condição clínica) é mais forte — hoje totalmente invisível na landing.

### Persona 4 — Família tentando engravidar / FIV

- **Contexto:** Ainda não está grávida, mas já pesquisa e planeja.
- **Medos:** Ansiedade do processo de FIV, medo de "comprar antes da hora" (superstição comum).
- **Desejos:** Organização financeira e emocional antecipada.
- **Objeções:** "Não estou grávida ainda, isso serve para mim?"
- **Como navega:** Fóruns, grupos de FIV, comunidades especializadas.
- **Nota estratégica:** Esta persona é atendida pelo produto (template `ivf_pregnancy`) mas não deve ser o foco principal da landing V2 — é nicho demais para a mensagem primária, mas merece uma menção lateral (FAQ ou seção de personalização) para não perder o lead.

### Persona 5 — Brasileiros no exterior

- **Contexto:** Mora fora do Brasil, navega dois sistemas de saúde e consumo (comparação de preços Brasil × EUA já existe no produto: card "Brasil × EUA" e módulo de Mudança Internacional).
- **Medos:** Comprar errado, pagar caro, não entender diferenças de sistema de saúde.
- **Desejos:** Um comparador confiável de preço e um guia de adaptação.
- **Como navega:** Busca em português mesmo estando fora do Brasil (comunidades de brasileiros no exterior).
- **Gatilho de conversão:** É o público mais bem servido pelo diferencial "simulador Brasil × EUA" e módulo "Mudança Internacional" — hoje sub-comunicado (aparece como 1 card entre 12, sem destaque).

**Priorização recomendada para a V2:** Marina (primária, maior volume) → Rafael (crítico para retenção em casal, mas conversão dele geralmente acontece via convite direto, não via landing) → Camila (alto valor, nicho de alta conversão) → Brasileiros no exterior (nicho lucrativo) → FIV (long tail, tratar em FAQ).

---

## 3. Nova proposta de valor

### 3.1 Framework de posicionamento

Produto: plataforma inteligente de acompanhamento de gestação.
Categoria que queremos ocupar: **não** "mais um app de gravidez", mas **"o primeiro guia de gravidez que se adapta à sua jornada"** — pessoal, não genérico.

### 3.2 Opções de headline (com justificativa)

**Opção A — Foco em personalização/IA (recomendada para persona primária + Camila):**
> "Sua gravidez não é igual a nenhuma outra. Seu acompanhamento também não deveria ser."
> *Subheadline:* "O Baby's Plan entende sua jornada — gêmeos, FIV, alto risco ou primeira gestação — e monta um plano sob medida, com um guia de IA ao seu lado em cada semana."

*Por que funciona:* ataca diretamente a objeção de Camila e Marina ("apps tratam tudo genérico"), introduz IA sem jargão técnico, e é defensável (existe no código: seleção automática de template por condição clínica).

**Opção B — Foco emocional/acolhimento (recomendada se o teste A/B priorizar topo de funil amplo):**
> "Você não precisa passar por isso sozinha."
> *Subheadline:* "Do primeiro teste positivo aos primeiros meses do bebê, o Baby's Plan organiza, explica e acompanha — para você e quem você ama, juntos, em tempo real."

*Por que funciona:* fala direto ao medo emocional (isolamento, sobrecarga), reforça o diferencial real de sincronização em casal, humaniza a marca.

**Opção C — Foco em clareza/controle (mais próxima da atual, evolução conservadora):**
> "Sua jornada de gestação, guiada — não apenas organizada."
> *Subheadline:* "Consultas, enxoval, desenvolvimento do bebê e um guia de IA que responde suas dúvidas, tudo conectado numa única jornada personalizada."

*Por que funciona:* transição de risco menor a partir do headline atual, útil como variante de teste A/B contra a Opção A.

**Recomendação:** Opção A como headline principal do Hero; Opção B como ângulo de campanha de topo de funil (redes sociais/ads) e possivelmente como headline da seção emocional intermediária da própria landing.

### 3.3 Tagline

> "Baby's Plan — a jornada da sua gestação, com um guia ao seu lado."

Substitui a tagline atual ("Organizando cada etapa da sua jornada") introduzindo o conceito de "guia" (IA) sem soar técnico.

### 3.4 Mensagem central (elevator pitch)

"O Baby's Plan é a plataforma que transforma uma gestação em uma jornada guiada: entende sua condição específica, organiza tudo que importa (saúde, enxoval, memórias) e coloca você e seu parceiro sempre na mesma página — com um guia de IA que explica, resume e avisa o que vem a seguir."

---

## 4. Storytelling

### 4.1 Arco narrativo da página

A landing deve seguir o arco clássico de "problema → revelação → transformação → prova → decisão", mapeado às perguntas mentais reais do usuário:

| Momento | Pergunta mental do usuário | Emoção despertada | Resposta da seção |
|---|---|---|---|
| 1. Chegada | "Isso é para mim?" | Curiosidade / ceticismo | Hero: promessa personalizada, prova visual imediata (screenshot real) |
| 2. Reconhecimento do problema | "Por que os outros apps não bastam?" | Alívio de ser compreendida | Seção Problema: nomeia a sobrecarga de decisões e a genericidade dos apps atuais |
| 3. Revelação da solução | "Como isso resolve o meu caso específico?" | Esperança | Seção Personalização/Jornada: mostra a seleção automática de jornada por condição |
| 4. Como funciona | "Vou conseguir usar isso sem esforço?" | Confiança | 4 passos, linguagem simples, tempo estimado |
| 5. A IA como diferencial | "Isso realmente me ajuda ou é só marketing de IA?" | Interesse concreto | Demonstração dos 4 modos do Guia da Jornada com exemplo real de pergunta/resposta |
| 6. Amplitude do produto | "O que mais isso resolve?" | Surpresa positiva (upsell mental) | Mapa da plataforma por categoria (Saúde / Memórias / Preparação) |
| 7. Vínculo em casal | "Meu parceiro vai participar de verdade?" | Conexão emocional | Seção sincronização, com cenário real (notificação chegando para os dois) |
| 8. Prova | "Outras pessoas confiam nisso?" | Confiança social | Depoimentos reais (a coletar), números de uso quando disponíveis |
| 9. Neutralização de objeções | "Isso é seguro? É pago? Preciso instalar algo?" | Segurança | FAQ reorganizado por objeção, não por feature |
| 10. Decisão | "Vale a pena tentar agora?" | Convicção + baixa fricção percebida | CTA final com microcopy de baixo risco ("grátis para começar, sem cartão") |

### 4.2 Princípio de storytelling

Cada seção deve resolver uma dúvida antes de introduzir a próxima — nunca introduzir um conceito novo (ex.: "Jornada", "Guia de IA") sem antes ter preparado o terreno emocional ou cognitivo para ele. A ordem importa mais do que a completude: é preferível cortar uma seção a quebrar o fluxo de raciocínio do visitante.

---

## 5. Nova arquitetura da Landing

```
Navbar (sticky, glass)
    ↓
Hero — Promessa personalizada + prova visual real
    ↓
Problema — "Toda gravidez é tratada como igual. A sua não é."
    ↓
Solução / Personalização — Jornada adaptada à condição (gêmeos, FIV, alto risco, primeira vez)
    ↓
Como Funciona — 4 passos (mantido da versão atual, copy já eficaz)
    ↓
Guia de IA — Demonstração dos 4 modos com exemplo real de interação
    ↓
Plataforma Completa — Mapa visual por categoria (Saúde / Memórias / Preparação / Acompanhamento)
    ↓
Enxoval Inteligente — Seção dedicada (maior módulo do produto, com simulador Brasil×EUA)
    ↓
Pais Sincronizados — Sincronização em tempo real, convite sem fricção
    ↓
Prova Social — Depoimentos / números (a popular conforme disponibilidade real)
    ↓
FAQ — Reorganizado por objeção
    ↓
CTA Final — Baixo risco, sem menção a "premium" não implementado
    ↓
Footer
```

### 5.1 Justificativa da mudança estrutural em relação ao exemplo do briefing

O briefing original sugere `Hero → Problema → Solução → Plataforma → IA → Jornada → Saúde → Enxoval → Família → Memórias → Provas → FAQ → CTA`. A proposta acima **funde "Solução" e "Jornada"** numa única seção de Personalização, porque no produto real esses dois conceitos são o mesmo mecanismo (seleção automática de template por condição clínica) — separá-los criaria redundância. Também **eleva o Enxoval a seção própria** (em vez de ficar dentro de "Plataforma") porque é comprovadamente o módulo mais complexo do produto (193 arquivos, 8 subdomínios) e tem um gancho de conversão único (simulador Brasil×EUA) que merece destaque próprio, não apenas um card na grade.

"Saúde" e "Memórias" não recebem seções dedicadas de primeiro nível — são mencionadas dentro do mapa da "Plataforma Completa" — porque, embora reais, não são o diferencial que justifica a troca de um app genérico pelo Baby's Plan; aprofundar demais nelas dilui o foco em IA/personalização, que é o argumento mais forte.

---

## 6. Detalhamento por seção

Para cada seção: objetivo, mensagem, layout, elementos visuais, animações, componentes, imagem, copy, CTA, emoção, métrica alvo.

### 6.1 Hero

- **Objetivo:** comunicar em 3 segundos que o produto é personalizado e não genérico; provar visualmente com produto real.
- **Mensagem:** Opção A da seção 3.2.
- **Layout:** duas colunas em desktop (texto à esquerda, mockup à direita); empilhado no mobile com mockup abaixo do texto.
- **Elementos visuais:** mockup de device real com screenshot verdadeiro do Dashboard (substituindo o composto atual por uma versão que mostre claramente o conceito de Jornada); badge de personalização ("Jornada adaptada à sua condição").
- **Animações:** fade-in + leve translateY no texto ao carregar (200ms, easing suave); nenhuma animação em loop (evitar distração/custo de bateria).
- **Componentes:** badge, H1, subheadline, 2 CTAs (primário "Começar agora", secundário "Ver como funciona"), nota de baixo atrito, mockup.
- **Imagem:** screenshot real e atual do Dashboard (não o composto genérico atual).
- **Copy:** ver seção 3.
- **CTA:** primário para cadastro; secundário para âncora `#como-funciona`.
- **Emoção:** curiosidade + alívio ("finalmente algo pensado para o meu caso").
- **Métrica alvo:** taxa de scroll além do Hero (proxy de interesse) e CTR do CTA primário.

### 6.2 Problema

- **Objetivo:** validar a frustração do usuário com apps genéricos antes de apresentar a solução.
- **Mensagem:** "A maioria dos apps trata toda gravidez como igual. Checklists genéricos, conteúdo padrão, nenhuma consideração pela sua condição ou pela sua rotina."
- **Layout:** bloco de texto centralizado, curto, com 3 "dores" ilustradas em ícones simples (não emoji).
- **Elementos visuais:** ícones de linha customizados (ex.: checklist genérico riscado, "condição ignorada", "casal desconectado").
- **Animações:** nenhuma além do fade-in padrão de scroll.
- **Componentes:** eyebrow, headline curta, 3 mini-cards de dor.
- **Copy:** direta, sem jargão, validando a experiência do usuário sem soar negativa sobre concorrentes nomeados.
- **CTA:** nenhum (seção de preparação emocional, não de conversão).
- **Emoção:** reconhecimento ("é exatamente isso que eu sinto").
- **Métrica alvo:** tempo de permanência na seção (via scroll depth), não CTR.

### 6.3 Solução / Personalização (Jornada)

- **Objetivo:** apresentar o mecanismo real de personalização como resposta direta ao problema.
- **Mensagem:** "No cadastro, você conta sua história — primeira gestação, gêmeos, FIV, uma condição de saúde — e o Baby's Plan monta automaticamente sua jornada."
- **Layout:** visual de "ramificação" (uma árvore de decisão simplificada) mostrando 3-4 caminhos de jornada diferentes convergindo de um único onboarding.
- **Elementos visuais:** ilustração customizada de um caminho/jornada com pontos de decisão; badges com nomes reais de jornada (adaptados para linguagem de usuário, não os identificadores técnicos): "Primeira gestação", "Gêmeos", "Fertilização assistida", "Acompanhamento de alto risco".
- **Animações:** leve animação de "desenho" do caminho ao entrar em viewport (SVG stroke-dasharray), respeitando `prefers-reduced-motion`.
- **Componentes:** eyebrow "Personalização real", headline, ilustração de caminhos, 4 badges de jornada.
- **Copy:** evitar termos técnicos do banco de dados (`ivf_pregnancy` etc.) — usar linguagem humana.
- **CTA:** nenhum, ou "Veja como funciona a jornada" como link secundário para a próxima seção.
- **Emoção:** esperança / sensação de ser vista como caso individual.
- **Métrica alvo:** cliques nos badges de jornada (interesse por segmento — dado valioso para futura segmentação de ads).

### 6.4 Como Funciona

- **Objetivo:** reduzir ansiedade sobre esforço de configuração.
- **Mensagem:** mantida da versão atual (já eficaz): 4 passos, "menos de dois minutos".
- **Layout:** mantém o grid de steps atual, com pequenos ajustes de ícone (trocar emoji por ícones de linha consistentes com o novo sistema visual).
- **Componentes:** 4 cards numerados.
- **CTA:** nenhum (seção informativa).
- **Emoção:** confiança / baixa fricção percebida.
- **Métrica alvo:** nenhuma direta; contribui para reduzir abandono pré-CTA.

### 6.5 Guia de IA

- **Objetivo:** tornar o diferencial de IA tangível e não abstrato — mostrar, não apenas dizer "temos IA".
- **Mensagem:** "Seu guia de jornada responde dúvidas, explica exames, resume sua semana e avisa quando algo pede atenção — sempre com o cuidado de indicar quando é hora de falar com seu médico."
- **Layout:** mockup de conversa real (chat bubble) com uma pergunta plausível ("Meu exame de glicemia deu alterado, o que isso significa?") e resposta educativa com disclaimer médico visível — isso também comunica responsabilidade/segurança.
- **Elementos visuais:** os 4 modos representados como ícones/abas: Conversar, Explicar, Resumir, Observar.
- **Animações:** simulação de "digitação" da resposta da IA ao entrar em viewport (uma vez, não em loop).
- **Componentes:** eyebrow "Inteligência artificial a seu favor", headline, mockup de chat, 4 mini-descrições dos modos.
- **Copy:** deve incluir, em algum lugar visível (rodapé da seção ou nota), o disclaimer de que a IA não substitui orientação médica — alinhado ao guardrail real do produto (`docs/ai/AI_GOVERNANCE.md`).
- **CTA:** nenhum direto, ou "Conheça o Guia da Jornada" como CTA terciário.
- **Emoção:** confiança tecnológica + segurança (por causa do disclaimer, que paradoxalmente aumenta confiança em vez de reduzir).
- **Métrica alvo:** engajamento com o mockup interativo, se implementado como componente clicável (ver seção 9).

### 6.6 Plataforma Completa

- **Objetivo:** comunicar amplitude sem repetir o erro da grade plana atual — agrupar por categoria como o produto real faz.
- **Mensagem:** "Tudo que sua jornada precisa, em um só lugar" — organizado nas mesmas 4 categorias do app real (Acompanhamento, Saúde, Memórias, Preparação), não 12 itens soltos.
- **Layout:** 4 blocos (não 12 cards), cada um com 3-4 sub-itens em texto menor, mais escaneável.
- **Elementos visuais:** um ícone de linha por categoria (não por sub-item, para evitar poluição visual).
- **Componentes:** 4 cards de categoria expansíveis (acordeão opcional no mobile).
- **Copy:** corrigir o bug de copy do card "Sono" identificado no diagnóstico (renomear para refletir o conteúdo real: chutes/contrações/rotina, ou separar em dois conceitos corretos).
- **CTA:** nenhum.
- **Emoção:** surpresa positiva com a amplitude ("não sabia que fazia tudo isso").
- **Métrica alvo:** scroll depth / expansão de acordeões no mobile.

### 6.7 Enxoval Inteligente (seção própria)

- **Objetivo:** destacar o módulo mais complexo e com maior potencial de diferenciação prática (economia real de dinheiro).
- **Mensagem:** "Enxoval sem gastar mais do que precisa — e sem esquecer nada." Menção ao simulador Brasil×EUA como gancho para a persona de brasileiros no exterior.
- **Layout:** split screen — de um lado a lista inteligente com progresso, do outro o simulador de comparação de preço.
- **Elementos visuais:** screenshot real do dashboard de Enxoval e do simulador.
- **Componentes:** headline, 2 sub-blocos (lista inteligente / simulador Brasil×EUA), CTA terciário para Lista de Presentes pública.
- **Copy:** mencionar explicitamente "Lista de Presentes compartilhável — quem for presentear não precisa nem criar conta" (diferencial real e pouco comum).
- **CTA:** "Monte seu enxoval" (leva ao cadastro) ou, se aplicável, link direto explicando a Lista de Presentes pública.
- **Emoção:** alívio financeiro + praticidade.
- **Métrica alvo:** cliques específicos nesta seção (separar do CTA genérico do Hero para medir força do argumento de Enxoval isoladamente).

### 6.8 Pais Sincronizados

- **Objetivo:** reforçar o diferencial de vínculo em casal, principal gatilho de retenção segundo os fluxos reais do produto.
- **Mensagem:** mantida da versão atual, com pequeno ajuste de prova ("qualquer atualização aparece instantaneamente para os dois" já é forte).
- **Layout:** mantido (2 colunas em desktop), com melhoria: substituir avatares emoji por ilustração customizada de dois perfis conectados.
- **Componentes:** headline, 4 badges (Tempo real / Qualquer celular / Privado e seguro / Um link para convidar), visual de conexão.
- **CTA:** nenhum direto (seção de reforço emocional).
- **Emoção:** conexão / alívio de não estar sozinha no processo.
- **Métrica alvo:** nenhuma direta; contribui para redução de objeção antes do CTA final.

### 6.9 Prova Social

- **Objetivo:** neutralizar a maior fraqueza atual da landing (zero prova social real).
- **Mensagem:** depoimentos reais de usuários (a coletar via NPS/pesquisa pós-uso) e, quando disponível, número real de famílias ativas ou de jornadas criadas.
- **Layout:** carrossel ou grid de 3 depoimentos com nome, situação (ex.: "gêmeos", "primeira gravidez"), e foto/avatar (com consentimento).
- **Componentes:** headline, cards de depoimento, opcionalmente contador dinâmico se houver número real e atualizado (nunca inventar número).
- **Copy:** **restrição importante** — não incluir nenhuma prova social fabricada ou estimada. Enquanto não houver depoimentos reais coletados, esta seção deve ser reduzida a uma versão honesta (ex.: destaque de segurança técnica real: "Dados protegidos com criptografia via Supabase", que é verificável) até que prova social real exista.
- **Emoção:** confiança social.
- **Métrica alvo:** correlação entre exposição a esta seção e conversão final (via scroll tracking).

### 6.10 FAQ (reorganizado por objeção, não por feature)

- **Objetivo:** remover objeções finais antes do CTA.
- **Mudança estrutural:** agrupar perguntas por tipo de objeção (Confiança e segurança / Custo / Esforço de uso / Compatibilidade técnica) em vez de lista solta.
- **Mudança de conteúdo crítica:** **remover ou reformular a menção a "plano premium"** do FAQ atual. Segundo `FEATURE_MATRIX.md`, não há gating premium implementado — hoje tudo está liberado para usuários autenticados. Prometer "recursos avançados em um plano premium" sem que isso exista é uma promessa que pode gerar frustração ou parecer isca. Recomenda-se responder de forma verdadeira: "O Baby's Plan é gratuito para todas as funcionalidades hoje" (a ajustar quando/se o gating for implementado).
- **Também evitar**, conforme `TECH_DEBT.md`: prometer notificações por e-mail/push (não funcionam hoje), exclusão de conta "a qualquer momento" (processo manual de 30 dias), geração de PDF (não existe, só CSV), papel "somente leitura" para avós/convidados (não está na UI).
- **CTA:** ao final do FAQ, CTA terciário reforçando o CTA final da página.
- **Emoção:** segurança / decisão facilitada.
- **Métrica alvo:** taxa de expansão de perguntas (indicador de quais objeções são mais fortes na prática).

### 6.11 CTA Final

- **Objetivo:** converter com a menor fricção percebida possível.
- **Mensagem:** "Comece sua jornada hoje." + microcopy de baixo risco: "Grátis para começar. Sem cartão de crédito. Menos de 2 minutos."
- **Layout:** mantido (banner de destaque com gradiente), mas microcopy atualizado para refletir garantias reais e verificáveis.
- **Componentes:** headline, subheadline, CTA único e destacado (evitar diluir com CTA secundário aqui — é o momento de decisão, não de exploração).
- **Emoção:** convicção final.
- **Métrica alvo:** taxa de conversão desta seção especificamente (scroll-to-CTA).

---

## 7. Estratégia visual

### 7.1 Direção

Evolução, não reinvenção. A paleta atual (teal/coral/violeta) é jovem, calorosa e diferenciada de concorrentes (que tendem a azul/rosa clichê de "menino/menina"). Deve ser mantida como base, mas **complementada com um sistema de ilustração customizado** que substitua o uso de emoji nativo — hoje o maior rebaixador de percepção de qualidade.

### 7.2 Paleta (mantida, com adições)

- Primária: `--teal #4FB6AC`, `--teal-dark #3D9E95`
- Secundária: `--coral #F28C82`, `--coral-dark #E0726A`
- Destaque/IA: `--violet #7C3AED`, `--violet-mid #8B5CF6` — recomenda-se **reservar o roxo/violeta especificamente para a seção de IA**, criando uma associação visual consistente ("roxo = inteligência") em toda a página.
- Neutros mantidos: `--bg #FAFAF8`, `--text #243447`, `--text-muted #6B7280`.
- **Correção obrigatória:** unificar `theme-color` do manifest (`#0D9488`) com `--teal` (`#4FB6AC`) ou definir deliberadamente por que diferem.

### 7.3 Ilustrações

Substituir emojis por um set de ilustrações/ícones de linha customizados, em 2 níveis:
- **Ícones de linha simples** (24-32px) para steps, badges, categorias — consistentes em peso de traço (2px) e cantos arredondados, alinhados à identidade "amigável mas profissional".
- **Ilustrações de cena** (maiores, para Hero e seção de Personalização) — estilo flat/organic, evitando o clichê de ilustração de gravidez genérica (barriga isolada) em favor de cenas de jornada/caminho/conexão, alinhadas à narrativa de "guia".

### 7.4 Fotos vs. mockups

- **Manter mockups de produto real** (screenshots verdadeiros) como prova central — nunca placeholders com emoji como os da seção "Interface" atual.
- Fotos de pessoas reais (para depoimentos) só quando houver consentimento real de usuários — não usar banco de imagens genérico fingindo ser depoimento (risco de credibilidade e ético).

### 7.5 Glassmorphism e gradientes

Manter o uso já presente (navbar com blur, gradiente teal→coral no Hero, gradiente roxo→pink na seção escura) mas **restringir gradientes fortes a no máximo 2 seções** da página inteira, para não perder o efeito de destaque por excesso.

### 7.6 Tipografia

Manter Inter (corpo) + Manrope (marca). Considerar uso de Manrope também nos H1/H2 de seções-chave (Hero, Personalização) para reforçar hierarquia de "momentos importantes" vs. texto corrido.

### 7.7 Motion

Princípios: nenhuma animação em loop infinito; toda animação de entrada dispara uma vez por scroll-into-view; respeitar `prefers-reduced-motion: reduce` (ausente na versão atual — deve ser adicionado; ver seção 11).

---

## 8. Estratégia Mobile First

- **Prioridade de conteúdo no mobile:** Hero (headline + 1 CTA visível sem scroll) → prova visual → Personalização → Como Funciona. Seções de aprofundamento (Enxoval, Plataforma Completa) podem usar acordeões para reduzir scroll percebido.
- **CTA fixo:** considerar um CTA sticky no rodapé da viewport mobile (barra fina, não intrusiva) após o Hero, já que a página é longa e o CTA do Hero sai de vista rapidamente — esta é uma prática de conversão consolidada, ausente hoje.
- **Gestos:** carrossel de depoimentos com swipe nativo (não apenas setas); acordeões com tap-to-expand no mapa da Plataforma Completa.
- **Adaptações por seção:** grid de personalização (4 badges de jornada) vira scroll horizontal no mobile em vez de empilhar verticalmente, para caber mais contexto por área visível.
- **Peso de página:** ilustrações customizadas devem ser SVG (não PNG pesado) para manter o tempo de carregamento atual, que é um ponto forte a preservar.

---

## 9. Estratégia de conversão

### 9.1 Distribuição de CTAs

- Hero: CTA primário (conversão) + CTA secundário (exploração, âncora).
- Personalização: sem CTA de conversão direta — CTA de "descoberta" (clicar em badge de jornada).
- Guia de IA: CTA terciário opcional ("Conheça o Guia").
- Enxoval: CTA terciário específico (mensurável separadamente).
- CTA Final: único CTA de conversão, sem concorrência visual.

Isso substitui o padrão atual de 6 CTAs idênticos e não segmentados por um funil com CTAs de intenção crescente, permitindo medir em qual argumento o usuário se convence.

### 9.2 Microcopy de redução de atrito

Adicionar perto de todo CTA de conversão: "Grátis para começar · Sem cartão de crédito · Menos de 2 minutos" — todas verificáveis pelo estado real do produto (sem gating premium hoje).

### 9.3 Prova social

Ver seção 6.9 — priorizar coleta real de depoimentos antes do lançamento da V2; não fabricar números.

### 9.4 Urgência

**Não recomendado** o uso de urgência artificial (contadores regressivos, "vagas limitadas") — é uma categoria (saúde/gravidez) onde urgência fabricada quebra confiança e pode ser percebida como manipulação em um momento emocionalmente sensível. Usar, em vez disso, urgência genuína e suave: "Cada semana da sua gestação traz algo novo — comece a acompanhar a sua agora."

### 9.5 Confiança

- Disclaimer médico visível na seção de IA (ver 6.5) paradoxalmente aumenta confiança.
- Menção específica à tecnologia (Supabase, criptografia) já presente hoje e deve ser mantida — é prova técnica real e verificável.
- Evitar qualquer claim não verificável (ver lista de restrições da seção 6.10).

---

## 10. SEO

### 10.1 Arquitetura semântica

- Usar hierarquia de heading correta: um único `<h1>` (Hero), `<h2>` por seção principal, `<h3>` para sub-itens — auditoria não identificou erro grave aqui, manter disciplina na V2.
- Adicionar marcação semântica `<section>` com `aria-labelledby` para cada bloco (reforça tanto SEO quanto acessibilidade).

### 10.2 Schema.org

- Manter `WebApplication`, mas **corrigir `offers.price: 0`** apenas se e quando o gating premium for implementado — hoje o valor está correto (produto é gratuito de fato).
- Adicionar `FAQPage` schema para a seção de FAQ reorganizada (rich snippet no Google, ganho real de CTR orgânico).
- Considerar `AggregateRating` **somente** quando houver avaliações reais agregadas (loja de apps ou pesquisa própria) — nunca simular.

### 10.3 Meta

- Corrigir/gerar `og-image.png` ausente (bloqueador atual de preview em redes sociais — item técnico simples e de alto impacto).
- Atualizar `meta description` para refletir a nova proposta de valor (personalização + IA), respeitando 150-160 caracteres.

### 10.4 Keywords (planejamento, não stuffing)

Termos-alvo por persona: "app acompanhamento gravidez personalizado", "app gravidez gêmeos", "app gravidez alto risco", "enxoval bebê comparar preço Brasil EUA", "app gravidez com inteligência artificial". Usar naturalmente nos H2/copy das seções correspondentes (Personalização, Enxoval), nunca forçado.

### 10.5 Open Graph

Já implementado corretamente em estrutura; falta apenas o asset de imagem (ver 10.3) e atualização de título/descrição para a nova proposta de valor.

### 10.6 URLs

Página única (`/`) é adequada para uma landing deste porte; não há necessidade de sub-rotas SEO adicionais nesta fase. Manter `privacy.html`/`terms.html` como estão.

---

## 11. Acessibilidade

### 11.1 WCAG

- Auditar contraste de texto sobre gradientes (especialmente badges translúcidos `rgba(255,255,255,.07)` na seção escura atual — risco real de contraste insuficiente, deve ser validado com ferramenta de contraste na implementação).
- Garantir contraste mínimo AA (4.5:1) para todo texto de corpo; AAA quando possível para textos de disclaimer médico (informação crítica).

### 11.2 ARIA

- Manter e expandir o padrão já presente (`aria-expanded` no mobile menu atual é um bom precedente).
- Acordeões do FAQ e da seção "Plataforma Completa" (mobile) devem usar `aria-expanded`/`aria-controls` consistentemente.
- Ilustrações decorativas: `aria-hidden="true"`; ilustrações informativas: `alt` descritivo real (não genérico).

### 11.3 Navegação por teclado

- Garantir `:focus-visible` estilizado em todos os CTAs e links do FAQ (não auditado no CSS atual — deve ser verificado/adicionado na implementação).
- Ordem de tab lógica, especialmente no carrossel de depoimentos e no mockup de chat interativo da seção de IA.

### 11.4 Redução de movimento

- Adicionar bloco `@media (prefers-reduced-motion: reduce)` desativando todas as animações de entrada e a simulação de "digitação" do chat — ausente na implementação atual e obrigatório para WCAG 2.1 (critério 2.3.3).

---

## 12. Plano técnico

### 12.1 Componentes a criar

- Sistema de ícones de linha (SVG sprite ou componentes individuais) substituindo emojis.
- Ilustração de "caminhos de jornada" (seção Personalização).
- Mockup de chat interativo (seção Guia de IA) — pode ser HTML/CSS estático com uma animação de entrada única (não precisa ser funcional/real).
- Componente de acordeão reutilizável (FAQ + Plataforma Completa mobile).
- Componente de carrossel de depoimentos (com fallback de grid estático se não houver JS).
- CTA sticky mobile.

### 12.2 O que pode ser reaproveitado

- Toda a estrutura de design tokens CSS (`:root` custom properties) — base sólida, só precisa de extensão (tokens de motion, tokens de z-index para sticky CTA).
- Navbar e mobile menu (glassmorphism, JS de abrir/fechar) — funcionais, mantidos.
- Seção "Como Funciona" (copy e layout já eficazes).
- Seção "Pais Sincronizados" (estrutura mantida, só troca de asset visual).
- Breakpoints e grid system mobile-first.

### 12.3 Nova organização de arquivos (proposta, não implementada nesta fase)

```
babysplan-landing/
  index.html
  css/
    tokens.css        (novo — variáveis extraídas de style.css)
    style.css
    components/       (novo — estilos por seção, se o CSS crescer muito)
  js/
    main.js           (novo — extrair JS inline do index.html se houver)
    accordion.js
    carousel.js
  images/
    illustrations/    (novo — SVGs customizados)
    screenshots/       (screenshots reais do produto, versionados)
  icons/
```

### 12.4 Performance

- Manter site estático sem framework — é o maior ativo de performance atual, não introduzir build complexo desnecessário.
- SVGs inline ou sprite para ícones (evita requisições extras).
- `loading="lazy"` em todas as imagens abaixo do fold (screenshots de Enxoval, depoimentos).
- Comprimir/gerar `og-image.png` em formato otimizado (WebP com fallback PNG).
- Code splitting não se aplica (sem JS framework) — mas separar JS por funcionalidade (accordion, carousel) em arquivos pequenos carregados via `defer`.

---

## 13. Roadmap de implementação (para a próxima CR)

| Etapa | Escopo | Depende de | Risco |
|---|---|---|---|
| 1 | Correções técnicas base: `og-image.png`, `theme-color`, correção do bug de copy "Sono" | Nenhuma | Baixo — pode ser feito imediatamente, independente do resto |
| 2 | Novo copy e headline (Hero, Problema, Personalização, FAQ reorganizado) | Aprovação da proposta de valor (seção 3) | Médio — depende de decisão de negócio sobre qual headline testar |
| 3 | Sistema de ilustração (ícones de linha + ilustração de jornada) | Etapa 2 (para saber quais conceitos ilustrar) | Médio — é o maior investimento de design novo |
| 4 | Screenshots reais atualizados do produto | Acesso a builds atuais do `baby-journey-app` para captura | Baixo, mas depende de disponibilidade de ambiente para captura |
| 5 | Seção Guia de IA com mockup de chat | Etapas 2 e 3 | Baixo |
| 6 | Seção Enxoval dedicada | Etapas 2, 3, 4 | Baixo |
| 7 | Prova social real | **Coleta de depoimentos reais de usuários** — pode não estar disponível ainda | **Alto** — é a etapa mais dependente de algo fora do controle da equipe de landing; pode ser adiada sem bloquear lançamento (usar fallback honesto da seção 6.9) |
| 8 | Acessibilidade e redução de movimento | Todas as etapas visuais anteriores | Baixo, mas deve ser feito antes do lançamento, não depois |
| 9 | SEO (FAQPage schema, meta atualizada) | Etapa 2 | Baixo |
| 10 | QA mobile-first, cross-browser, performance | Todas anteriores | Médio |

**Risco transversal mais importante:** a etapa 7 (prova social real) é a única que depende de algo fora do controle técnico direto (usuários reais dando depoimento). Recomenda-se **não bloquear o lançamento da V2 nela** — lançar com a versão honesta (seção 6.9) e substituir assim que houver dados reais, tratando isso como uma iteração incremental pós-lançamento, não um gate.

---

## 14. Checklist de validação (homologação)

### UX
- [ ] Arco narrativo (seção 4) testado com pelo menos 3 usuários reais em teste de compreensão (conseguem explicar o produto após ler a página?)
- [ ] Nenhum termo técnico de banco de dados vazado na copy (ex.: `ivf_pregnancy`)
- [ ] Bug de copy do card "Sono" corrigido e verificado

### Performance
- [ ] Lighthouse mobile ≥ 90 em Performance
- [ ] Nenhuma imagem sem `loading="lazy"` abaixo do fold
- [ ] Peso total da página não deve regredir em relação à versão atual (baseline a medir antes da implementação)

### SEO
- [ ] `og-image.png` presente e válido (testar preview real no Facebook Debugger / Twitter Card Validator)
- [ ] `FAQPage` schema validado no Rich Results Test do Google
- [ ] Meta description atualizada e dentro do limite de caracteres

### Responsividade
- [ ] Testado nos 3 breakpoints existentes (640/768/1024) + um dispositivo real de tela pequena (< 375px)
- [ ] CTA sticky mobile não sobrepõe conteúdo nem outros elementos fixos
- [ ] Acordeões funcionam via touch e teclado

### Conversão
- [ ] Nenhuma promessa não verificável no ar (checar contra a lista da seção 6.10 e `TECH_DEBT.md`)
- [ ] CTAs segmentados por seção com tracking (UTM ou evento) implementado para medir força de cada argumento
- [ ] Microcopy de baixo atrito presente em todo CTA de conversão

### Acessibilidade
- [ ] Contraste AA validado em todos os textos, especialmente sobre gradientes/seção escura
- [ ] `prefers-reduced-motion` implementado e testado
- [ ] Navegação 100% por teclado testada manualmente (tab order, focus visible)

---

## Notas finais para a próxima CR (implementação)

1. Esta CR **não implementa nada** — nenhum arquivo de produção foi alterado.
2. A próxima CR deve tratar a **etapa 1 do roadmap** (correções técnicas) como possível quick-win independente, se o time quiser um ganho rápido antes do redesenho completo.
3. Qualquer claim de copy sobre features deve ser verificado contra `baby-journey-app/docs/TECH_DEBT.md` e `FEATURE_MATRIX.md` antes de ir ao ar, já que ambos documentam explicitamente o que está implementado vs. planejado vs. dormente.
