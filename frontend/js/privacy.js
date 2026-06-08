const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 40), { passive: true });
const tog = document.getElementById('navToggle');
const nl  = document.getElementById('navLinks');
tog.addEventListener('click', () => nl.classList.toggle('open'));
nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nl.classList.remove('open')));

/* Active TOC highlighting */
const sections = document.querySelectorAll('.doc-section[id]');
const tocLinks  = document.querySelectorAll('.toc-list a');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      tocLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.toc-list a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });
sections.forEach(s => io.observe(s));