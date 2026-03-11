document.addEventListener("DOMContentLoaded", function () {

  // 1️⃣ Initialize AOS
  AOS.init({
    once: false,       // animations can repeat
    duration: 800,
    easing: "ease-in-out"
  });

  // 2️⃣ Smooth scroll + replay animation on navbar clicks
  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId.startsWith("#")) return;

      e.preventDefault();
      const section = document.querySelector(targetId);
      if (!section) return;

      // Smooth scroll
      section.scrollIntoView({ behavior: "smooth" });

      // Force replay of AOS animation
      const animation = section.getAttribute("data-aos");
      if (animation) {
        section.removeAttribute("data-aos");
        void section.offsetWidth; // force reflow
        section.setAttribute("data-aos", animation);
        AOS.refreshHard(); // ensures animation replays
      }
    });
  });

  // 3️⃣ Replay animations when scrolling up
  let lastScroll = 0;
  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;

    // If scrolling up
    if (currentScroll < lastScroll) {
      document.querySelectorAll("[data-aos]").forEach(el => {
        el.removeAttribute("data-aos");
        void el.offsetWidth; // force reflow
        el.setAttribute("data-aos", el.getAttribute("data-aos") || "fade-up");
      });
      AOS.refreshHard();
    }

    lastScroll = currentScroll;
  });

});
