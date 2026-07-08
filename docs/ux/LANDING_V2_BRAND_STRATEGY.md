# Landing Page V2 — Brand Strategy, Storytelling e Conceito Proprietário

**CR-001.1 · Refinamento Estratégico (sem implementação)**
**Status:** Documento de estratégia de marca para aprovação. Nenhum arquivo de produção foi alterado. Nenhum componente foi implementado.
**Relação com a CR-001:** Este documento **complementa** `LANDING_V2_ARCHITECTURE.md`. Não substitui a arquitetura, o storytelling seccional, as personas, o SEO ou o roadmap já aprovados conceitualmente ali — eleva o *pensamento de marca* que informa como aquela arquitetura deve ser preenchida. Onde há conflito aparente entre os dois documentos, este documento vence em decisões de posicionamento/narrativa; a CR-001 permanece autoridade em UX tático, acessibilidade, SEO técnico e sequenciamento de implementação.

---

## Pergunta que este documento responde

**Por que alguém vai lembrar do Baby's Plan daqui a cinco anos?**

Se a resposta que a Landing hoje sugere é "porque tem muitas funcionalidades", falhamos. A resposta que este documento constrói é:

> **Porque foi o primeiro produto que tratou a gravidez de alguém como a jornada única que ela é — não como uma lista de tarefas — e colocou um copiloto ao lado dela para provar isso a cada semana.**

Tudo abaixo existe para tornar essa frase verdadeira na Landing, não apenas verdadeira no pitch.

---

## 1. Auditoria crítica da CR-001 — onde ainda existe pensamento de "feature list"

A CR-001 é um trabalho de UX e conversão excelente. Mas UX excelente pode, sem querer, organizar muito bem uma lista de recursos — o que é diferente de comunicar uma ideia única. Auditoria seção a seção:

### 1.1 A arquitetura ainda é uma sequência de módulos, só que mais bonita

A seção 5 da CR-001 (`Hero → Problema → Solução → Como Funciona → Guia de IA → Plataforma Completa → Enxoval → Pais Sincronizados → Prova Social → FAQ → CTA`) resolve o problema de hierarquia (bom), mas continua sendo, estruturalmente, **um módulo do produto por seção**. Trocar 12 cards por 8 seções não é trocar "lista de features" por "narrativa" — é uma lista de features mais bem paginada. Uma narrativa de verdade não pode ser mapeada 1:1 para "aqui está o Enxoval, aqui está a IA, aqui está a sincronização" — precisa ser mapeada para **estados emocionais de uma gestação real**, com os módulos aparecendo como *evidência dentro* de cada capítulo, não como o capítulo em si. Ver Etapa 4 abaixo para a correção proposta.

### 1.2 "Jornada" é usada como palavra, não como mecanismo com nome próprio

A CR-001 identifica corretamente a Jornada como "conceito arquitetural unificador" (seção 1.1) e a usa dezenas de vezes no documento — mas sempre como substantivo comum, nunca como um **conceito de marca nomeado e defensável**. Isso é a diferença entre dizer "nosso produto tem inteligência artificial" (qualquer concorrente também diz) e dizer "temos o Face ID" (ninguém mais tem). Sem um nome próprio para o mecanismo de personalização, a Jornada é uma palavra bonita que qualquer concorrente pode copiar amanhã. Ver Etapa 3.

### 1.3 A headline recomendada (Opção A) ainda vende benefício, não visão de mundo

> "Sua gravidez não é igual a nenhuma outra. Seu acompanhamento também não deveria ser."

É uma boa headline de conversão — resolve a objeção de Marina e Camila com precisão cirúrgica. Mas é uma headline que **qualquer app de personalização em qualquer categoria poderia usar** (troque "gravidez" por "treino", "investimento" ou "dieta" e a frase continua funcionando). Uma headline de marca memorável precisa ser impossível de usar fora da categoria que ela mesma cria. Ver Etapa 6.

### 1.4 A seção "Guia de IA" trata IA como recurso, não como personagem

A CR-001 (6.5) propõe mostrar os "4 modos" da IA como abas/ícones — Conversar, Explicar, Resumir, Observar. Isso é documentação de produto, não construção de marca. A Alexa não vende "modos de voz"; a Siri não vende "reconhecimento de fala". Produtos com IA memorável dão à IA uma **relação**, não uma lista de capacidades. Ver Etapas 6 e 7 (Brand Voice) para como a IA deveria se apresentar.

### 1.5 A seção "Enxoval" comunica economia, não o verdadeiro insight comportamental

A CR-001 posiciona o Enxoval em torno de "economia real de dinheiro" (6.7). É verdadeiro e funcional, mas subestima o insight mais forte: o motor de 11 regras + comparador Brasil×EUA existe porque **decidir o que comprar, quando comprar e quanto gastar é uma das maiores fontes de ansiedade decisória da gestação** — não porque as pessoas querem economizar per se. "Economia" é a features; "alívio da paralisia de decisão" é a marca.

### 1.6 Nenhuma seção da CR-001 propõe um momento de "parar o scroll"

O documento é rigoroso em UX, conversão e acessibilidade, mas não propõe nenhum elemento *inesquecível* — nada que alguém tire print e mande para uma amiga grávida. Toda a arquitetura é "correta"; nenhuma parte dela é *surpreendente*. Ver Etapa 5.

### 1.7 A CR-001 é neutra sobre arquétipo de marca

O documento define tom via exemplos pontuais de copy ("evitar termos técnicos", "não fabricar prova social"), mas não define uma personalidade coesa que amarre esses exemplos a um princípio único. Sem arquétipo, cada redator futuro (humano ou IA) vai preencher o vazio com a própria intuição, e a voz vai divergir com o tempo. Ver Etapa 7.

### 1.8 Conclusão da auditoria

