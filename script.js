// ============================================
// SCROLL SPY & NAVIGATION
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

function updateActiveNav() {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 100) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === currentSection) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
document.addEventListener('DOMContentLoaded', updateActiveNav);

// ============================================
// SMOOTH SCROLLING FOR NAV LINKS
// ============================================

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-section');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const targetPosition = targetSection.offsetTop - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});

// ============================================
// SIDEBAR RESPONSIVE BEHAVIOR
// ============================================

const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

function updateSidebarPosition() {
  if (window.innerWidth <= 768) {
    sidebar.style.position = 'fixed';
    sidebar.style.zIndex = '1000';
  } else {
    sidebar.style.position = 'fixed';
  }
}

window.addEventListener('resize', updateSidebarPosition);
document.addEventListener('DOMContentLoaded', updateSidebarPosition);

// ============================================
// SMOOTH FADE-IN ON SCROLL
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe skill cards, service cards, and timeline items
document.querySelectorAll('.skill-card, .service-card, .timeline-item').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ============================================
// ACTIVE LINK HIGHLIGHTING ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash) {
    const link = document.querySelector(`[data-section="${hash.substring(1)}"]`);
    if (link) {
      link.classList.add('active');
    }
  }
});

// ============================================
// CONTACT LINK HANDLERS
// ============================================

const contactMethods = document.querySelectorAll('.contact-method');

contactMethods.forEach((method) => {
  const href = method.getAttribute('href');

  if (href) {
    method.addEventListener('click', (e) => {
      if (href.startsWith('mailto:') || href.startsWith('http')) {
        // Allow default behavior for email and external links
      } else {
        e.preventDefault();
      }
    });
  }
});

// ============================================
// SOCIAL LINK HANDLERS
// ============================================

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach((link) => {
  link.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      link.click();
    }
  });
});

// ============================================
// MOBILE MENU BEHAVIOR
// ============================================

const navContainer = document.querySelector('.nav');

if (navContainer) {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Close any open mobile menu if exists
      if (window.innerWidth <= 768) {
        // This would be for mobile menu toggle if needed
      }
    });
  });
}

// ============================================
// INTERSECTION OBSERVER FOR PARALLAX TEXT
// ============================================

const sectionTitles = document.querySelectorAll('.section-title');

const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sectionTitles.forEach((title) => {
  title.style.opacity = '0';
  title.style.transform = 'translateX(-20px)';
  title.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  titleObserver.observe(title);
});

// ============================================
// HANDLE HASH NAVIGATION ON PAGE LOAD
// ============================================

window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const targetId = hash.substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      setTimeout(() => {
        const targetPosition = targetSection.offsetTop - 100;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        updateActiveNav();
      }, 100);
    }
  }
});

// ============================================
// ACCESSIBILITY - KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
  // Skip to main content with Shift + Alt + M
  if (e.shiftKey && e.altKey && e.key === 'm') {
    document.querySelector('.main-content').focus();
    document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
  }

  // Navigate with arrow keys in nav
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      const nextLink = activeLink.nextElementSibling;
      if (nextLink && nextLink.classList.contains('nav-link')) {
        e.preventDefault();
        nextLink.focus();
        nextLink.click();
      }
    }
  }

  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      const prevLink = activeLink.previousElementSibling;
      if (prevLink && prevLink.classList.contains('nav-link')) {
        e.preventDefault();
        prevLink.focus();
        prevLink.click();
      }
    }
  }
});

// ============================================
// DEBOUNCE FUNCTION FOR RESIZE EVENTS
// ============================================

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedUpdateSidebar = debounce(() => {
  updateSidebarPosition();
}, 250);

window.addEventListener('resize', debouncedUpdateSidebar);

// ============================================
// SMOOTH ANIMATION ON HOVER FOR CARDS
// ============================================

const cards = document.querySelectorAll('.skill-card, .service-card');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
