/* ==========================================================================
   Dubai Marble Polishing - Main JavaScript File
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');

  if (menuBtn && mobileNav && mobileClose) {
    menuBtn.addEventListener('click', () => mobileNav.classList.add('open'));
    mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  }

  // Sticky Navbar Adaptation on Scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Stats Counter Animation
  const statsEl = document.querySelector('.stats-band');
  const counterEls = document.querySelectorAll('.counter');
  let countersStarted = false;

  function animateCounters() {
    if (countersStarted) return;
    counterEls.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.textContent = Math.floor(current).toLocaleString();
      }, 16);
    });
    countersStarted = true;
  }

  if (statsEl && counterEls.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    }, { threshold: 0.3 });
    statsObserver.observe(statsEl);
  }

  // FAQ Accordions
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // WhatsApp Floating Button auto show bubble
  const waBubble = document.getElementById('waBubble');
  const waBtn = document.getElementById('waBtn');
  if (waBubble && waBtn) {
    setTimeout(() => {
      waBubble.classList.add('show');
    }, 3500);
    waBtn.addEventListener('click', () => {
      waBubble.classList.remove('show');
    });
  }

  // Gallery Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      galleryCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Toast notification helper
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Global Form Handler
function handleFormSubmit(e, formName) {
  e.preventDefault();
  showToast('Thank you! Your request has been received. Our team will contact you within 30 minutes.');
  e.target.reset();
}
