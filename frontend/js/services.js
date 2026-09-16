/* Navbar scroll */
const nb = document.getElementById('navbar');
window.addEventListener('scroll', () => nb.classList.toggle('scrolled', scrollY > 40), { passive: true });

/* Mobile nav */
const tog = document.getElementById('navToggle');
const nl  = document.getElementById('navLinks');

function setHamburger(isOpen) {
  const spans = tog.querySelectorAll('span');
  spans[0].style.transform = isOpen ? 'translateY(6.5px) rotate(45deg)' : '';
  spans[1].style.opacity   = isOpen ? '0' : '';
  spans[2].style.transform = isOpen ? 'translateY(-6.5px) rotate(-45deg)' : '';
}

tog.addEventListener('click', () => {
  const isOpen = nl.classList.toggle('open');
  setHamburger(isOpen);
});
nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nl.classList.remove('open');
  setHamburger(false);
}));

/* Scroll reveal */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
