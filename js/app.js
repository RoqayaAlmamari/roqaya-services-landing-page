document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navList = document.getElementById('navbar__list');

  // Build the navigation dynamically
  sections.forEach(function (section) {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    const sectionId = section.getAttribute('id');
    const sectionName = section.getAttribute('data-nav');

    navLink.setAttribute('href', `#${sectionId}`);
    navLink.textContent = sectionName;

    navItem.classList.add('nav-item');
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });

  // Add an event listener for smooth scrolling
  navList.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.tagName === 'A') {
      const targetId = event.target.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the appropriate section
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });

  // Highlight the active section
  function highlightActiveSection() {
    const currentPosition = window.scrollY;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (currentPosition >= sectionTop - 200 && currentPosition < sectionTop + sectionHeight - 200) {
        section.classList.add('active-section');
        navList.querySelector(`a[href="#${section.getAttribute('id')}"]`).classList.add('active');
      } else {
        section.classList.remove('active-section');
        navList.querySelector(`a[href="#${section.getAttribute('id')}"]`).classList.remove('active');
      }
    });
  }

  // Scroll event listener to update the active section
  window.addEventListener('scroll', highlightActiveSection);

  // Initial call to highlight the active section on page load
  highlightActiveSection();
});
