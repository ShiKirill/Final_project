const servicesSlider = () => {
  let slidesToShow = 5;
  let position = 0;
  const responsive = [{
    breakpoint: 1024,
    slidesToShow: 5
  }, {
    breakpoint: 768,
    slidesToShow: 3
  }, {
    breakpoint: 576,
    slidesToShow: 1
  }];
  let widthSlide = Math.floor(100 / slidesToShow);


  const wrap = document.querySelector('.services-slider');
  const main = document.querySelector('.services-slider-main');
  let slides = main.querySelectorAll('.slide');
  const prev = wrap.querySelector('.prev');
  const next = wrap.querySelector('.next');

  const prevSlider = (event) => {
    if (position === 0) {
      return;
    } else {
      --position;
      main.style.transform = `translateX(-${position * widthSlide}%)`;
    }
      

  }

  const nextSlider = () => {
    if (position === (slides.length - slidesToShow)) {
      return;
    } else {
      ++position;
      main.style.transform = `translateX(-${position * widthSlide}%)`;
    }
  }

  const addStyle = () => {
    slides.forEach(item => {
      item.style.flex = `0 0 ${widthSlide}%`;
    });
  };

  const controlSlider = () => {
    prev.addEventListener('click', prevSlider);
    next.addEventListener('click', nextSlider);
  };

  const responseInit = () => {
    const slidesToShowDefault = slidesToShow;
    const allResponses = responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allResponses);

    const checkResponse = () => {
      const windowWidth = document.documentElement.clientWidth;
      if (windowWidth < maxResponse) {
        for (let i = 0; i < allResponses.length; i++) {
          if (windowWidth < allResponses[i]) {
            slidesToShow = responsive[i].slidesToShow;
            widthSlide = Math.floor(100 / slidesToShow);
            addStyle();
          } 
        }
      } else {
        slidesToShow = slidesToShowDefault;
        widthSlide = Math.floor(100 / slidesToShow);
        addStyle();
      }
    };

    checkResponse();
  };

  window.addEventListener('resize', ()=>{
    responseInit();
  });

  const init = () => {
    controlSlider();
    responseInit();
  }

  init();
};

export default servicesSlider;