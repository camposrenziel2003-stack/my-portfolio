(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', () => {
      if (note) {
        note.textContent = 'Sending your message...';
      }
    });
  }

  // Simple active section highlighting in the header nav.
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && navLinks.length && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute('id');

          navLinks.forEach((a) => {
            const href = a.getAttribute('href');
            a.classList.toggle('is-active', href === `#${id}`);
          });
        });
      },
      { root: null, threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();