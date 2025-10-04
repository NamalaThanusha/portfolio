// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', function(e) {
		const targetId = this.getAttribute('href');
		if (targetId.startsWith('#')) {
			e.preventDefault();
			document.querySelector(targetId).scrollIntoView({
				behavior: 'smooth'
			});
		}
	});
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu after click (on mobile)
      const navLinks = document.getElementById('nav-list');
      const hamburger = document.querySelector('.hamburger');
      if (window.innerWidth < 768 && navLinks && hamburger) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Hamburger mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-list');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });
}
			valid = false;
