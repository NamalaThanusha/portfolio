// email.js
import { saveContactToFirestore } from "./db.js";  // ✅ import Firestore function

window.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS
  if (window.emailjs) {
    emailjs.init("ACaCjBCQvldxW_mUg"); // your public key
  }

  // Contact form submission with validation and EmailJS
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {  // ✅ make async
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

      try {
        // ✅ First save to Firestore
        await saveContactToFirestore(name, email, message);
        console.log("✅ Data saved to Firestore");

        // ✅ Then send EmailJS
        await emailjs.sendForm("service_tulu9jb", "template_mz2hvx5", this);
        alert("✅ Message sent successfully and saved to database!");
        contactForm.reset();
      } catch (err) {
        console.error("❌ Error submitting form:", err);
        alert("❌ Something went wrong. Please try again.");
      }
    });
  }
});
