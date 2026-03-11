document.addEventListener("DOMContentLoaded", function () {

  AOS.init({
    once: false,
    duration: 800,
    easing: "ease-in-out"
  });

  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {

    link.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      if (!targetId.startsWith("#")) return;

      e.preventDefault();

      const section = document.querySelector(targetId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          AOS.refresh();
        }, 500);
      }

    });

  });

});
