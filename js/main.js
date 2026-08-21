/* ================================================================
   Baby's Plan — Landing Page V2
   Vanilla JS, zero dependências, zero build step.
   Menu mobile · FAQ accordion · scroll-reveal · Momento WOW
   (plano se ajustando ao vivo) · mockup de chat · analytics harness
   ================================================================ */
(function () {
  'use strict';

  /* ── Analytics harness ──────────────────────────────────────
     GA4/Clarity: TODO substituir pelos IDs reais antes de publicar — exigem criar uma
     property numa conta Google/Microsoft externa, fora do alcance deste código. Enquanto
     os IDs forem os placeholders abaixo, nenhum script de terceiro é carregado.

     LANDING_COLLECT_URL: pipeline first-party real (mesmo Supabase do App, ver
     supabase/functions/landing-collect no repo baby-journey-app) — funciona hoje, sem
     depender de nenhuma conta externa. Aponta para o projeto Supabase de Produção
     (dcyjmkhhoohbhriondwy), a mesma função implantada em
     supabase/functions/landing-collect no repo baby-journey-app. */
  var ANALYTICS_CONFIG = {
    GA4_ID: 'G-XXXXXXX',
    CLARITY_ID: 'XXXXXXXX',
    LANDING_COLLECT_URL: 'https://dcyjmkhhoohbhriondwy.supabase.co/functions/v1/landing-collect'
  };

  var CONSENT_KEY = 'bp_consent';
  var VISITOR_KEY = 'bp_landing_ref';
  var SESSION_KEY = 'bp_session_id';

  function randomId(prefix) {
    return prefix + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10);
  }

  function getVisitorId() {
    try {
      var id = localStorage.getItem(VISITOR_KEY);
      if (!id) {
        id = randomId('lp');
        localStorage.setItem(VISITOR_KEY, id);
      }
      return id;
    } catch (e) {
      return randomId('lp');
    }
  }

  function getSessionId() {
    try {
      var id = sessionStorage.getItem(SESSION_KEY);
      if (!id) {
        id = randomId('s');
        sessionStorage.setItem(SESSION_KEY, id);
      }
      return id;
    } catch (e) {
      return randomId('s');
    }
  }

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* ignore */ }
  }

  function getDeviceType() {
    var w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w < 1024) return 'tablet';
    return 'desktop';
  }

  function getUtmParams() {
    var params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign')
    };
  }

  /* Envio ao pipeline first-party — best-effort, nunca bloqueia a navegação. Só envia se
     houver consentimento explícito e o navegador não pedir Do Not Track. */
  function sendLandingEvent(eventName, properties) {
    if (navigator.doNotTrack === '1') return;
    if (getConsent() !== 'granted') return;

    var utm = getUtmParams();
    var payload = {
      event_name: eventName,
      session_ref: getVisitorId(),
      session_id: getSessionId(),
      path: window.location.pathname,
      referrer: document.referrer || null,
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      device_type: getDeviceType(),
      properties: properties || {}
    };

    try {
      fetch(ANALYTICS_CONFIG.LANDING_COLLECT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(function () { /* best-effort, silencioso */ });
    } catch (e) { /* ambiente sem fetch — silencioso */ }
  }

  window.dataLayer = window.dataLayer || [];
  function track(eventName, params) {
    window.dataLayer.push(Object.assign({ event: eventName }, params || {}));
    if (window.gtag) {
      window.gtag('event', eventName, params || {});
    }
    sendLandingEvent(eventName, params);
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

  /* ── Barra de consentimento (LGPD) ───────────────────────────
     Sem escolha registrada: nenhum evento é enviado (sendLandingEvent checa getConsent()
     acima). A barra só aparece uma vez; a escolha fica em localStorage. */
  function renderConsentBanner() {
    if (getConsent() !== null) return;
    if (navigator.doNotTrack === '1') { setConsent('denied'); return; }

    var bar = document.createElement('div');
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Consentimento de cookies e analytics');
    bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#0F172A;' +
      'color:#fff;padding:1rem;display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;' +
      'justify-content:space-between;font-size:0.85rem;box-shadow:0 -2px 12px rgba(0,0,0,0.15);';
    bar.innerHTML =
      '<span style="flex:1 1 260px;min-width:0;">Usamos dados anônimos de navegação (sem cookies de terceiros) ' +
      'para entender como melhorar o Baby\'s Plan. <a href="privacy.html" style="color:#93C5FD;">Saiba mais</a>.</span>' +
      '<span style="display:flex;gap:0.5rem;flex-shrink:0;">' +
      '<button type="button" data-consent="denied" style="background:transparent;color:#fff;border:1px solid #475569;' +
      'border-radius:6px;padding:0.5rem 0.9rem;cursor:pointer;">Recusar</button>' +
      '<button type="button" data-consent="granted" style="background:#0D9488;color:#fff;border:none;' +
      'border-radius:6px;padding:0.5rem 0.9rem;cursor:pointer;font-weight:600;">Aceitar</button>' +
      '</span>';
    document.body.appendChild(bar);

    bar.querySelectorAll('[data-consent]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setConsent(btn.getAttribute('data-consent'));
        bar.remove();
        if (btn.getAttribute('data-consent') === 'granted') {
          sendLandingEvent('page_view', { chapter: 'entry' });
        }
      });
    });
  }
  renderConsentBanner();
  if (getConsent() === 'granted') sendLandingEvent('page_view', { chapter: 'entry' });

  /* ── UTM/ref passthrough para o App ──────────────────────────
     Propaga utm_source/utm_medium/utm_campaign/ref em todo link para app.babysplan.com —
     é a chave de join com profiles.acquisition_source->>'ref' no funil consolidado. */
  function decorateAppLinks() {
    var visitorId = getVisitorId();
    document.querySelectorAll('a[href^="https://app.babysplan.com"]').forEach(function (a) {
      var url;
      try { url = new URL(a.getAttribute('href')); } catch (e) { return; }
      if (!url.searchParams.has('utm_source')) url.searchParams.set('utm_source', 'babysplan_landing');
      if (!url.searchParams.has('utm_medium')) url.searchParams.set('utm_medium', 'cta');
      if (!url.searchParams.has('utm_campaign')) {
        url.searchParams.set('utm_campaign', a.dataset.analyticsSource || a.dataset.analytics || 'landing_v3');
      }
      url.searchParams.set('ref', visitorId);
      a.setAttribute('href', url.toString());
    });
  }
  decorateAppLinks();

  /* ── Scroll depth 25/50/75/90% ───────────────────────────────
     Cada marco dispara 1 vez por carregamento de página. */
  (function trackScrollDepth() {
    var thresholds = [25, 50, 75, 90];
    var fired = {};
    function onScroll() {
      var doc = document.documentElement;
      var scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) return;
      var pct = Math.round((window.scrollY / scrollable) * 100);
      thresholds.forEach(function (t) {
        if (pct >= t && !fired[t]) {
          fired[t] = true;
          track('scroll_depth', { depth: t });
        }
      });
      if (thresholds.every(function (t) { return fired[t]; })) {
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  })();

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
