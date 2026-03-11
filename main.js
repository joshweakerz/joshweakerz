window.onload = function () {

  AOS.init({
    once: false,
    duration: 800,
    easing: 'ease-in-out'
  });

  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const section = document.querySelector(targetId);
      if (!section) return;

      section.scrollIntoView({ behavior: 'smooth' });

      const animation = section.getAttribute('data-aos');
      const delay = section.getAttribute('data-aos-delay');
      const duration = section.getAttribute('data-aos-duration');

      section.removeAttribute('data-aos');
      void section.offsetWidth;

      section.setAttribute('data-aos', animation);
      section.setAttribute('data-aos-delay', delay);
      section.setAttribute('data-aos-duration', duration);

      AOS.refresh();
    });
  });

};
