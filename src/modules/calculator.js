const calculator = () => {
  const calculatorForm = document.getElementById('card_order');
  const calculator = document.getElementById('cards');
  const timeInputs = calculator.querySelectorAll('.time input');
  const clubInputs = calculator.querySelectorAll('.club');
  const promoInput = calculator.querySelector('.price input');
  let clubPrize;
  let time;
  let page;
  let discount;
  let agreement = false;
  const nameWrong = `<p style="color:red" class="name-wrong">Некорректный ввод в поле "Ваше имя"</p>`;
  const telWrong = `<p style="color:red" class="tel-wrong">Некорректный ввод в поле "Ваш номер телефона"</p>`;


  const getClubPrize = () => {
    const inputs = page.querySelectorAll('.cards-types input');
    inputs.forEach(item=> {
      if (item.value === time+'s'){
        const id = item.getAttribute('id');
        const labels = page.querySelectorAll('.cards-types label');
        labels.forEach(item=> {
          if (item.getAttribute('for') === id) {
            clubPrize = parseInt(item.querySelector('.cost').textContent);
          }
        });
        
      }
    });
  };

  const checkPromo = () => {
      if (promoInput.value === 'ТЕЛО2020'){
        discount = 30;
      }  else {
        discount = 0;
      }
      clubPrize = clubPrize - clubPrize*discount/100;
  };
  checkPromo();

  const showPrize = () => {
    document.getElementById('price-total').textContent = Math.floor(clubPrize);
  }

  const main = () => {
    getClubPrize();
    checkPromo();
    showPrize();
  };

  const getPage = (url) => {
    fetch(`../../${url}`).then(function(response) {
      return response.text()
  })
  .then(function(html) {
      const parser = new DOMParser();
      page = parser.parseFromString(html, "text/html");
      main();
  })
  .catch(function(err) {  
      console.error('Failed to fetch page: ', err);  
  });
  };

  const firstInit = () => {
    getPage('mozaika.html');
    timeInputs.forEach(item => {
    if (item.checked) {
      time = item.value;
    }
  });
  };
  firstInit();

  clubInputs.forEach(item=>{
    item.addEventListener('input', (event)=>{
      if (event.target.checked) {
        getPage(`${event.target.value}.html`);
      }
    })
  });

  timeInputs.forEach(item => {
    item.addEventListener('input', (event)=> {
      if (event.target.checked) {
        time = event.target.value;
        main();
      }
    });
  });

  promoInput.addEventListener('change', () => {
    main();
  });

  calculator.addEventListener('input', (e) => {
    const target = e.target;
    if (!(target.closest('.tel-input') || target.closest('.name-input') || target.matches('#card_check'))) {
      return;
    }
    if (target.closest('.name-input')){
      target.value = target.value.replace(/[^а-яё -]/ig, '');
    } else if (target.closest('.tel-input')){
      target.value = target.value.replace(/[^+0-9]/, '');
    } else {
      if (target.checked) {
        agreement = true;
        if (calculator.querySelector('.agreement-wrong')){
          calculator.querySelector('.personal-data').removeChild(calculator.querySelector('.agreement-wrong'));
        }
      } else {
        agreement = false;
      }
    }
  });
  calculator.addEventListener('change', (e) => {
    const target = e.target;
    if (!(target.closest('.tel-input') || target.closest('.name-input') || target.matches('#card_check'))) {
      return;
    }
    if (target.closest('.name-input')){
      if (/^([a-яё]{2,})/.test(target.value)) {
        if (calculator.querySelector('.name-wrong')) {
          target.closest('.name-input').removeChild(calculator.querySelector('.name-wrong'));
        }
      } else {
        if (!calculator.querySelector('.name-wrong')){
        target.closest('.name-input').insertAdjacentHTML('beforeend',nameWrong);
      }
      }
    } else if (target.closest('.tel-input')){
      if (/^(8|\+7)\d{10}$/.test(target.value)) {
        if (calculator.querySelector('.tel-wrong')) {
          target.closest('.tel-input').removeChild(calculator.querySelector('.tel-wrong'));
        }
      } else {
        if (!calculator.querySelector('.tel-wrong')){
        target.closest('.tel-input').insertAdjacentHTML('beforeend',telWrong);
      }
      }
    }
  });

  calculatorForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (!agreement) {
      if (!calculator.querySelector('.agreement-wrong')){
        calculator.querySelector('.personal-data').insertAdjacentHTML('beforeend', `<p style="color:red" class="agreement-wrong">Необходимо согласие.</p>`);
      }
      return;
    } else if (calculator.querySelector('.tel-wrong') || calculator.querySelector('.name-wrong')){
      return;
    } else {
      const formData = new FormData(calculatorForm);
      let body = {};
      for (let val of formData.entries()) {
        body[val[0]] = val[1];
      }
      body.value = document.getElementById('price-total').textContent;
      fetch('../../server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then((response) => {
        promoInput.value = '';
        calculator.querySelectorAll('p input').forEach(item=>item.value='');
        document.getElementById('card_check').checked = false;
        if (response.status !== 200) {
          throw new Error('status network not 200')
        }

        document.getElementById('thanks').style.display = 'block';
      })
      .catch(error => {
        if(!calculator.querySelector('.send-wrong')){
        calculator.querySelector('.submit').insertAdjacentHTML('beforebegin', `<p style="color:red" class="send-wrong">Что-то пошло не так...</p>`);
      }
      setTimeout(()=>{calculator.querySelector('.send-wrong').parentNode.removeChild(calculator.querySelector('.send-wrong'));},3000);
        console.error(error);
      });
    }
  })
    
}


export default calculator;