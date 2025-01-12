import cards from './cards.js';

function tabs(activeCategory = 'all') {
  const tabsArr = document.querySelectorAll('.tabs__item');

  tabsArr.forEach(tab => {
    tab.addEventListener('click', () => {
      tabsArr.forEach(elem => elem.classList.remove('active'));
      tab.classList.add('active');

      activeCategory = tab.dataset.category;
      cards('.cards', './js/modules/gifts.json', activeCategory, undefined);
    });
  });
  return activeCategory;
}

export default tabs;