A CR-001 resolve **100% dos problemas de UX, hierarquia e conversão**. Resolve **0% do problema de categoria**. Ela torna o Baby's Plan o melhor app de gravidez organizado da categoria atual — não cria uma categoria nova. É exatamente o gap que esta CR-001.1 fecha.

---

## 2. Reposicionamento — qual é a categoria?

### 2.1 Testando as categorias óbvias (e por que cada uma falha)

| Categoria candidata | Por que parece certa | Por que falha como posicionamento primário |
|---|---|---|
| **Aplicativo** | É tecnicamente o que é | Categoria saturada, zero diferenciação, sinaliza "lista de telas" |
| **Plataforma** | Comunica amplitude (33 módulos) | Termo B2B/frio, não convoca emoção nenhuma em um momento tão humano |
| **Diário** | Tem registro de marcos, memórias | Sub-representa o produto — reduz um motor de decisão a um caderno passivo |
| **Guia** | Comunica orientação, é acolhedor | Guia é estático (um livro é um guia); o produto muda a cada resposta do usuário — é dinâmico, não um guia impresso |
| **GPS da gravidez** | Metáfora forte, imediatamente compreensível | GPS é *reativo* (só recalcula quando você erra) e é *neutro* (não tem relação, não conhece sua história) — a analogia trai o produto real, que é proativo e acumula contexto |
| **Sistema operacional** | Comunica "camada que organiza tudo por baixo" corretamente | É uma metáfora *para investidores/imprensa técnica*, não para uma gestante às 23h com medo. É fria demais para o momento de decisão emocional |
| **Assistente** | Comunica proatividade e IA | "Assistente" é subserviente — obedece comandos. O produto às vezes fala primeiro (Observadora proativa), o que é o oposto de um assistente passivo |

### 2.2 A categoria correta: **Copiloto de Jornada**

Nenhuma categoria pronta serve porque o Baby's Plan não é a soma das partes de nenhuma delas — ele pega o melhor de duas: a **proatividade e o conhecimento contextual de um copiloto** (existe, tem uma relação contínua com você, conhece sua condição, fala quando percebe algo relevante, mas não pilota por você) somado ao **conceito de trajeto único de um GPS** (cada gestação é uma rota diferente, com pontos de decisão próprios).

**Definição de categoria a adotar:**

> Baby's Plan não é um app de gravidez. É um **copiloto de jornada** — a primeira categoria de produto que entende que cada gestação é uma rota única e viaja ao lado da pessoa, semana após semana, em vez de entregar o mesmo mapa genérico para todo mundo.

Isso é defensável tecnicamente (seleção automática de template por condição clínica = a rota é calculada, não fixa; Guia de IA com modo "Observadora proativa" = o copiloto fala quando necessário, não só quando perguntado) e é uma frase que **nenhum concorrente de checklist genérico pode dizer sobre si mesmo sem mentir**, porque nenhum concorrente tem o mecanismo por trás da frase.

### 2.3 O que essa categoria implica para a Landing (não implementar agora — só direcionar decisões futuras)

- O produto deve ser mostrado *em movimento* (a jornada mudando, se adaptando), nunca em uma tela estática de dashboard.
- A palavra "copiloto" (ou sua tradução emocional, não necessariamente literal na copy) deve aparecer perto da primeira menção de IA — é a palavra que resume a categoria em uma leitura.
- Toda comunicação futura de features deve responder "isso é rota, ou é mapa?" — funcionalidades que ajudam a decidir o próximo passo são rota (Jornada, Guia de IA, Enxoval); funcionalidades que apenas registram são mapa (Memórias, Fotos). Ambas importam, mas a categoria vive na rota.

---

## 3. Conceito proprietário

### 3.1 Por que isso importa

Um conceito proprietário faz três coisas que um substantivo comum não faz: (1) é citável — jornalistas, usuários e a própria equipe repetem o termo exato; (2) é defensável — comunica um mecanismo específico, não uma categoria genérica que qualquer um reivindica; (3) sobrevive a redesigns — a Landing muda de layout a cada 2 anos, mas "Face ID" continua sendo "Face ID" desde 2017.

### 3.2 Quinze candidatos avaliados

