function burger(burgerSelector, burgerMenuSelector, burgerItemsSelector) {
  const burger = burgerSelector || document.querySelector('.burger');
  const burgerMenu = burgerMenuSelector || document.querySelector('#burgerMenu');
  const burgerItems = burgerItemsSelector || document.querySelectorAll('.burger-menu__item');
  //const burgerOverlay = document.querySelector('.burger-menu-overlay');
  //const burgerList = document.querySelector('.burger-menu');

  function closeBurgerMenu(e) {
    if (e) {
      e.preventDefault();
      const targetLink = e.target.getAttribute('href');
      setTimeout(() => {
        window.location.href = targetLink;
      }, 500);
    }
    burgerMenu.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
    document.body.style.opacity = '1';
  }

  function openBurgerMenu() {
    burgerMenu.classList.add('open');
    burger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeBurgerMenu();

  burger.addEventListener('click', (e) => {
    if (burger.classList.contains('open')) {
      closeBurgerMenu();
    } else {
      openBurgerMenu();
    }
  });

  burgerItems.forEach(item => {
    item.addEventListener('click', closeBurgerMenu);
  });

  // burgerOverlay.addEventListener('click', (e) => {
  //   if (burgerMenu.classList.contains('open') && e.target !== burgerMenu) {
  //     closeBurgerMenu();
  //   }
  // })

  // window.onscroll = (e) => {
  //   if (burgerMenu.classList.contains('open')) {
  //     closeBurgerMenu();
  //   }
}

export default burger;