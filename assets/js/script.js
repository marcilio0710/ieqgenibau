
function createMobileNavbar(mobileMenuSelector, navListSelector, navLinksSelector) {
  const mobileMenu = document.querySelector(mobileMenuSelector);
  const navList = document.querySelector(navListSelector);
  const navLinks = document.querySelectorAll(navLinksSelector);
  const activeClass = "ativo";

  function animateLinks() {
    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  function handleClick() {
    navList.classList.toggle(activeClass);
    mobileMenu.classList.toggle(activeClass);
    animateLinks();
  }

  function addClickEvent() {
    mobileMenu.addEventListener("click", handleClick);
  }

  function init() {
    if (mobileMenu) {
      addClickEvent();
    }
  }

  init(); 
}


createMobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");