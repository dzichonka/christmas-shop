'use strict';

import burger from './modules/burger.js';
import timer from './modules/timer.js';
import cards from './modules/cards.js';
import slider from './modules/slider.js';

burger();
timer('.cta__timer');
//const indexes = [1, 15, 3, 27];
cards('.cards', './js/modules/gifts.json', undefined, 4);
slider();