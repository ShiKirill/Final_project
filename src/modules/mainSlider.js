const mainSlider = () => {
  const slider = document.querySelector('.main-slider');
  const slide = slider.querySelectorAll('.slide');
  let dot = slider.querySelectorAll('.slider-dots li');
  let interval;
  let currentSlide = 0;

  const prevSlide = (elem, index, strClass = "") => {
    if (elem[index].tagName.toLowerCase() === 'li') {
      elem[index].classList.remove('slick-active');
    } else {
      elem[index].style.display = 'none';
    }
  };

  const nextSlide = (elem, index, strClass = "") => {
    if (elem[index].tagName.toLowerCase() === 'li') {
      elem[index].classList.add('slick-active');
    } else {
      elem[index].style.display = 'flex';
    }
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide);
    prevSlide(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide);
    nextSlide(dot, currentSlide, 'slick-active');
  };

  const startSlide = (time = 2000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };


  slider.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;

    if (!target.matches('.dot')) {
      return;
    }
    prevSlide(slide, currentSlide);
    prevSlide(dot, currentSlide, 'slick-active');

    if (target.matches('.dot')) {
      dot.forEach((item, index) => {
        if (item === target.closest('li')) {
          currentSlide = index;
        }
      })
    }
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide);
    nextSlide(dot, currentSlide, 'slick-active');

  });

  slider.addEventListener('mouseover', (event) => {
    const target = event.target;
    if (target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (event) => {
    const target = event.target;
    if (target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide(1500);

};

export default mainSlider;