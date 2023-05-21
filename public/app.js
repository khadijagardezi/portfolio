document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
  });

  function handleNavLinkClick(event) {
    event.preventDefault();

    const targetSectionId = this.getAttribute('href');
    const targetSection = targetSectionId.startsWith('#')
      ? document.querySelector(targetSectionId)
      : document.getElementById(targetSectionId.substring(1));

    if (targetSection) {
      // Scroll smoothly to the target section
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Additional logic for updating the URL
      history.pushState(null, null, targetSectionId);
    }
  }
});
