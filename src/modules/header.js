const header = () => {

  const clubList = document.querySelector('.club-select ul');
  const freeVisitForm = document.getElementById('free_visit_form');
  const callbackForm = document.getElementById('callback_form');
  const gift = document.getElementById('gift');
  const giftIcon = document.querySelector('.fixed-gift');

  clubList.classList.add('club-list');


  document.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.club-select')) {
      if (clubList.style.display === 'none' || !clubList.style.display) {
        clubList.style.display = 'inline';
      } else {
        clubList.style.display = 'none';
      }
    } else if (target.classList.contains('open-popup')) {
      freeVisitForm.style.display = 'block';
    } else if (target.classList.contains('callback-btn')) {
      callbackForm.style.display = 'block';
    } else if (target.closest('.fixed-gift')) {
      gift.style.display = 'block';
      giftIcon.style.display = 'none';
    } else if (target.matches('.close_icon, .overlay, .close-btn')) {
      target.closest('.popup').style.display = 'none';
    } else {
      if (clubList.style.display !== 'none') {
        clubList.style.display = 'none';
      }
    }
  });

}

export default header;