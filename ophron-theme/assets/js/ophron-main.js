/**
 * OPHRON — Core Interactive Engine for WordPress
 * Handles Lenis Smooth Scroll, Viewport Reveal Observers, Animated Counters,
 * Filter Tabs, Modals, Mobile Menu, and Singapore Live Clock.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Singapore Time in Nav
  const timeEl = document.getElementById('ophron-live-time');
  if (timeEl) {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' };
      timeEl.textContent = now.toLocaleTimeString('en-US', options) + ' IST';
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  // 2. Navigation Scroll State
  const navHeader = document.getElementById('ophron-navbar');
  const onScroll = () => {
    if (!navHeader) return;
    if (window.scrollY > 24) {
      navHeader.classList.add('bg-[#EDE5DA]/95', 'backdrop-blur-md', 'shadow-md', 'py-3');
      navHeader.classList.remove('bg-transparent', 'py-5');
    } else {
      navHeader.classList.remove('bg-[#EDE5DA]/95', 'backdrop-blur-md', 'shadow-md', 'py-3');
      navHeader.classList.add('bg-transparent', 'py-5');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.getElementById('ophron-mobile-toggle');
  const mobileMenu = document.getElementById('ophron-mobile-menu');
  const mobileClose = document.getElementById('ophron-mobile-close');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('#ophron-mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  });

  // 4. Viewport Reveal Observers
  const observerOptions = { threshold: 0.08, rootMargin: '0px 0px -30px 0px' };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const observeElements = () => {
    const revealSelectors = [
      '.reveal', '.reveal-stagger', '.mask-up', '.scroll-fade',
      '.scroll-fade-stagger', '.split-line-headline', '.scroll-reveal',
      '.scroll-reveal-left', '.scroll-reveal-right', '.scroll-reveal-down',
      '.scroll-reveal-scale', '.scroll-reveal-stagger', '.curtain-reveal', '.hr-expand'
    ];
    document.querySelectorAll(revealSelectors.join(', ')).forEach(el => {
      if (!el.classList.contains('in')) {
        revealObserver.observe(el);
      }
    });
  };
  observeElements();

  // 5. Animated Number Counters
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target') || '0');
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const duration = parseInt(el.getAttribute('data-counter-duration') || '1400', 10);
        let startTime = null;

        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          // Ease-out expo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = (progress * target).toFixed(target % 1 === 0 ? 0 : 1);
          
          el.textContent = `${prefix}${currentVal}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = `${prefix}${target}${suffix}`;
          }
        };

        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('[data-counter-target]').forEach(el => {
    countObserver.observe(el);
  });

  // 6. Interactive Tab Switching (Solutions / Pillars & Services)
  const tabButtons = document.querySelectorAll('[data-pillar-tab]');
  const tabPanels = document.querySelectorAll('[data-pillar-panel]');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetPillar = button.getAttribute('data-pillar-tab');

      tabButtons.forEach(btn => {
        btn.classList.remove('active-pillar', 'bg-[#032147]', 'text-[#EDE5DA]', 'border-[#032147]');
        btn.classList.add('bg-transparent', 'text-[#032147]', 'border-[#032147]/20');
      });

      button.classList.add('active-pillar', 'bg-[#032147]', 'text-[#EDE5DA]', 'border-[#032147]');
      button.classList.remove('bg-transparent', 'text-[#032147]', 'border-[#032147]/20');

      tabPanels.forEach(panel => {
        if (panel.getAttribute('data-pillar-panel') === targetPillar) {
          panel.classList.remove('hidden');
          panel.classList.add('animate-smoothTabFade');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('animate-smoothTabFade');
        }
      });
    });
  });

  // 7. Interactive Modals (Service Detail & Article Reader)
  const serviceModal = document.getElementById('ophron-service-modal');
  const readerModal = document.getElementById('ophron-reader-modal');

  // Open Service Modal
  document.querySelectorAll('[data-open-service]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = trigger.getAttribute('data-open-service');
      const title = trigger.getAttribute('data-service-title') || 'Specialized Service';
      const desc = trigger.getAttribute('data-service-desc') || '';
      const tag = trigger.getAttribute('data-service-tag') || 'SOP Operational Standard';

      if (serviceModal) {
        const modalTitle = serviceModal.querySelector('#modal-service-title');
        const modalDesc = serviceModal.querySelector('#modal-service-desc');
        const modalTag = serviceModal.querySelector('#modal-service-tag');

        if (modalTitle) modalTitle.textContent = title;
        if (modalDesc) modalDesc.textContent = desc;
        if (modalTag) modalTag.textContent = tag;

        serviceModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  // Close Modals
  document.querySelectorAll('.ophron-close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      if (serviceModal) serviceModal.classList.add('hidden');
      if (readerModal) readerModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (serviceModal) serviceModal.classList.add('hidden');
      if (readerModal) readerModal.classList.add('hidden');
      if (mobileMenu) mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });

  // 8. Smooth Anchor Navigation with Offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const offset = 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
