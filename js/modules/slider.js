function slider() {
  const wrapper = document.querySelector('.slider__wrapper');
  const section = document.querySelector('.slider');
  let padding;
  let screenWidth;
  let step;

  const sliderWidth = parseInt(wrapper.scrollWidth);
  let currentPlace;

  const leftArrow = document.querySelector('.arrow_left');
  const rightArrow = document.querySelector('.arrow_right');

  function inactivateArrow(arrow) {
    arrow.classList.toggle('arrow_inactive', true);
    arrow.classList.toggle('arrow_active', false);
  }
  function activateArrow(arrow) {
    arrow.classList.toggle('arrow_active', true);
    arrow.classList.toggle('arrow_inactive', false);
  }

  function restoreSlider() {
    padding = 2 * parseInt(window.getComputedStyle(section).paddingRight);
    let clickCount;
    if (window.innerWidth > 1440) {
      screenWidth = 1440;
    } else {
      screenWidth = window.innerWidth;
    }

    if (screenWidth > 768) {
      clickCount = 3;
    } else {
      clickCount = 6;
    }
    step = (sliderWidth + padding - screenWidth) / clickCount;

    currentPlace = 0;
    wrapper.style.transform = `translateX(0)`;
    inactivateArrow(leftArrow);
    activateArrow(rightArrow);
  }
  restoreSlider();

  window.addEventListener('resize', () => {
    restoreSlider();
  });

  rightArrow.addEventListener('click', () => {
    activateArrow(leftArrow);
    if (rightArrow.classList.contains('arrow_active')) {
      currentPlace -= step;
      wrapper.style.transform = `translateX(${currentPlace}px)`;
    }
    if (Math.abs(currentPlace) + screenWidth > sliderWidth) {
      inactivateArrow(rightArrow);
    }
  });

  leftArrow.addEventListener('click', () => {
    activateArrow(rightArrow);
    if (leftArrow.classList.contains('arrow_active')) {
      currentPlace += step;
      wrapper.style.transform = `translateX(${currentPlace}px)`;
    }
    if (Math.abs(currentPlace) < step / 2) {
      inactivateArrow(leftArrow);
    }
  });
}

export default slider;