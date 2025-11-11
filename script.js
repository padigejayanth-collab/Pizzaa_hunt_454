/* ===== PIZZA HUT MAIN PAGE SCRIPT ===== */

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to light theme
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.classList.add('dark');
  themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  themeToggle.classList.toggle('dark');
  
  // Change icon
  if (body.classList.contains('dark-theme')) {
    themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
    localStorage.setItem('theme', 'light');
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

// Add to cart button functionality
const dealButtons = document.querySelectorAll('.deal-btn');
dealButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});
