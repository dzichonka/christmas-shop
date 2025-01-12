function up(scroll = 1500) {
  const up = document.querySelector('.up');
  function openUp() {
    up.classList.toggle('visible', true);
  }
  function closeUp() {
    up.classList.toggle('visible', false);
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > scroll) {
      openUp();
    } else {
      closeUp();
    }
  });
  closeUp();
}
export default up;