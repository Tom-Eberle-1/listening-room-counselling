document.addEventListener('DOMContentLoaded', function() {

  // --- MOBILE NAV ---
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }

  // --- SCROLL REVEAL ---
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
}, { threshold: 0.05, rootMargin: '0px 0px -80px 0px' });

  revealEls.forEach(function(el) {
    revealObserver.observe(el);
  });

  // --- NAV SCROLL BEHAVIOUR ---
  const nav = document.querySelector('nav');
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 80) {
      nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  });

  // --- PARALLAX ---
  const parallaxSections = document.querySelectorAll('.parallax-section');
  window.addEventListener('scroll', function() {
    parallaxSections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      const speed = 0.3;
      const offset = (window.innerHeight - rect.top) * speed;
      const bg = section.querySelector('.parallax-bg');
      if (bg) {
        bg.style.transform = 'translateY(' + (-offset * 0.3) + 'px)';
      }
    });
  });

  // --- STAGGER CHILDREN ---
  document.querySelectorAll('.stagger-children').forEach(function(parent) {
    Array.from(parent.children).forEach(function(child, i) {
      child.classList.add('reveal', 'reveal-up');
      child.style.transitionDelay = (i * 0.12) + 's';
    });
  });

});