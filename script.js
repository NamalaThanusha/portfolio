// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.hamburger');
	const navLinks = document.getElementById('nav-list');
	const header = document.querySelector('header');

	// Toggle hamburger menu
	if (hamburger) {
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			navLinks.classList.toggle('active');
		});
	}

	// Smooth scroll and close menu on link click
	document.querySelectorAll('.nav-links a').forEach(link => {
		link.addEventListener('click', function(e) {
			const targetId = this.getAttribute('href');
			if (targetId.startsWith('#')) {
				e.preventDefault();
				
				// Close mobile menu
				if (hamburger && navLinks) {
					hamburger.classList.remove('active');
					navLinks.classList.remove('active');
				}

				// Smooth scroll to section
				const target = document.querySelector(targetId);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth' });
				}
			}
		});
	});

	// Update active nav link on scroll
	window.addEventListener('scroll', updateActiveNavLink);

	// Add scroll effect to header
	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			header.classList.add('pf-scrolled');
		} else {
			header.classList.remove('pf-scrolled');
		}
	});
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
	const sections = document.querySelectorAll('section[id]');
	let current = '';

	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (pageYOffset >= sectionTop - 200) {
			current = section.getAttribute('id');
		}
	});

	document.querySelectorAll('.nav-links a').forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href') === `#${current}`) {
			link.classList.add('active');
		}
	});
}
