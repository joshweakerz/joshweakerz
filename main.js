document.addEventListener("DOMContentLoaded", function () {

  // 1️⃣ Initialize AOS
  AOS.init({
    once: false,
    duration: 800,
    easing: "ease-in-out"
  });

  // 2️⃣ Smooth scroll + replay AOS animations on navbar clicks
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId.startsWith("#")) return; // ignore external links
      e.preventDefault();

      const section = document.querySelector(targetId);
      if (!section) return;

      // Smooth scroll
      section.scrollIntoView({ behavior: "smooth" });

      // Replay AOS animation if it exists
      const animation = section.getAttribute("data-aos");
      const delay = section.getAttribute("data-aos-delay");
      const duration = section.getAttribute("data-aos-duration");

      if (animation) {
        section.removeAttribute("data-aos");
        void section.offsetWidth; // force reflow
        section.setAttribute("data-aos", animation);
        if (delay) section.setAttribute("data-aos-delay", delay);
        if (duration) section.setAttribute("data-aos-duration", duration);
        AOS.refresh();
      }
    });
  });

  // 3️⃣ Initialize particles.js safely
  if (window.particlesJS) {
    particlesJS.load('particles-js', 'particles-config.js', function() {
      console.log('Particles.js loaded successfully');
    });
  }

});