| # | Nome | Explicação | Vantagem central | Potencial de branding | Potencial internacional | Clareza imediata | Escalabilidade |
|---|---|---|---|---|---|---|---|
| 1 | **Motor da Jornada** | O mecanismo que lê a condição/contexto da usuária e recalcula o caminho da gestação | Nomeia o mecanismo real (seleção automática de template) com precisão | Alto — "motor" é tecnicamente honesto e forte | Médio (`Journey Engine` traduz bem) | Alta | Alta — cabe qualquer feature futura de personalização |
| 2 | **Jornada Viva** | A jornada como algo que respira e muda junto com a usuária, não um checklist estático | Emocionalmente quente, fácil de repetir | Alto | Médio (`Living Journey`) | Alta | Média — mais um conceito de campanha que de mecanismo |
| 3 | **GPS da Gestação** | Metáfora de trajeto recalculado | Instantaneamente compreensível | Médio — já usado por concorrentes de forma solta | Alto | Muito alta | Baixa — a metáfora de GPS implica passividade (só recalcula ao errar), contradiz o produto |
| 4 | **Mapa da Gestação** | Visão de todos os caminhos possíveis | Bom para visualização (ilustração de caminhos da seção 6.3 da CR-001) | Médio | Alto | Alta | Baixa — mapa é estático, o produto é dinâmico |
| 5 | **Método Baby's Plan** | Um "método" proprietário, como consultorias/programas fazem | Comunica autoridade e processo estruturado | Médio-alto | Médio (soa a "curso", não a produto de tecnologia) | Média | Alta, mas dilui a marca com conotação de infoproduto |
| 6 | **Companion Engine** | Motor que acompanha (em inglês, soa a categoria tech) | Soa a plataforma séria/B2B | Médio | Alto | Baixa para público brasileiro geral | Alta |
| 7 | **Life Journey Engine** | Escala o conceito além de gravidez para o ciclo de vida familiar completo | Visão de expansão de produto (pós-parto, ciclo de vida do filho) | Alto para futuro, prematuro para hoje | Alto | Baixa hoje (inglês, abstrato) | Muito alta — mas alto demais para o momento atual da marca |
| 8 | **Pregnancy OS** | Camada que organiza tudo por baixo | Forte para imprensa/tech, correto tecnicamente | Alto para B2B/investidor | Alto | Baixa para usuária final | Alta |
| 9 | **Life Companion** | Nome de produto amplo, tom emocional | Warm, fácil de internacionalizar | Médio | Alto | Média — genérico, sem gancho de mecanismo | Alta |
| 10 | **Rota da Jornada** | Reforça trajeto individual dentro do produto | Reaproveita a ilustração de caminhos já prevista na CR-001 (6.3) | Médio | Baixo (tradução perde força) | Alta | Média |
| 11 | **Guia Vivo** | O guia de IA como entidade contínua, não estático | Boa ponte entre "guia" (familiar) e "vivo" (diferenciação) | Médio | Baixo | Alta | Média |
| 12 | **Copiloto de Jornada** | Nome da categoria (seção 2) usado como conceito de produto também | Unifica categoria + mecanismo em um só termo | Alto | Alto (`Journey Copilot` é internacionalmente compreensível hoje, pós-Copilot da Microsoft) | Muito alta | Alta |
| 13 | **Timeline Viva** | Nome para a visualização temporal da jornada (semana a semana) | Bom nome de *feature*, fraco como conceito de marca inteiro | Baixo (nome de componente, não de marca) | Médio | Alta | Baixa — específico demais |
| 14 | **Radar da Jornada** | Referência ao modo "Observadora proativa" da IA — o produto "detecta" o que precisa de atenção | Nomeia especificamente o diferencial de proatividade da IA | Médio-alto | Alto (`Radar` já é termo internacional consagrado, ver Stripe Radar) | Alta | Média — bom como sub-conceito, não como guarda-chuva |
| 15 | **Family Sync** | Nome para o mecanismo de sincronização em casal | Nomeia bem um mecanismo real e específico | Médio | Alto | Alta | Baixa — cobre só uma parte do produto (sincronização), não a jornada inteira |

### 3.3 Decisão: conceito vencedor

**Vencedor como guarda-chuva de categoria + mecanismo: `Motor da Jornada`, com `Copiloto de Jornada` como nome de categoria pública.**

Justificativa da escolha dupla (não é indecisão — é hierarquia de conceitos, como toda marca grande tem):

- **`Copiloto de Jornada`** é a **categoria** — a frase que aparece no posicionamento, na bio de redes sociais, na primeira linha da Landing, na imprensa. É a resposta a "o que é o Baby's Plan" em uma frase.
- **`Motor da Jornada`** é o **mecanismo proprietário por trás da categoria** — a peça técnica que a usuária aprende a citar depois de usar o produto ("o motor da jornada já sabia que eu tinha gêmeos e ajustou tudo"). É equivalente a como a Apple tem a categoria "smartphone com biometria facial" e o mecanismo nomeado "Face ID" dentro dela.
- Os dois nomes trabalham juntos: a Landing apresenta a categoria no Hero (compreensão imediata) e revela o mecanismo na seção de Personalização (prova de que a categoria é real, não só copy). Isso resolve exatamente o problema identificado na Etapa 1.2 — "Jornada" deixa de ser uma palavra solta e passa a ter um mecanismo nomeado por trás dela.

