const tabs = document.querySelectorAll('.tabs-button'),
  cards = document.querySelectorAll('.tabs-content-card'),
  tabActiveClass = 'tab-active',
  cardActiveClass = 'card-active';

function removeActiveClass(elements, activeClass) {
  elements.forEach((element) => element.classList.remove(activeClass));
}

function addActiveClass(elements, index = 0, activeClass) {
  elements[index].classList.add(activeClass);
}

removeActiveClass(tabs, tabActiveClass);
removeActiveClass(cards, cardActiveClass);

addActiveClass(tabs, 0, tabActiveClass);
addActiveClass(cards, 0, cardActiveClass);

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    removeActiveClass(tabs, tabActiveClass);
    removeActiveClass(cards, cardActiveClass);

    addActiveClass(tabs, index, tabActiveClass);
    addActiveClass(cards, index, cardActiveClass);
  });
});
