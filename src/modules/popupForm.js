const popupForm = (selectorId) => {
  const form = document.getElementById(selectorId);
  let agreement = false;
  const nameWrong = `<p style="color:red" class="name-wrong">Некорректный ввод в поле "Ваше имя"</p>`;
  const telWrong = `<p style="color:red" class="tel-wrong">Некорректный ввод в поле "Ваш номер телефона"</p>`;
  const checkWrong = `<p style="color:red" class="agreement-wrong">Необходимо согласие.</p>`;

  form.addEventListener('input', (e) => {
    const target = e.target;
    if (!(target.closest('.personal-data') || target.closest('.input-text'))) {
      return;
    }

    if (target.closest('.input-text')) {
      if (target.getAttribute('name') === 'name') {
        target.value = target.value.replace(/[^а-яё -]/ig, '');
      } else {
        target.value = target.value.replace(/[^+0-9]/g, '');
      }
    } else {
      if (target.checked) {
        agreement = true;
        if (form.querySelector('.agreement-wrong')) {
          form.querySelector('.personal-data').removeChild(form.querySelector('.agreement-wrong'));
        }
      } else {
        agreement = false;
      }
    }

  });

  form.addEventListener('change', (e) => {
    const target = e.target;
    if (!target.closest('.input-text')) {
      return;
    }
    if (target.getAttribute('name') === 'name') {
      if (/^([a-яё]{2,})/.test(target.value)) {
        if (form.querySelector('.name-wrong')) {
          target.closest('.input-text').removeChild(form.querySelector('.name-wrong'));
        }
      } else {
        if (!form.querySelector('.name-wrong')) {
          target.closest('.input-text').insertAdjacentHTML('beforeend', nameWrong);
        }
      }
    } else if (target.getAttribute('name') === 'phone') {
      if (/^(8|\+7)\d{10}$/.test(target.value)) {
        if (form.querySelector('.tel-wrong')) {
          target.closest('.input-text').removeChild(form.querySelector('.tel-wrong'));
        }
      } else {
        if (!form.querySelector('.tel-wrong')) {
          target.closest('.input-text').insertAdjacentHTML('beforeend', telWrong);
        }
      }
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!agreement) {
      if (!form.querySelector('.agreement-wrong')) {
        form.querySelector('.personal-data').insertAdjacentHTML('beforeend', checkWrong);
      }
      return;
    } else if (form.querySelector('.tel-wrong') || form.querySelector('.name-wrong')) {
      return;
    } else {
      form.closest('.popup').style.display = 'none';
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
        } else {
          document.getElementById('loading').style.display = 'none';
          document.getElementById('error').style.display = 'block';
          console.error(request.status);
        }
        form.querySelectorAll('p input').forEach(item => item.value = '');
        form.querySelector('.personal-data input').checked = false;
      });

      request.open('POST', '../../server.php');
      request.setRequestHeader('Content-Type', 'multipart/form-data');
      request.send(JSON.stringify(body));
      
    }
  })




};

export default popupForm;