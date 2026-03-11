// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", function () {

  // Initialize AOS
  AOS.init({
    once: false,
    duration: 800,
    easing: "ease-in-out"
  });

  // Smooth scroll + replay animation on navbar clicks
  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Only handle anchor links to sections
      if (!targetId.startsWith("#")) return;

      e.preventDefault();

      const section = document.querySelector(targetId);
      if (!section) return;

      // Smooth scroll
      section.scrollIntoView({ behavior: "smooth" });

      // Replay AOS animation
      const animation = section.getAttribute("data-aos");
      const delay = section.getAttribute("data-aos-delay");
      const duration = section.getAttribute("data-aos-duration");

      if (animation) {
        section.removeAttribute("data-aos");
        void section.offsetWidth; // force reflow
        section.setAttribute("data-aos", animation);
        section.setAttribute("data-aos-delay", delay);
        section.setAttribute("data-aos-duration", duration);

        // Refresh AOS
        AOS.refresh();
      }
    });
  });

});
