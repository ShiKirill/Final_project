const addArrows = (sliderSelector)=>{
  const slider = document.querySelector(sliderSelector);
  const leftArrow = document.createElement('div');
  const rightArrow = document.createElement('div');
  leftArrow.classList.add('slider-arrow');
  rightArrow.classList.add('slider-arrow');
  leftArrow.classList.add('prev');
  rightArrow.classList.add('next');
  leftArrow.innerHTML = `<span><img src="images/arrow-left.png" alt="left arrow"></span>`;
  rightArrow.innerHTML = `<span><img src="images/arrow-right.png" alt="right arrow"></span>`;

  slider.appendChild(leftArrow);
  slider.appendChild(rightArrow);
};

export default addArrows;