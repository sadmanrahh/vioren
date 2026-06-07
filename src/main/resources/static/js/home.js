document.addEventListener("DOMContentLoaded", function () {

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// HERO SLIDER
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
const slideNumEl = document.getElementById('slideNum');

let current = 0;
let autoTimer;

function goTo(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');

  current = (n + slides.length) % slides.length;

  slides[current].classList.add('active');
  dots[current].classList.add('active');

  slideNumEl.textContent = String(current + 1).padStart(2, '0');
}

function startAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => goTo(current + 1), 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goTo(parseInt(dot.dataset.index));
    startAuto();
  });
});

startAuto();

// FEATURE SLIDER
const track = document.getElementById('featuresTrack');
const cards = track.querySelectorAll('.feature-card');

let featIndex = 0;

function getCardWidth() {
  return cards[0].getBoundingClientRect().width + 32;
}

function updateFeatTrack() {
  const w = getCardWidth();
  track.style.transform = `translateX(-${featIndex * w}px)`;
}

document.getElementById('featPrev').addEventListener('click', () => {
  featIndex = Math.max(0, featIndex - 1);
  updateFeatTrack();
});

document.getElementById('featNext').addEventListener('click', () => {
  featIndex = Math.min(cards.length - 1, featIndex + 1);
  updateFeatTrack();
});

// SCROLL REVEAL
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

});