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
    navList.classList.toggle(activeClass);
    mobileMenu.classList.toggle(activeClass);
    animateLinks();

    // Adiciona listener para fechar ao clicar/tocar fora
    if (navList.classList.contains(activeClass)) {
      document.addEventListener("click", closeOnClickOutside);
      document.addEventListener("touchend", closeOnClickOutside);
    } else {
      document.removeEventListener("click", closeOnClickOutside);
      document.removeEventListener("touchend", closeOnClickOutside);
    }
  }

  function closeOnClickOutside(event) {
    // se o clique NÃO for no menu ou em qualquer link dentro
    if (
      !navList.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      navList.classList.remove(activeClass);
      mobileMenu.classList.remove(activeClass);
      animateLinks();
      document.removeEventListener("click", closeOnClickOutside);
      document.removeEventListener("touchend", closeOnClickOutside);
    }
  }

  function addClickEvent() {
    mobileMenu.addEventListener("click", e => {
      e.stopPropagation();   // evita fechar imediatamente ao abrir
      handleClick();
    });
  }

  function init() {
    if (mobileMenu) addClickEvent();
  }

  init();
}

createMobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
