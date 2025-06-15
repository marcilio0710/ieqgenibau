function createMobileNavbar(mobileMenuSelector, navListSelector, navLinksSelector) {
  const mobileMenu = document.querySelector(mobileMenuSelector);
  const navList = document.querySelector(navListSelector);
  const navLinks = document.querySelectorAll(navLinksSelector);
  const activeClass = "ativo";

  function animateLinks() {
    navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
  }

  function handleClick() {
    if (navList.classList.contains(activeClass)) {
      closeMenuInstantly();
    } else {
      // Abrir com transição padrão (definida no CSS)
      navList.classList.add(activeClass);
      mobileMenu.classList.add(activeClass);
      animateLinks();
      document.addEventListener("click", closeOnClickOutside);
      document.addEventListener("touchend", closeOnClickOutside);
    }
  }

  function closeMenuInstantly() {
    // 🔧 Desativa transição antes de remover classe
    navList.style.transition = "none";
    mobileMenu.style.transition = "none";

    navList.classList.remove(activeClass);
    mobileMenu.classList.remove(activeClass);
    animateLinks();

    // força repaint para aplicar o estado sem transição
    void navList.offsetHeight;

    // restaura transição padrão
    navList.style.transition = "";
    mobileMenu.style.transition = "";

    document.removeEventListener("click", closeOnClickOutside);
    document.removeEventListener("touchend", closeOnClickOutside);
  }

  function closeOnClickOutside(event) {
    if (!navList.contains(event.target) && !mobileMenu.contains(event.target)) {
      closeMenuInstantly();
    }
  }

  function addClickEvent() {
    mobileMenu.addEventListener("click", e => {
      e.stopPropagation(); // evita disparo no document ao abrir
      handleClick();
    });
  }

  function init() {
    if (mobileMenu) addClickEvent();
  }

  init();
}

createMobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
