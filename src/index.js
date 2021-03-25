'use strict';

import header from './modules/header';
import burger from './modules/burger';
import addDots from './modules/addDots';
import addArrows from './modules/addArrows';
import mainSlider from './modules/mainSlider';
import gallerySlider from './modules/gallerySlider';

header();
burger();
addDots('.main-slider');
addArrows('.gallery-slider');
addDots('.gallery-slider');
mainSlider();
gallerySlider();