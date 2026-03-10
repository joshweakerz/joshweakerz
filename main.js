// ================================
// Portfolio Custom JS
// ================================
window.onload = function() {
  // ================================
  // 1️⃣ Initialize AOS
  // ================================
  AOS.init({
    once: false,       // animations can repeat
    duration: 800,     // default animation duration in ms
    easing: 'ease-in-out'
  });

  // ================================
  // 2️⃣ Smooth scroll + AOS replay for navbar links
  // ================================
  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();  // stop default jump
      const targetId = link.getAttribute('href');
      const section = document.querySelector(targetId);
      if (!section) return;

      // Smooth scroll
      section.scrollIntoView({ behavior: 'smooth' });

      // Replay AOS animation if section is already visible
      const animation = section.getAttribute('data-aos');
      const delay = section.getAttribute('data-aos-delay');
      const duration = section.getAttribute('data-aos-duration');

      // Only replay if data-aos exists
      if (animation) {
        section.removeAttribute('data-aos');
        void section.offsetWidth; // force reflow
        section.setAttribute('data-aos', animation);
        if (delay) section.setAttribute('data-aos-delay', delay);
        if (duration) section.setAttribute('data-aos-duration', duration);
        AOS.refresh();
      }
    });
  });

  // ================================
  // 3️⃣ Optional: future custom JS
  // ================================
};
