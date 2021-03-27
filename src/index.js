'use strict';

import header from './modules/header';
import burger from './modules/burger';
import addDots from './modules/addDots';
import addArrows from './modules/addArrows';
import mainSlider from './modules/mainSlider';
import servicesSlider from './modules/servicesSlider';
import gallerySlider from './modules/gallerySlider';
import calculator from './modules/calculator';
import clubForms from './modules/clubForms';
import footerForm from './modules/footerForm';
import bannerForm from './modules/bannerForm';
import popupForm from './modules/popupForm';



header();
burger();
addDots('.main-slider');
addArrows('.services-slider');
addArrows('.gallery-slider');
addDots('.gallery-slider');
mainSlider();
gallerySlider();
servicesSlider();
calculator();
clubForms();
footerForm();
bannerForm();
popupForm('form2');
popupForm('form1');