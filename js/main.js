/* ================================================================
   Baby's Plan — Landing Page V2
   Vanilla JS, zero dependências, zero build step.
   Menu mobile · FAQ accordion · scroll-reveal · Momento WOW
   (plano se ajustando ao vivo) · mockup de chat · analytics harness
   ================================================================ */
(function () {
  'use strict';

  /* ── Analytics harness ──────────────────────────────────────
     TODO: substituir pelos IDs reais antes de publicar.
     Enquanto os IDs forem os placeholders abaixo, nenhum script
     de terceiro é carregado e nenhuma chamada de rede é feita —
     os eventos só são registrados em window.dataLayer. */
  var ANALYTICS_CONFIG = {
    GA4_ID: 'G-XXXXXXX',
    CLARITY_ID: 'XXXXXXXX'
  };

  window.dataLayer = window.dataLayer || [];
  function track(eventName, params) {
    window.dataLayer.push(Object.assign({ event: eventName }, params || {}));
    if (window.gtag) {
      window.gtag('event', eventName, params || {});
    }
  }

  function loadAnalytics() {
    if (ANALYTICS_CONFIG.GA4_ID && ANALYTICS_CONFIG.GA4_ID.indexOf('XXXXXXX') === -1) {
      var gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + ANALYTICS_CONFIG.GA4_ID;
      document.head.appendChild(gaScript);
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', ANALYTICS_CONFIG.GA4_ID);
    }
    if (ANALYTICS_CONFIG.CLARITY_ID && ANALYTICS_CONFIG.CLARITY_ID.indexOf('XXXXXXX') === -1) {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', ANALYTICS_CONFIG.CLARITY_ID);
    }
  }
  loadAnalytics();

  /* ── Ano no footer ──────────────────────────────────────── */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Menu mobile ────────────────────────────────────────── */
  window.openMobileMenu = function () {
    document.getElementById('mobileMenu').classList.add('open');
    document.getElementById('menuToggle').setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  window.closeMobileMenu = function () {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  /* ── FAQ accordion (single-open) ───────────────────────────
     Um item aberto por vez; dispara evento de analytics ao abrir. */
  window.toggleFaq = function (btn) {
    var item = btn.closest('.faq-item');
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function (el) {
      el.classList.remove('open');
      el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      var question = btn.querySelector('.faq-q');
      track('faq_expand', { question: question ? question.textContent : '' });
    }
  };

  /* ── Clique em CTAs marcados com data-analytics ────────── */
  document.querySelectorAll('[data-analytics]').forEach(function (el) {
    el.addEventListener('click', function () {
      track(el.getAttribute('data-analytics'), {
        source: el.getAttribute('data-analytics-source') || null
      });
    });
  });

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll-reveal genérico ─────────────────────────────────
     Qualquer elemento com [data-reveal] recebe .is-visible na
     primeira vez que entra em viewport, depois é desobservado —
     nunca reanimando, nunca em loop. */
  if (prefersReducedMotion) {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ── Trilha decorativa do Hero (desenha 1x ao entrar) ──────── */
  var heroTimelineBg = document.querySelector('.hero-timeline-bg');
  if (heroTimelineBg) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      heroTimelineBg.classList.add('is-visible');
    } else {
      var heroObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      heroObserver.observe(heroTimelineBg);
    }
  }

  /* ── section_view por capítulo ──────────────────────────────
     Cada <section id="..."> dispara 1 evento na primeira vez
     que entra em viewport, identificando o capítulo pelo id. */
  if ('IntersectionObserver' in window) {
    var chapterObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          track('section_view', { chapter: entry.target.id });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('section[id]').forEach(function (section) {
      chapterObserver.observe(section);
    });
  }

  /* ── Momento WOW: "a Jornada que se desenha ao vivo" ───────────
     4 badges clicáveis, sem cadastro. Dataset estático — nenhuma
     chamada de rede. Ao clicar: desenha a trilha SVG do resultado
     e revela os marcos daquela jornada com um leve stagger. */
  var JOURNEY_DATA = {
    'primeira': {
      label: 'Primeira gestação',
      milestones: [
        { week: 'Semana 12', text: 'Sua jornada é criada com o calendário completo do primeiro trimestre.' },
        { week: 'Semana 20', text: 'O Guia de Jornada explica o ultrassom morfológico antes da consulta.' },
        { week: 'Semana 28', text: 'O checklist da mala da maternidade aparece automaticamente na sua linha do tempo.' },
        { week: 'Semana 38', text: 'Alertas de sinais de trabalho de parto ficam por perto, sem susto.' }
      ]
    },
    'gemeos': {
      label: 'Gêmeos',
      milestones: [
        { week: 'Semana 12', text: 'Seu plano já identifica a gestação múltipla e ajusta o calendário de consultas.' },
        { week: 'Semana 20', text: 'Enxoval calculado em dobro, sem duplicar esforço.' },
        { week: 'Semana 24', text: 'Consultas mais frequentes já entram na sua agenda automaticamente.' },
        { week: 'Semana 32', text: 'Prioridades da mala da maternidade se adaptam para dois bebês.' }
      ]
    },
    'fiv': {
      label: 'Fertilização assistida',
      milestones: [
        { week: 'Semana 6', text: 'Sua jornada começa com o acompanhamento pós-transferência, não do zero.' },
        { week: 'Semana 10', text: 'O Guia de Jornada reconhece o histórico e evita perguntas genéricas.' },
        { week: 'Semana 20', text: 'Marcos emocionais da jornada de FIV entram no seu diário, não só os médicos.' },
        { week: 'Semana 30', text: 'Checklist de preparo ajustado ao seu ritmo, sem comparação com gestações padrão.' }
      ]
    },
    'alto-risco': {
      label: 'Alto risco',
      milestones: [
        { week: 'Semana 8', text: 'Seu plano já identifica sua condição e prioriza consultas de acompanhamento.' },
        { week: 'Semana 16', text: 'Sintomas relevantes para sua condição ganham destaque no registro diário.' },
        { week: 'Semana 24', text: 'Exames específicos aparecem na sua linha do tempo, no momento certo.' },
        { week: 'Semana 34', text: 'Mala da maternidade ajustada para um parto que pode pedir atenção extra.' }
      ]
    }
  };

  var wowBadges = document.querySelectorAll('.wow-badge');
  var wowMilestonesEl = document.getElementById('wowMilestones');
  var wowPathSvg = document.getElementById('wowPathSvg');

  function renderJourney(key) {
    var journey = JOURNEY_DATA[key];
    if (!journey || !wowMilestonesEl) return;

    wowBadges.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-journey') === key ? 'true' : 'false');
    });

    wowMilestonesEl.innerHTML = '';
    journey.milestones.forEach(function (m, i) {
      var el = document.createElement('div');
      el.className = 'wow-milestone';
      el.innerHTML =
        '<span class="wow-milestone-dot" aria-hidden="true"></span>' +
        '<div><span class="wow-milestone-week">' + m.week + '</span>' +
        '<span class="wow-milestone-text">' + m.text + '</span></div>';
      wowMilestonesEl.appendChild(el);

      if (prefersReducedMotion) {
        el.classList.add('is-shown');
      } else {
        setTimeout(function () { el.classList.add('is-shown'); }, 80 * i + 60);
      }
    });

    if (wowPathSvg) {
      wowPathSvg.classList.remove('is-drawn');
      if (prefersReducedMotion) {
        wowPathSvg.classList.add('is-drawn');
      } else {
        // Força reflow para reiniciar a transição a cada clique.
        void wowPathSvg.offsetWidth;
        requestAnimationFrame(function () { wowPathSvg.classList.add('is-drawn'); });
      }
    }

    track('wow_interaction', { journey_type: key });
  }

  wowBadges.forEach(function (badge) {
    badge.addEventListener('click', function () {
      renderJourney(badge.getAttribute('data-journey'));
    });
  });

  /* ── Motor da Jornada: máquina de estados (entrada → processamento → adaptação → resultado)
     Disparada 1x ao entrar em viewport. Com prefers-reduced-motion,
     salta direto para o estado final. */
  var motorMech = document.querySelector('[data-motor-mechanism]');
  if (motorMech) {
    var motorStates = ['entrada', 'processamento', 'adaptacao', 'resultado'];
    function runMotorSequence() {
      if (prefersReducedMotion) {
        motorMech.setAttribute('data-state', 'resultado');
        return;
      }
      motorStates.forEach(function (state, i) {
        setTimeout(function () {
          motorMech.setAttribute('data-state', state);
        }, i * 550);
      });
    }
    if ('IntersectionObserver' in window) {
      var motorObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runMotorSequence();
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      motorObserver.observe(motorMech);
    } else {
      runMotorSequence();
    }
  }

  /* ── Mockup de chat: simulação de digitação (1x, não em loop) ── */
  var chatMockup = document.querySelector('[data-chat-mockup]');
  if (chatMockup) {
    var aiBubble = chatMockup.querySelector('[data-chat-ai]');
    function typeChatResponse() {
      if (!aiBubble) return;
      var fullText = aiBubble.getAttribute('data-chat-text') || '';
      if (prefersReducedMotion) {
        aiBubble.textContent = fullText;
        aiBubble.classList.add('is-typed');
        return;
      }
      setTimeout(function () {
        aiBubble.textContent = '';
        aiBubble.classList.add('is-typed');
        var i = 0;
        var interval = setInterval(function () {
          aiBubble.textContent = fullText.slice(0, i);
          i += 3;
          if (i > fullText.length) clearInterval(interval);
        }, 12);
      }, 700);
    }
    if ('IntersectionObserver' in window) {
      var chatObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            typeChatResponse();
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      chatObserver.observe(chatMockup);
    } else {
      typeChatResponse();
    }
  }
})();
