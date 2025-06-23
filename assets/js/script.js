const menu = document.querySelector('.mobile-menu'),
      nav = document.querySelector('.nav-list'),
      items = nav.querySelectorAll('li');

menu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  nav.classList.toggle('ativo');
  document.body.classList.toggle('overlay-ativo');

  items.forEach((el, i) => {
    el.style.animation = el.style.animation
      ? '' 
      : `navLinkFade 0.5s ease forwards ${i/7 + 0.3}s`;
  });
});
alert('Seja bem-vindo!')
