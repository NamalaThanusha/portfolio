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

// Initialize EmailJS
emailjs.init("ACaCjBCQvldxW_mUg"); // your public key

// Contact form submission with validation and EmailJS
const contactForm = document.getElementById('contact-form');
if (contactForm) {
	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();

		const name = document.getElementById('name').value.trim();
		const email = document.getElementById('email').value.trim();
		const message = document.getElementById('message').value.trim();
		let valid = true;

		// Validation
		if (!name) {
			valid = false;
			document.getElementById('name').classList.add('input-error');
		} else {
			document.getElementById('name').classList.remove('input-error');
		}

		if (!email) {
			valid = false;
			document.getElementById('email').classList.add('input-error');
		} else {
			document.getElementById('email').classList.remove('input-error');
		}

		if (!message) {
			valid = false;
			document.getElementById('message').classList.add('input-error');
		} else {
			document.getElementById('message').classList.remove('input-error');
		}

		if (!valid) {
			alert('Please fill in all fields.');
			return;
		}

		// EmailJS submission
		emailjs.sendForm("service_tulu9jb", "template_mz2hvx5", this)
			.then(() => {
				alert("✅ Message sent successfully!");
				contactForm.reset();
			}, (error) => {
				console.error("FAILED...", error);
				alert("❌ Failed to send. Please try again.");
			});
	});
}
