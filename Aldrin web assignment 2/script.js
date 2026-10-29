// Small JavaScript helpers for the FISAT CSE department site

// Mobile navigation toggle
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
	toggle.addEventListener('click', () => {
		const open = links.classList.toggle('open');
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
	});
}

// Current year in the footer
document.querySelectorAll('[data-year]').forEach((el) => {
	el.textContent = new Date().getFullYear();
});

// Front-end only enquiry form: show a thank-you message
const form = document.getElementById('enquiry-form');
if (form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const msg = document.getElementById('form-msg');
		if (msg) msg.textContent = 'Thank you! Your enquiry has been recorded (demo form, nothing is sent).';
		form.reset();
	});
}
