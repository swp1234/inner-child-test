/* Inner Child Test — app.js */
(function () {
  'use strict';

  const QUESTIONS = 8;
  const OPTIONS  = 6;

  // a=abandonedChild b=criticizedChild c=invisibleChild d=parentifiedChild e=overprotectedChild f=playfulChild
  const SCORE_MAP = {
    '0a': { type: { abandonedChild: 3 }, dim: { abandonment: 3, shame: 1, trust: 1, autonomy: 0, healing: 0 } },
    '0b': { type: { criticizedChild: 3 }, dim: { abandonment: 1, shame: 3, trust: 1, autonomy: 1, healing: 0 } },
    '0c': { type: { invisibleChild: 3 }, dim: { abandonment: 1, shame: 1, trust: 1, autonomy: 0, healing: 0 } },
    '0d': { type: { parentifiedChild: 3 }, dim: { abandonment: 0, shame: 1, trust: 1, autonomy: 2, healing: 0 } },
    '0e': { type: { overprotectedChild: 3 }, dim: { abandonment: 1, shame: 0, trust: 2, autonomy: 0, healing: 0 } },
    '0f': { type: { playfulChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 1, healing: 3 } },

    '1a': { type: { abandonedChild: 3 }, dim: { abandonment: 2, shame: 1, trust: 2, autonomy: 0, healing: 0 } },
    '1b': { type: { criticizedChild: 3 }, dim: { abandonment: 0, shame: 3, trust: 1, autonomy: 1, healing: 0 } },
    '1c': { type: { invisibleChild: 3 }, dim: { abandonment: 1, shame: 2, trust: 0, autonomy: 0, healing: 0 } },
    '1d': { type: { parentifiedChild: 3 }, dim: { abandonment: 0, shame: 1, trust: 0, autonomy: 2, healing: 0 } },
    '1e': { type: { overprotectedChild: 3 }, dim: { abandonment: 1, shame: 1, trust: 2, autonomy: 0, healing: 0 } },
    '1f': { type: { playfulChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 1, healing: 3 } },

    '2a': { type: { abandonedChild: 3 }, dim: { abandonment: 3, shame: 0, trust: 1, autonomy: 0, healing: 0 } },
    '2b': { type: { criticizedChild: 3 }, dim: { abandonment: 0, shame: 2, trust: 0, autonomy: 2, healing: 0 } },
    '2c': { type: { invisibleChild: 3 }, dim: { abandonment: 1, shame: 1, trust: 0, autonomy: 0, healing: 0 } },
    '2d': { type: { parentifiedChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 1, autonomy: 3, healing: 0 } },
    '2e': { type: { overprotectedChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 2, autonomy: 0, healing: 0 } },
    '2f': { type: { playfulChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 2, healing: 3 } },

    '3a': { type: { abandonedChild: 3 }, dim: { abandonment: 3, shame: 1, trust: 1, autonomy: 0, healing: 0 } },
    '3b': { type: { criticizedChild: 3 }, dim: { abandonment: 0, shame: 3, trust: 1, autonomy: 0, healing: 0 } },
    '3c': { type: { invisibleChild: 3 }, dim: { abandonment: 1, shame: 2, trust: 0, autonomy: 0, healing: 0 } },
    '3d': { type: { parentifiedChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 1, autonomy: 3, healing: 0 } },
    '3e': { type: { overprotectedChild: 3 }, dim: { abandonment: 0, shame: 1, trust: 3, autonomy: 0, healing: 0 } },
    '3f': { type: { playfulChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 1, healing: 3 } },

    '4a': { type: { abandonedChild: 3 }, dim: { abandonment: 3, shame: 1, trust: 1, autonomy: 0, healing: 0 } },
    '4b': { type: { criticizedChild: 3 }, dim: { abandonment: 1, shame: 3, trust: 0, autonomy: 1, healing: 0 } },
    '4c': { type: { invisibleChild: 3 }, dim: { abandonment: 1, shame: 2, trust: 0, autonomy: 0, healing: 0 } },
    '4d': { type: { parentifiedChild: 3 }, dim: { abandonment: 0, shame: 1, trust: 1, autonomy: 3, healing: 0 } },
    '4e': { type: { overprotectedChild: 3 }, dim: { abandonment: 1, shame: 0, trust: 3, autonomy: 0, healing: 0 } },
    '4f': { type: { playfulChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 0, healing: 3 } },

    '5a': { type: { abandonedChild: 3 }, dim: { abandonment: 3, shame: 0, trust: 1, autonomy: 0, healing: 0 } },
    '5b': { type: { criticizedChild: 3 }, dim: { abandonment: 0, shame: 3, trust: 0, autonomy: 1, healing: 0 } },
    '5c': { type: { invisibleChild: 3 }, dim: { abandonment: 1, shame: 1, trust: 0, autonomy: 0, healing: 0 } },
    '5d': { type: { parentifiedChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 3, healing: 0 } },
    '5e': { type: { overprotectedChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 2, autonomy: 1, healing: 0 } },
    '5f': { type: { playfulChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 1, healing: 3 } },

    '6a': { type: { abandonedChild: 3 }, dim: { abandonment: 3, shame: 0, trust: 1, autonomy: 0, healing: 0 } },
    '6b': { type: { criticizedChild: 3 }, dim: { abandonment: 0, shame: 3, trust: 0, autonomy: 1, healing: 0 } },
    '6c': { type: { invisibleChild: 3 }, dim: { abandonment: 1, shame: 1, trust: 0, autonomy: 0, healing: 0 } },
    '6d': { type: { parentifiedChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 1, autonomy: 3, healing: 0 } },
    '6e': { type: { overprotectedChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 3, autonomy: 0, healing: 0 } },
    '6f': { type: { playfulChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 1, healing: 3 } },

    '7a': { type: { abandonedChild: 3 }, dim: { abandonment: 3, shame: 1, trust: 1, autonomy: 0, healing: 0 } },
    '7b': { type: { criticizedChild: 3 }, dim: { abandonment: 0, shame: 3, trust: 1, autonomy: 0, healing: 0 } },
    '7c': { type: { invisibleChild: 3 }, dim: { abandonment: 1, shame: 2, trust: 1, autonomy: 0, healing: 0 } },
    '7d': { type: { parentifiedChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 3, healing: 0 } },
    '7e': { type: { overprotectedChild: 3 }, dim: { abandonment: 1, shame: 0, trust: 3, autonomy: 0, healing: 0 } },
    '7f': { type: { playfulChild: 3 }, dim: { abandonment: 0, shame: 0, trust: 0, autonomy: 0, healing: 3 } }
  };

  const TYPE_ORDER = ['abandonedChild', 'criticizedChild', 'invisibleChild', 'parentifiedChild', 'overprotectedChild', 'playfulChild'];
  const DIMENSION_KEYS = ['abandonment', 'shame', 'trust', 'autonomy', 'healing'];
  const OPTION_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f'];

  const CHILD_TYPES = {
    abandonedChild:     { promptKey: 'prompt', color: '#e8913a' },
    criticizedChild:    { promptKey: 'prompt', color: '#ef4444' },
    invisibleChild:     { promptKey: 'prompt', color: '#8b5cf6' },
    parentifiedChild:   { promptKey: 'prompt', color: '#0ea5e9' },
    overprotectedChild: { promptKey: 'prompt', color: '#10b981' },
    playfulChild:       { promptKey: 'prompt', color: '#f59e0b' }
  };

  const PERCENTILES = {
    abandonedChild: 18, criticizedChild: 22, invisibleChild: 16,
    parentifiedChild: 14, overprotectedChild: 15, playfulChild: 15
  };

  class InnerChildApp {
    constructor() {
      this.current = 0;
      this.answers = [];
      this.t = (k) => (window.__i18n && window.__i18n.t) ? window.__i18n.t(k) : k;
      this.init();
    }

    init() {
      this.cacheDOM();
      this.bindEvents();
      this.updateSocialProof();
    }

    cacheDOM() {
      this.screens = {
        intro: document.getElementById('intro-screen'),
        question: document.getElementById('question-screen'),
        analyzing: document.getElementById('analyzing-screen'),
        result: document.getElementById('result-screen')
      };
      this.startBtn = document.getElementById('start-btn');
      this.retryBtn = document.getElementById('retry-btn');
      this.progressFill = document.getElementById('progress-fill');
      this.progressText = document.getElementById('progress-text');
      this.questionTitle = document.getElementById('question-title');
      this.optionsContainer = document.getElementById('options-container');
    }

    bindEvents() {
      this.startBtn.addEventListener('click', () => this.startQuiz());
      this.retryBtn.addEventListener('click', () => this.restart());
      document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', () => this.share(btn.dataset.platform));
      });
    }

    updateSocialProof() {
      const el = document.getElementById('social-proof-count');
      if (el) {
        const base = 24837;
        const days = Math.floor((Date.now() - new Date('2026-03-23').getTime()) / 86400000);
        el.textContent = (base + Math.max(0, days) * 47 + Math.floor(Math.random() * 20)).toLocaleString();
      }
    }

    show(name) {
      Object.values(this.screens).forEach(s => s.classList.remove('active'));
      this.screens[name].classList.add('active');
    }

    startQuiz() {
      this.current = 0;
      this.answers = [];
      this.show('question');
      this.renderQuestion();
    }

    renderQuestion() {
      const pct = ((this.current) / QUESTIONS) * 100;
      this.progressFill.style.width = pct + '%';
      this.progressText.textContent = `${this.current + 1} / ${QUESTIONS}`;
      this.questionTitle.textContent = this.t(`question.${this.current}`);

      this.optionsContainer.innerHTML = '';
      for (let i = 0; i < OPTIONS; i++) {
        const letter = OPTION_LETTERS[i];
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = this.t(`question.${this.current}${letter}`);
        btn.addEventListener('click', () => this.selectOption(letter));
        this.optionsContainer.appendChild(btn);
      }
    }

    selectOption(letter) {
      this.answers.push(`${this.current}${letter}`);
      this.current++;
      if (this.current < QUESTIONS) {
        this.renderQuestion();
      } else {
        this.showAnalyzing();
      }
    }

    showAnalyzing() {
      this.show('analyzing');
      const steps = ['scanning', 'mapping', 'integrating', 'complete'];
      const dots = document.querySelectorAll('.analyze-dot');
      const label = document.getElementById('analyze-label');

      steps.forEach((step, i) => {
        setTimeout(() => {
          if (dots[i]) dots[i].classList.add('active');
          if (label) label.textContent = this.t(`analyzing.${step}`);
          if (i === steps.length - 1) {
            setTimeout(() => this.calculateResult(), 600);
          }
        }, i * 800);
      });
    }

    calculateResult() {
      const typeScores = {};
      const dimScores = {};
      TYPE_ORDER.forEach(t => typeScores[t] = 0);
      DIMENSION_KEYS.forEach(d => dimScores[d] = 0);

      this.answers.forEach(key => {
        const entry = SCORE_MAP[key];
        if (!entry) return;
        Object.entries(entry.type).forEach(([t, v]) => typeScores[t] += v);
        Object.entries(entry.dim).forEach(([d, v]) => dimScores[d] += v);
      });

      const maxType = TYPE_ORDER.reduce((a, b) => typeScores[a] >= typeScores[b] ? a : b);
      const maxDim = Math.max(...DIMENSION_KEYS.map(k => dimScores[k])) || 1;

      this.showResult(maxType, typeScores, dimScores, maxDim);
    }

    showResult(type, typeScores, dimScores, maxDim) {
      this.show('result');

      // Store for download
      this.currentResultType = type;
      this.currentResultTypeData = CHILD_TYPES[type];
      this.currentDimPcts = {};

      const typeName = this.t(`type.${type}.name`);
      document.getElementById('result-type-name').textContent = typeName;
      document.getElementById('result-tagline').textContent = this.t(`type.${type}.tagline`);
      document.getElementById('result-description').textContent = this.t(`type.${type}.description`);

      document.getElementById('result-trait1').textContent = this.t(`type.${type}.trait1`);
      document.getElementById('result-trait2').textContent = this.t(`type.${type}.trait2`);
      document.getElementById('result-trait3').textContent = this.t(`type.${type}.trait3`);

      // Healing affirmation
      const affirmationText = document.getElementById('affirmation-text');
      if (affirmationText) {
        affirmationText.textContent = this.t(`type.${type}.prompt`);
      }

      // Percentile
      const pctEl = document.getElementById('result-percentile');
      if (pctEl) {
        const pct = PERCENTILES[type] || 16;
        pctEl.textContent = this.t('result.percentile')
          .replace('{pct}', pct + '%')
          .replace('{type}', typeName);
      }

      // Dimension scores
      DIMENSION_KEYS.forEach(key => {
        const bar = document.getElementById(`bar-${key}`);
        const val = document.getElementById(`val-${key}`);
        if (bar && val) {
          const pct = Math.round((dimScores[key] / maxDim) * 100);
          this.currentDimPcts[key] = pct;
          bar.style.width = pct + '%';
          val.textContent = pct + '%';
        }
      });

      this.drawRadarChart(dimScores, maxDim);
      this.createConfetti();

      if (typeof gtag === 'function') {
        gtag('event', 'quiz_complete', { event_category: 'inner_child_test', event_label: type });
      }
    }

    drawRadarChart(dimScores, maxDim) {
      const canvas = document.getElementById('radar-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const W = canvas.width = 280;
      const H = canvas.height = 280;
      const cx = W / 2, cy = H / 2, R = 110;

      ctx.clearRect(0, 0, W, H);

      const n = DIMENSION_KEYS.length;
      const angle = (2 * Math.PI) / n;
      const startAngle = -Math.PI / 2;

      // Grid
      for (let ring = 1; ring <= 4; ring++) {
        const r = (R / 4) * ring;
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
          const a = startAngle + i * angle;
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(232,145,58,0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Axes + labels
      DIMENSION_KEYS.forEach((key, i) => {
        const a = startAngle + i * angle;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a));
        ctx.strokeStyle = 'rgba(232,145,58,0.2)';
        ctx.stroke();

        const lx = cx + (R + 22) * Math.cos(a);
        const ly = cy + (R + 22) * Math.sin(a);
        ctx.fillStyle = '#a8a8a0';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.t(`metric.${key}`), lx, ly);
      });

      // Data polygon
      ctx.beginPath();
      DIMENSION_KEYS.forEach((key, i) => {
        const v = (dimScores[key] / maxDim) * R;
        const a = startAngle + i * angle;
        const x = cx + v * Math.cos(a);
        const y = cy + v * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fillStyle = 'rgba(232,145,58,0.2)';
      ctx.fill();
      ctx.strokeStyle = '#e8913a';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Data points
      DIMENSION_KEYS.forEach((key, i) => {
        const v = (dimScores[key] / maxDim) * R;
        const a = startAngle + i * angle;
        ctx.beginPath();
        ctx.arc(cx + v * Math.cos(a), cy + v * Math.sin(a), 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#e8913a';
        ctx.fill();
      });
    }

    createConfetti() {
      const container = document.getElementById('result-screen');
      const colors = ['#e8913a', '#f59e0b', '#fbbf24', '#fcd34d', '#d97706', '#92400e'];
      for (let i = 0; i < 40; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + '%';
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDelay = Math.random() * 2 + 's';
        c.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(c);
        setTimeout(() => c.remove(), 4000);
      }
    }

    share(platform) {
      const type = document.getElementById('result-type-name').textContent;
      const text = this.t('share.text').replace('{type}', type);
      const url = window.location.href.split('?')[0];
      const encoded = encodeURIComponent(text + '\n' + url);

      switch (platform) {
        case 'download':
          this.downloadResultCard();
          break;
        case 'twitter':
          window.open('https://twitter.com/intent/tweet?text=' + encoded, '_blank');
          break;
        case 'facebook':
          window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&quote=' + encodeURIComponent(text), '_blank');
          break;
        case 'kakao':
          if (window.Kakao && window.Kakao.Share) {
            window.Kakao.Share.sendDefault({
              objectType: 'text', text: text,
              link: { mobileWebUrl: url, webUrl: url }
            });
          }
          break;
        case 'copy':
          navigator.clipboard.writeText(text + '\n' + url).then(() => {
            const btn = document.querySelector('[data-platform="copy"]');
            if (btn) { const orig = btn.textContent; btn.textContent = '✓'; setTimeout(() => btn.textContent = orig, 1500); }
          });
          break;
      }
      if (typeof gtag === 'function') {
        gtag('event', 'share', { method: platform, content_type: 'inner_child_test' });
      }
    }

    downloadResultCard() {
      if (!this.currentResultType || typeof ResultCard === 'undefined') return;

      const typeName = this.t(`type.${this.currentResultType}.name`);
      const typeEmoji = this.currentResultTypeData.emoji || '🧸';

      const dimensions = DIMENSION_KEYS.map(key => ({
        label: this.t(`metric.${key}`),
        pct: this.currentDimPcts[key] || 0,
        color: '#e8913a'
      }));

      ResultCard.download({
        appName: 'Inner Child Test',
        typeName: typeName,
        typeEmoji: typeEmoji,
        dimensions: dimensions,
        primaryColor: '#e8913a',
        tagline: 'dopabrain.com/inner-child-test'
      });
    }

    restart() {
      this.current = 0;
      this.answers = [];
      this.show('intro');
    }
  }

  // Wait for i18n, then init
  function boot() {
    try { new InnerChildApp(); } catch (e) { console.error('InnerChildApp init error:', e); }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
