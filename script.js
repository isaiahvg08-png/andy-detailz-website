// ===================== Mobile Nav Toggle =====================
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
const headerCta = document.querySelector('.header-cta');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  headerCta.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    headerCta.classList.remove('open');
  });
});

// ===================== Header shrink on scroll =====================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 10px 30px -15px rgba(0,0,0,0.6)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ===================== Footer year =====================
document.getElementById('year').textContent = new Date().getFullYear();

// ===================== Booking form =====================
const form = document.getElementById('booking-form');
const formNote = document.getElementById('form-note');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Basic client-side validation
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !phone || !email) {
    formNote.textContent = 'Please fill in your name, phone, and email.';
    formNote.classList.remove('success');
    return;
  }

  // NOTE: This form currently only validates on the client.
  // To actually receive bookings, connect it to a form backend
  // (e.g. Formspree, EmailJS, Netlify Forms) or your own server endpoint.
  formNote.textContent = 'Thanks! Your request has been received — we\'ll confirm shortly.';
  formNote.classList.add('success');
  form.reset();
}
