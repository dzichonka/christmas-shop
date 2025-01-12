'use strict';


import burger from './modules/burger.js';
import cards from './modules/cards.js';
import up from './modules/up.js';
import tabs from './modules/tabs.js';


burger();
const activeCategory = tabs();
//console.log(activeCategory);
//const indexes = [1, 13, 0, 2, 12, 26, 14, 25, 15, 3, 24, 27];
cards('.cards', './js/modules/gifts.json', activeCategory, undefined);
up(300);