**Sub-conceito reservado para uso futuro (não implementar agora):** `Radar da Jornada` (#14) é o nome natural para quando o modo "Observadora proativa" da IA for destacado como feature própria — guardar para uma fase de marca mais madura, quando o produto já tiver esse recall associado a "Motor da Jornada" primeiro. Introduzir os dois ao mesmo tempo dilui.

**Descartados e por quê, resumidamente:** GPS/Mapa (implicam passividade, contradizem o produto), Pregnancy OS/Companion Engine (fortes para B2B, frios demais para o momento emocional do usuário final), Método Baby's Plan (puxa para tom de infoproduto), Life Journey Engine/Life Companion (corretos para uma visão de 5+ anos de expansão de categoria, mas prematuros — guardar como visão de marca de longo prazo, não lançar agora).

---

## 4. Narrativa cinematográfica — capítulos, não módulos

### 4.1 Princípio de correção sobre a CR-001

A CR-001 já define um excelente mapa de "pergunta mental → emoção → seção" (seção 4.1 daquele documento). O que falta é reagrupar essas perguntas em **capítulos de uma história vivida**, não em uma sequência de blocos de produto. A diferença prática: hoje a seção "Guia de IA" existe porque o produto tem uma feature de IA. Na narrativa correta, o capítulo "Alguém que sabe o que eu não sei" existe porque é um momento emocional universal da gestação — e o Guia de IA é a *evidência* daquele capítulo, não o motivo dele existir.

### 4.2 Os capítulos

**Capítulo 1 — "Duas linhas mudaram tudo"** *(Hero)*
- Emoção despertada: choque + euforia + o início de uma sobrecarga silenciosa ("agora o que eu faço?").
- Pergunta mental respondida: "Isso entende o que eu estou vivendo agora mesmo?"
- Transformação na seção: de "sozinha com um resultado de teste" para "existe algo que vai comigo a partir daqui".
- Expectativa criada para o próximo capítulo: se existe algo que "vai comigo", por que os apps que já testei nunca pareceram assim?

**Capítulo 2 — "Toda gravidez que eu já vi tratou a minha como igual às outras"** *(Problema)*
- Emoção: frustração reconhecida — o alívio de ouvir alguém nomear a própria frustração.
- Pergunta mental: "Por que isso nunca funcionou pra mim antes?"
- Transformação: de "achava que o problema era eu não conseguir me organizar" para "o problema era o produto ser genérico, não eu".
- Expectativa criada: então o que muda quando o produto *não* é genérico?

**Capítulo 3 — "Ele calculou a minha rota, não me deu o mapa de todo mundo"** *(Solução / Motor da Jornada)*
- Emoção: esperança concreta — a primeira vez na página em que a usuária sente "isso pode ser diferente de verdade".
- Pergunta mental: "Como isso considera o meu caso específico (gêmeos, FIV, alto risco, primeira vez)?"
- Transformação: de cética para curiosa o suficiente para continuar lendo em vez de fechar a aba.
- Expectativa criada: ok, ele sabe quem eu sou — mas eu vou conseguir usar isso sem virar mais uma tarefa da minha vida?

**Capítulo 4 — "Levou dois minutos, não duas horas"** *(Como Funciona)*
- Emoção: alívio operacional — a ansiedade de "mais uma coisa pra configurar" é neutralizada.
- Pergunta mental: "Isso vai dar trabalho?"
- Transformação: de "preciso de energia que não tenho" para "consigo fazer isso agora, no celular, em duas paradas de ônibus".
- Expectativa: e depois que eu configurar, o que realmente acontece comigo, semana a semana?

**Capítulo 5 — "Alguém que sabe o que eu não sei, sem me fazer sentir burra por perguntar"** *(Guia de IA / Motor da Jornada em ação)*
- Emoção: segurança íntima — o momento mais pessoal da página, onde a usuária se imagina perguntando algo que tem vergonha de perguntar em voz alta.
- Pergunta mental: "Isso realmente entende minhas dúvidas, ou é só um chatbot genérico com nome bonito?"
- Transformação: de "preciso pesquisar no Google e não confiar no primeiro resultado" para "tenho uma resposta contextual, com o cuidado de indicar quando é hora de falar com meu médico".
- Expectativa: certo, ele resolve minhas dúvidas — mas dá conta de toda a complexidade prática (compras, prazos, decisões) também?

**Capítulo 6 — "Ele sabe o que eu preciso comprar antes de eu saber que preciso"** *(Enxoval / Motor de recomendação)*
- Emoção: alívio da paralisia de decisão (ver Etapa 1.5) — não é sobre dinheiro, é sobre não ter que decidir sozinha o que é essencial.
- Pergunta mental: "Vou gastar certo, no momento certo, sem esquecer nada importante?"
- Transformação: de "lista infinita e genérica de enxoval" para "uma lista que sabe onde eu moro e o que já tenho".
- Expectativa: e o resto da minha vida durante a gestação — meu parceiro, minha rotina, minhas memórias — também está coberto?

**Capítulo 7 — "Meu parceiro finalmente sabe o que eu sei, no mesmo segundo"** *(Pais Sincronizados)*
- Emoção: conexão — o momento em que a solidão implícita dos capítulos 1-2 é definitivamente resolvida.
- Pergunta mental: "Vou parar de ser a única gerenciando isso tudo?"
- Transformação: de "eu carrego, ele acompanha de fora" para "nós dois vivemos a mesma jornada, ao mesmo tempo".
- Expectativa: será que isso funciona mesmo, ou é promessa de marketing?

**Capítulo 8 — "Não fui só eu que senti isso"** *(Prova Social)*
- Emoção: confiança social — validação externa antes da decisão final.
- Pergunta mental: "Outras pessoas como eu confiaram nisso e valeu a pena?"
- Transformação: de "estou avaliando uma promessa" para "estou vendo uma experiência real de alguém parecido comigo".
- Expectativa: ok, mas e as minhas dúvidas específicas de segurança/custo/esforço que ainda não foram respondidas?

**Capítulo 9 — "Minhas dúvidas, respondidas antes de eu perguntar"** *(FAQ por objeção)*
- Emoção: segurança final — remoção do último atrito racional antes da decisão emocional já tomada.
- Pergunta mental: "Existe algum motivo pra eu não fazer isso agora?"
- Transformação: de "quase convencida" para "sem objeção pendente".
- Expectativa: então, é hora de começar.

**Capítulo 10 — "Sua jornada começa agora, não segunda-feira"** *(CTA Final)*
- Emoção: convicção + leveza (baixa fricção percebida).
- Pergunta mental: "Vale a pena fazer isso agora mesmo?"
- Transformação: decisão tomada.
- Fim do arco — mas note: o fim do Capítulo 10 é o começo do Capítulo 1 *dentro do produto* (a jornada real da usuária começa onde a jornada da Landing termina). Essa continuidade entre "a história que acabei de ler" e "a história que estou prestes a viver" é o que separa uma boa Landing de uma Landing memorável.

### 4.3 O que muda na prática em relação à CR-001

A sequência de seções da CR-001 (seção 5 daquele documento) **pode ser mantida estruturalmente** — os capítulos acima mapeiam quase 1:1 para as seções já definidas. A mudança não é de ordem, é de **enquadramento de copy e headline por seção**: cada H2 deve ser escrito como a linha de um capítulo ("Ele calculou a minha rota, não me deu o mapa de todo mundo"), não como o nome do módulo ("Solução / Personalização"). Isso é uma correção de copywriting a ser aplicada na próxima fase de implementação, não uma mudança de arquitetura.

---

## 5. Momento WOW — cinco propostas

Toda Landing memorável tem um momento em que o usuário para de rolar a página passivamente e começa a interagir de propósito. Hoje a Landing não tem nenhum. Cinco propostas completamente diferentes, sem implementação:

### Proposta 1 — A Jornada que se desenha ao vivo (recomendada)
Na seção de Personalização (Capítulo 3), em vez de mostrar 4 badges estáticos de tipo de jornada, o usuário vê uma pergunta simples ("Qual é a sua jornada?") com 4 opções clicáveis. Ao clicar em uma (ex.: "Gêmeos"), uma trilha SVG se desenha em tempo real na tela, mostrando marcos específicos daquela jornada aparecendo um a um (ex.: "Semana 20 — ultrassom morfológico duplo", "Enxoval calculado para dois bebês"). É a prova ao vivo do Motor da Jornada funcionando, sem exigir cadastro.
- **Por que funciona:** transforma a alegação "personalizamos sua jornada" em uma demonstração real e interativa, em menos de 5 segundos, sem fricção de conta.
- **Custo de implementação:** médio (SVG + JS, dados estáticos por tipo de jornada, sem backend).
- **Risco:** baixo — é aditivo, não depende de conteúdo real do produto/backend.

### Proposta 2 — O mockup que evolui semana após semana
Um mockup de celular no Hero com um scrubber (controle deslizante) de "Semana 8" a "Semana 40". Ao arrastar, o conteúdo da tela do app muda de verdade (marcos do bebê, tarefas do enxoval, tom das mensagens da IA), mostrando visualmente que o produto muda junto com o tempo, não é uma tela fixa.
- **Por que funciona:** é a materialização mais literal do conceito "Jornada Viva" — o usuário *sente* o tempo passando com um gesto.
- **Custo:** alto (requer 5-6 estados de UI reais capturados/recriados, mais lógica de interpolação).
- **Risco:** médio — exige conteúdo real por semana, que hoje não existe pronto para uso em marketing.

### Proposta 3 — A IA responde a pergunta que o visitante digitar
Na seção do Guia de IA, em vez de um mockup de chat estático com uma pergunta pré-definida, um campo de texto real convida o visitante a digitar a própria dúvida ("O que você quer perguntar?"). Um conjunto pré-escrito de 15-20 respostas cobre as dúvidas mais comuns (mapeadas por palavra-chave); perguntas fora do conjunto recebem uma resposta genérica elegante que reforça o disclaimer médico.
- **Por que funciona:** é o momento de maior engajamento possível — interação real, não passiva.
- **Custo:** médio-alto (curadoria de respostas, risco de qualidade se a pergunta não for reconhecida).
- **Risco:** **alto** — sem um motor de IA real por trás, respostas engessadas para perguntas médicas sensíveis podem soar falsas ou, pior, inadequadas se mal calibradas. Requer revisão de conteúdo médico/legal antes de considerar.

### Proposta 4 — Nascimento da Timeline (abertura cinematográfica do Hero)
Ao carregar a página, antes do Hero estático aparecer, uma animação curta (1.5-2s, pulável, respeitando `prefers-reduced-motion`) mostra dois pontos se conectando e se transformando em uma linha do tempo que se estende — metáfora visual do início de uma jornada. A animação termina revelando o Hero normal.
- **Por que funciona:** cria uma abertura de marca reconhecível (como um "jingle visual"), reforça "Jornada" como conceito antes mesmo da primeira palavra ser lida.
- **Custo:** baixo-médio (CSS/SVG animation, sem dependência de dados).
- **Risco:** médio — animações de entrada obrigatórias podem irritar usuários recorrentes se não puladas facilmente ou se atrasarem a interatividade percebida (risco de Core Web Vitals/INP).

### Proposta 5 — Mapa vivo da gestação (visão de universo)
Uma visualização tipo "constelação" onde cada módulo do produto (Enxoval, Saúde, Memórias, IA) aparece como um nó conectado a um caminho central (a Jornada), com micro-animações de pulso mostrando atividade. O usuário pode passar o mouse/tocar em cada nó para ver uma prévia.
- **Por que funciona:** comunica amplitude (33 módulos) de forma visualmente impressionante, sem a grade genérica de cards.
- **Custo:** alto (visualização customizada, provavelmente Canvas/SVG complexo, exige design de interação cuidadoso para mobile).
- **Risco:** alto — risco real de virar "impressionante mas confuso"; visualizações de rede/constelação são notoriamente difíceis de tornar escaneáveis em telemóvel.

### 5.1 Recomendação

**Proposta 1 (A Jornada que se desenha ao vivo)** é a recomendada para a primeira versão da V2: menor custo de implementação entre as opções de alto impacto, zero risco de conteúdo médico sensível, reforça diretamente o conceito proprietário `Motor da Jornada` (Etapa 3) com uma demonstração real, e é a mais compatível com o princípio de performance/estático que a CR-001 protege (seção 7.4/12.4 daquele documento). **Proposta 4** é um complemento de baixo custo que pode ser adicionado na mesma fase, como abertura de marca. **Proposta 2** deve ser avaliada como evolução de fase 2, condicionada à existência de conteúdo real por semana gestacional pronto para uso em marketing. **Proposta 3** não deve ser implementada sem revisão médica/legal formal do conjunto de respostas, dado o tema sensível. **Proposta 5** deve ser descartada para esta fase — risco de execução alto para ganho de diferenciação incerto.

---

## 6. Hero repensado

### 6.1 Por que o Hero atual (e o da CR-001) ainda é "Headline + Texto + Botão + Imagem"

A CR-001 já melhora significativamente o conteúdo do Hero (headline personalizada, prova visual real, badge de personalização — seção 6.1 daquele documento), mas mantém a **forma** clássica de Hero de SaaS: duas colunas, texto à esquerda, imagem à direita. É uma fórmula correta, usada por milhares de produtos. O objetivo desta etapa é que o usuário **entenda o produto antes de terminar de ler a primeira frase** — não depois de ler headline + subheadline + olhar o mockup.

### 6.2 Proposta de Hero

**Estrutura em 3 camadas simultâneas (não sequenciais):**

1. **Camada de fundo — a Jornada em movimento (não decorativa):** em vez de um gradiente estático, o fundo do Hero é a Proposta 4 da Etapa 5 (Nascimento da Timeline) já em estado "concluído" — uma linha do tempo sutil e contínua, com pontos marcando semanas, correndo horizontalmente atrás do conteúdo, em baixo contraste. Ela comunica "isso é uma jornada" antes de qualquer palavra ser processada conscientemente.
2. **Camada de texto — headline como diagnóstico, não como slogan.** Ver Etapa 6.3 para a proposta de headline.
3. **Camada de prova — não um mockup estático, mas o início interativo da Proposta 1 da Etapa 5.** O bloco visual do Hero já é a pergunta "Qual é a sua jornada?" com as 4 opções — ou seja, **o momento WOW não vem depois do Hero, ele É o Hero.** Isso resolve diretamente a crítica da Etapa 1.4 (o produto sendo mostrado em movimento, não em uma tela estática).

### 6.3 Headline proposta (evolução da Opção A da CR-001, incorporando categoria + conceito proprietário)

> **"Toda gravidez tem uma rota própria. A sua acabou de ganhar um copiloto."**
>
> *Subheadline:* "O Motor da Jornada do Baby's Plan entende sua condição — gêmeos, FIV, alto risco, primeira vez — e recalcula o caminho com você, semana após semana. Nenhuma outra gestação tem a sua rota. A sua também não deveria ter o mapa de outra pessoa."

**Por que essa versão avança em relação à Opção A da CR-001:**
- Introduz a categoria (`copiloto`) e o mecanismo nomeado (`Motor da Jornada`) na primeira leitura, sem jargão técnico — cumprindo a Etapa 3.
- "Rota" e "recalcula" continuam a metáfora de trajeto sem cair na armadilha do GPS passivo (Etapa 2.1) — o copiloto participa, não apenas recalcula em caso de erro.
- É uma frase que deixa de fazer sentido fora da categoria de jornada personalizada — não pode ser reciclada por um app de treino trocando uma palavra, porque "rota gestacional" e "copiloto" já carregam identidade de marca, não apenas benefício genérico.

### 6.4 O que o usuário entende antes de ler

Com a estrutura de 3 camadas, a sequência de compreensão pré-leitura é: fundo em movimento → "isso é dinâmico, é uma jornada" (percepção em <1s) → 4 opções clicáveis visíveis mesmo antes da leitura da headline → "isso responde a mim, não é uma tela fixa" (percepção em 2-3s) → headline confirma verbalmente o que a forma já comunicou. Esse é o critério de sucesso da Etapa 6: compreensão antes da leitura completa.

---

## 7. Brand Personality — Brand Voice Guide

### 7.1 Arquétipos

**Arquétipo principal: O Cuidador Sábio** *(Caregiver + traços do Sage)* — não o Cuidador que protege por superproteção (isso infantiliza a usuária, que já se sente sobrecarregada de opiniões alheias sobre como "deveria" viver a gestação), mas o que **capacita com conhecimento aplicado no momento certo**. Fala como alguém que já passou por isso mil vezes e sabe exatamente quando informar e quando simplesmente ficar por perto.

**Arquétipo secundário: O Explorador Orientado** *(Explorer)* — reconhece que cada jornada é única e territorio não mapeado para quem a vive, mas nunca abandona a usuária no desconhecido; a orientação existe precisamente para tornar a exploração segura, não para eliminar a sensação de descoberta.

**Por que não outros arquétipos comuns na categoria:** evitar o **Herói** (a narrativa não é "supere a gravidez com força de vontade" — é desumanizante em um momento de vulnerabilidade real) e evitar o **Bobo da Corte/Amigo descontraído** (leveza em excesso soa desrespeitosa em temas de saúde, perda gestacional, alto risco — a categoria exige seriedade de fundo, mesmo com calor humano na superfície).

### 7.2 Tom de voz

- **Direto, nunca clínico.** Explica sem soar como bula de remédio.
- **Caloroso, nunca fofo.** Evita diminutivos em excesso ("bebezinho", "mãezinha") — trata a usuária como adulta competente vivendo um momento intenso, não como alguém frágil.
- **Confiante, nunca definitivo em temas médicos.** Toda afirmação de saúde vem com o limite claro de "isso não substitui orientação médica" — não como disclaimer legal escondido, mas como parte genuína da voz (reforça a Etapa 9.5 da CR-001: o disclaimer aumenta confiança, não a reduz).
- **Específico, nunca genérico.** Prefere "seu enxoval para gêmeos, calculado com preços de hoje" a "cuidamos de tudo para você".

### 7.3 Personalidade (em 5 traços)

1. Presente sem ser invasivo.
2. Competente sem ser arrogante.
3. Caloroso sem ser piegas.
4. Honesto sobre limites (o que a IA não sabe/não decide).
5. Constante — a mesma voz na Landing, no app, nas notificações e nas respostas da IA.

### 7.4 Palavras que devemos usar

Jornada, rota, copiloto (com moderação — é conceito, não deve virar palavra genérica de todo parágrafo), motor da jornada, junto/ao seu lado, sua condição/seu caso, semana a semana, recalcula/se adapta, decisão, tranquilidade, clareza.

### 7.5 Palavras que devemos evitar

"Fácil" (minimiza a complexidade real da experiência da usuária), "simples" (idem), "revolucionário"/"disruptivo" (jargão de startup, quebra a voz de Cuidador Sábio), "mamãe"/"mãezinha" como forma padrão de tratamento (usar "você"; nem toda gestante se identifica com "mamãe" antes do nascimento), superlativos vazios ("o melhor", "o único") sem prova concreta ao lado, "grátis*" com asterisco escondendo condição — se é grátis, dizer grátis sem letra miúda (ver restrição da seção 9.4 da CR-001 sobre não prometer "premium" inexistente).

### 7.6 Como a IA fala (dentro do produto)

A IA nunca se refere a si mesma em terceira pessoa robótica ("Estou processando sua solicitação"). Fala na primeira pessoa, curta, específica, sempre ancorada no momento gestacional real da usuária ("Na sua semana 24, é comum sentir X — aqui está o que costuma ajudar, mas vale confirmar com seu obstetra se piorar"). Nunca promete certeza médica. Nunca usa emoji em conteúdo de saúde (pode usar com moderação em conteúdo de celebração/marco).

### 7.7 Como a Landing fala

Mais editorial que a UI do produto — pode usar frases mais longas, metáforas de jornada com mais liberdade (é onde a marca se apresenta, não onde a tarefa é executada). Nunca promete o que o produto não faz hoje (alinhado à restrição da seção 6.10 da CR-001).

### 7.8 Como notificações falam

Mais curtas que qualquer outro canal. Uma ação, um contexto, sem venda. Ex.: "Sua parceira acabou de marcar a consulta de 28 semanas. Já está na sua jornada também." — nunca "🎉 Novidade incrível te esperando no app!".

### 7.9 Como o aplicativo fala (fora da IA)

Funcional, mas nunca frio — rótulos de UI podem ser diretos ("Adicionar item"), mas mensagens de estado vazio e confirmações mantêm o tom de Cuidador Sábio ("Ainda não há nada aqui — quando sua jornada chegar nesse ponto, vamos te avisar").

---

## 8. Mapa da jornada emocional da Landing

```
Choque/Euforia (Hero — "duas linhas mudaram tudo")
        ↓  [validação]
Alívio de ser compreendida (Problema — "toda gravidez tratada como igual")
        ↓  [prova ao vivo, Momento WOW]
Esperança concreta (Solução — Motor da Jornada se desenha em tempo real)
        ↓  [redução de ansiedade]
Confiança operacional (Como Funciona — "2 minutos, não 2 horas")
        ↓  [intimidade]
Segurança íntima (Guia de IA — a pergunta que eu tinha vergonha de fazer)
        ↓  [alívio prático]
Alívio de decisão (Enxoval — o que comprar, decidido por mim)
        ↓  [conexão]
Pertencimento a dois (Pais Sincronizados — não estou mais sozinha nisso)
        ↓  [validação social]
Confiança coletiva (Prova Social — não fui só eu que senti isso)
        ↓  [remoção de atrito racional]
Segurança final (FAQ por objeção)
        ↓  [ativação]
Convicção leve (CTA Final — "começa agora, não segunda-feira")
```

### 8.1 Como provocar cada emoção (recursos concretos, sem implementar agora)

| Emoção | Recurso primário | Recurso de reforço |
|---|---|---|
| Choque/Euforia | Headline de diagnóstico (Etapa 6.3) | Fundo de timeline em movimento sutil |
| Alívio de ser compreendida | Copy que nomeia a frustração real sem soar acusatória a concorrentes | Ícones de linha (não emoji) — tom mais sério na seção de dor |
| Esperança concreta | Momento WOW interativo (Proposta 1, Etapa 5) | Badges reais de tipo de jornada com linguagem humana, não técnica |
| Confiança operacional | Copy "2 minutos" já validada na CR-001 (mantida) | Ícones numerados simples |
| Segurança íntima | Mockup de chat com pergunta real e disclaimer visível | Tom de voz da IA descrito na Etapa 7.6 |
| Alívio de decisão | Menção ao Motor de recomendação do Enxoval com enquadramento de "decisão", não só "economia" | Simulador Brasil×EUA como prova de contexto real |
| Pertencimento a dois | Cenário visual de notificação chegando para os dois ao mesmo tempo (já previsto na CR-001, 6.8) | Ilustração customizada de dois perfis conectados |
| Confiança coletiva | Depoimentos reais (restrição da CR-001 6.9 mantida — nunca fabricar) | Prova técnica verificável enquanto não há depoimentos |
| Segurança final | FAQ por objeção (já proposto na CR-001) | Tom consistente de Cuidador Sábio nas respostas |
| Convicção leve | Microcopy de baixo risco (já proposta na CR-001, 9.2) | Continuidade visual entre fim da Landing e início real do produto |

---

## 9. Plano de mensuração

### 9.1 Métricas de topo de funil

- **Hero CTR** — cliques no CTA primário / visualizações do Hero.
- **Momento WOW engagement rate** — % de visitantes que interagem com a demonstração ao vivo do Motor da Jornada (Proposta 1, Etapa 5) — métrica nova, específica desta CR, que não existia na CR-001 porque o elemento não existia.
- **Scroll depth por capítulo** — usando os 10 capítulos da Etapa 4 como marcadores de evento (não apenas "seção X visível", mas "capítulo X concluído"), permitindo comparar onde a narrativa perde tração.
- **Section drop rate** — % de visitantes que saem da página logo após cada capítulo, cruzado com o mapa emocional da Etapa 8 para identificar qual emoção específica falhou em converter atenção em permanência.

### 9.2 Métricas de qualidade de narrativa (novas, específicas desta CR)

- **Badge click distribution** (já sugerida na CR-001, 6.3) — mas agora também usada como *sinal de eficácia do Momento WOW*: se a distribuição de cliques nas 4 opções de jornada for muito concentrada em 1 opção, o copy das outras 3 pode estar fraco.
- **Time-to-first-interaction** — tempo entre carregamento da página e primeira interação real (clique em badge, scrub no mockup, digitação no chat) — proxy direto de "o Hero comunicou antes da leitura", critério de sucesso da Etapa 6.

### 9.3 Ferramentas

- **GA4** — eventos customizados por capítulo (não apenas pageview), CTAs segmentados por seção (já recomendado na CR-001, 9.1), UTMs por canal de aquisição.
- **Microsoft Clarity ou Hotjar** — heatmap e session recording, com foco específico em gravações da interação com o Momento WOW (é o elemento novo de maior incerteza de UX — precisa de observação qualitativa antes de otimizar quantitativamente).
- **Mouse tracking** dedicado na seção Hero nos primeiros 30 dias pós-lançamento, para validar a hipótese da Etapa 6.4 (compreensão pré-leitura) — se o mouse for direto para a headline e ignorar as 4 opções, a hipótese de "forma comunica antes do texto" falhou e a estrutura do Hero deve ser revisada.

### 9.4 Backlog inicial de testes A/B

| # | Teste | Hipótese | Métrica de sucesso |
|---|---|---|---|
| 1 | Headline Etapa 6.3 vs. Opção A da CR-001 | A versão com categoria nomeada ("copiloto") converte mais que a versão só de benefício | CTR do CTA primário |
| 2 | Hero com Momento WOW interativo vs. Hero estático com mockup (versão CR-001 original) | Interatividade no Hero aumenta scroll depth e tempo de permanência | Scroll depth + session duration |
| 3 | "Motor da Jornada" citado explicitamente vs. apenas "Jornada personalizada" (sem nome próprio) | Nomear o mecanismo aumenta a percepção de credibilidade/diferenciação (medir via pesquisa qualitativa pós-teste, não só métrica de clique) | Combinação de CTR + pesquisa de recall assistido |
| 4 | Ordem dos capítulos: Enxoval antes vs. depois do Guia de IA | Testar se "alívio de decisão prática" converte melhor antes ou depois de "segurança íntima" | Conversão final por variante |
| 5 | Presença vs. ausência do disclaimer médico visível no mockup de IA | Confirmar a hipótese da CR-001 (9.5) de que o disclaimer aumenta confiança em vez de reduzir | Engagement com a seção + CTR do CTA terciário |

---

## 10. Visão de longo prazo — como permanecer atual por 5 anos

### 10.1 Modismos a evitar deliberadamente

- **IA como enfeite visual** (badges "Powered by AI" genéricos, robôs 3D, gradientes roxo-azul clichê de "produto de IA de 2024") — em 5 anos isso vai datar a marca instantaneamente, como glassmorphism datou 2021 e neumorphism datou 2020. A IA do Baby's Plan deve ser comunicada por **comportamento** (o que ela faz, como fala), não por estética de categoria.
- **Scrollytelling excessivo** (parallax pesado, elementos que "prendem" o scroll, animações longas obrigatórias) — tende a envelhecer mal e a prejudicar performance/acessibilidade, contrariando o próprio ativo mais forte da marca hoje (site estático rápido, ver CR-001 seção 1.2).
- **Linguagem de "growth hacking"** (contadores regressivos, escassez artificial, gamificação forçada de conversão) — já descartada corretamente pela CR-001 (seção 9.4) por razões éticas; reforçar aqui que também é uma razão *de marca*: nada envelhece pior nem quebra confiança mais rápido em uma categoria de saúde.
- **Depender de uma paleta "de tendência do ano"** — cores pastel são cíclicas na categoria "baby/gravidez"; a paleta teal/coral/violeta já foge do clichê rosa/azul e deve continuar sendo a base, não substituída por modismos sazonais.

### 10.2 Princípios que permanecem atuais

- **Uma ideia central clara e repetível** (Copiloto de Jornada / Motor da Jornada) sobrevive a qualquer redesign visual — o texto e a metáfora podem ser reencenados em qualquer linguagem visual futura sem perder a marca.
- **Prova real sobre promessa decorada** — mockups reais, disclaimers honestos, ausência de números fabricados: isso não é tendência, é a fundação de confiança que qualquer categoria de saúde precisa, independente da década.
- **Performance como valor de marca, não só métrica técnica** — um site rápido comunica respeito pelo tempo e pelo contexto da usuária (muitas vezes com conexão instável, em movimento, cansada); isso nunca sai de moda.
- **Voz consistente entre Landing, produto, notificações e IA** (Etapa 7) é uma decisão estrutural, não visual — sobrevive a qualquer redesign de interface.

### 10.3 Como construir uma Landing atemporal

Investir a maior parte do orçamento de diferenciação em **narrativa e conceito proprietário** (que não datam) e o mínimo necessário em **efeitos visuais de tendência** (que datam em 18-24 meses). Tratar a Landing como um documento vivo com um núcleo estável — os 10 capítulos da Etapa 4, o Motor da Jornada, o arquétipo de Cuidador Sábio — e uma superfície visual que pode e deve ser redesenhada a cada 2-3 anos sem que a marca "recomece do zero" a cada vez. Esse é o teste final de uma boa camada de marca: se em 5 anos a Landing for redesenhada visualmente, mas alguém que já conhece o Baby's Plan hoje ainda reconhecer a mesma ideia central, a estratégia deste documento terá funcionado.

---

## Notas finais

1. Este documento **não implementa nada** — nenhum arquivo de produção (`index.html`, `css/`, `js/`, `images/`) foi alterado.
2. Toda decisão de nomenclatura proprietária (`Motor da Jornada`, `Copiloto de Jornada`) deve ser validada juridicamente quanto à disponibilidade de marca/domínio antes do lançamento público, fora do escopo desta CR.
3. A Proposta 1 da Etapa 5 (Momento WOW) e a estrutura de Hero da Etapa 6 devem ser tratadas como **adendo ao roadmap da CR-001** (seção 13 daquele documento) — recomenda-se inserir como uma nova etapa entre as etapas 2 e 3 do roadmap original, já que dependem do copy/headline (etapa 2) e precedem o sistema de ilustração (etapa 3).
4. Qualquer copy que cite o Motor da Jornada como capaz de "decidir por" a usuária deve ser revisada — o produto orienta e recalcula rota, mas não decide por ela; isso é consistente com o guardrail médico já documentado em `AI_GOVERNANCE.md` (referenciado na CR-001, seção 6.5) e deve se estender a toda comunicação de marca, não apenas ao disclaimer da seção de IA.
