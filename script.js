const navbar = document.querySelector('.navbar');
const video = document.querySelector('.hero-video');
const videoControl = document.getElementById('videoControl');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

videoControl.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    videoControl.textContent = 'Pause video';
  } else {
    video.pause();
    videoControl.textContent = 'Play video';
  }
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thank you — your enquiry is ready to send.';
  contactForm.reset();
});
