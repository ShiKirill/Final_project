const burger = () => {
  const hiddenSmall = document.querySelector('.hidden-small');
  const hiddenLarge = document.querySelector('.hidden-large');
  const topMenu = document.querySelector('.top-menu');
  const popupMenu = document.querySelector('.popup-menu');
  const arrow = document.getElementById('totop');
  const arrowPoint = document.getElementById('clubs').offsetTop;
  const topMenuOffset = topMenu.offsetTop;
  arrow.style.display = 'none';


  document.addEventListener('click',event => {
    const target = event.target;
    if (target.closest('.menu-button') && target.tagName.toLowerCase() === 'img') {
      popupMenu.style.display = 'flex';
    } else if ((target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'img') && target.closest('.popup-menu')) {
      popupMenu.style.display = 'none';
    }
  });

  const scrollFixation = () => {
    if (window.scrollY > topMenuOffset) {
      topMenu.style.position = 'fixed';
      topMenu.style.top = '0';
    } else {
      topMenu.style.position = 'initial';
    }
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      hiddenSmall.style.display = 'none';
      hiddenLarge.style.display = 'block'
      window.addEventListener('scroll', scrollFixation);
    } else {
      hiddenSmall.style.display = 'flex';
      hiddenLarge.style.display = 'none';
      window.removeEventListener('scroll', scrollFixation);
      topMenu.style.position = 'initial';
    }
  });

  if (window.innerWidth < 768) {
    window.addEventListener('scroll', scrollFixation);
  }
  // Arrow
  window.addEventListener('scroll', () => {
    if (window.scrollY > arrowPoint) {
      arrow.style.display = 'block';
    } else {
      arrow.style.display = 'none';
    }
  })

};

export default burger;