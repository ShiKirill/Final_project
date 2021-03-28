const footerForm = () => {
  const form = document.getElementById('footer_form');
  const clubInputs = form.querySelectorAll('.club input');
  const phoneInput = document.getElementById('callback_footer_form-phone');
  const clubWrong = `<p style="color:red" class="club-wrong">Выберите клуб</p>`;
  const telWrong = `<p style="color:red" class="tel-wrong">Некорректный ввод в поле "Ваш номер телефона"</p>`;
  let club;

  form.addEventListener('input', (e) => {
    const target = e.target;
    if (!(target.closest('.club') || target.closest('.input-text'))) {
      return;
    }
    if (target === phoneInput) {
      target.value = target.value.replace(/[^+0-9]/g, '');
    } else {
      clubInputs.forEach(item => {
        if (item.checked) {
          club = item.value;
        }
      });
    }
  });

  phoneInput.addEventListener('change', () => {
    if (/^(8|\+7)\d{10}$/.test(phoneInput.value)) {
      if (form.querySelector('.tel-wrong')) {
        form.removeChild(form.querySelector('.tel-wrong'));
      }
    } else {
      if (!form.querySelector('.tel-wrong')) {
        form.insertAdjacentHTML('beforeend', telWrong);
      }
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let check;
    clubInputs.forEach(item => {
      if (item.checked) {
        check = true;
      }
    });
    if (!check) {
      if (!form.querySelector('.club-wrong')) {
        form.insertAdjacentHTML('beforeend', clubWrong);
      }
      return;
    } else {
      if (form.querySelector('.club-wrong')) {
        form.removeChild(form.querySelector('.club-wrong'));
      }
    }
    const formData = new FormData(form);
    let body = {};
    for (let val of formData.entries()) {
      body[val[0]] = val[1];
    }


    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      document.getElementById('loading').style.display = 'block';
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('thanks').style.display = 'block';
        setTimeout(()=>{
          document.getElementById('thanks').style.display = 'none';
        }, 3000);
      } else {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        setTimeout(()=>{
          document.getElementById('error').style.display = 'none';
        }, 3000);
        console.error(request.status);
      }
      form.querySelectorAll('p input').forEach(item => item.value = '');
      document.getElementById('card_check').checked = false;
    });

    request.open('POST', '../../server.php');
    request.setRequestHeader('Content-Type', 'multipart/form-data');
    request.send(JSON.stringify(body));

  });


};

export default footerForm;