const addDots = (sliderSelector)=>{
  const slider = document.querySelector(sliderSelector);
  const slide = slider.querySelectorAll('.slide');


  const ul = document.createElement('ul');
  ul.classList.add('slider-dots');
  const firstDot = `<li class = "slick-active"><button class="dot"></button></li>`;
  const dot = `<li><button class="dot"></button></li>`;
  for (let i = 0; i < slide.length; i++) {
    if (i===0){
      ul.innerHTML += firstDot;
    } else {
    ul.innerHTML += dot;
  }
  }
  slider.appendChild(ul);
};

export default addDots;