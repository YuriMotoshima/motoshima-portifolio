document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const indicator = document.querySelector('.nav-indicator');

  function handleIndicator(el) {
      navItems.forEach(item => {
          item.classList.remove('is-active');
          item.removeAttribute('style');
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute('active-color');

      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color');
  }

  navItems.forEach((item) => {
      item.addEventListener('click', (e) => {
          e.preventDefault();
          handleIndicator(e.target);

          // Scroll to the corresponding section
          const targetId = e.target.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });

  window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 100;
      navItems.forEach(item => {
          const section = document.querySelector(item.getAttribute('href'));
          if (
              section.offsetTop <= scrollPos &&
              section.offsetTop + section.offsetHeight > scrollPos
          ) {
              handleIndicator(item);
          }
      });
  });

  // Initial indicator setup
  handleIndicator(document.querySelector('.nav-item.is-active'));

});

// botoes que direcionam para o github
document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', function() {
        const githubUrl = this.getAttribute('data-github');
        window.open(githubUrl, '_blank');
    });
});
