const gallerySlider = () => {
  const slider = document.querySelector('.gallery-slider');
  const slide = slider.querySelectorAll('.slide');
  let dot = slider.querySelectorAll('.slider-dots li');
  let interval;
  let currentSlide = 0;
  slide[0].classList.add('active');

  const prevSlide = (elem, index, strClass) => {
    if (elem[index].tagName.toLowerCase() === 'li') {
      elem[index].classList.remove(strClass);
    } else if (elem[index].classList.contains('slide')) {
      elem[index].classList.remove(strClass);
    }
  };

  const nextSlide = (elem, index, strClass) => {
    if (elem[index].tagName.toLowerCase() === 'li') {
      elem[index].classList.add(strClass);
    } else if (elem[index].classList.contains('slide')) {
      elem[index].classList.add(strClass);
    }
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');
  };

  const startSlide = (time = 1500) => {
    interval = setInterval(autoPlaySlide, time);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;

    if (!(target.matches('.dot') || target.closest('.slider-arrow'))) {
      return;
    }

    prevSlide(slide, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');

    if (target.closest('.next')) {
      currentSlide++;
    } else if (target.closest('.prev')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
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
    nextSlide(slide, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');

  });

  slider.addEventListener('mouseover', (event) => {
    const target = event.target;
    if (target.closest('.slider-arrow') || target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (event) => {
    const target = event.target;
    if (target.closest('.slider-arrow') || target.matches('.dot')) {
      startSlide(1500);
    }
  });



  startSlide(1500);

};

export default gallerySlider;