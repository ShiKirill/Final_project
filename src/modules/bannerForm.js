const bannerForm = () => {
  const form = document.getElementById('banner-form');
  let agreement = false;
  const nameWrong = `<p style="color:red" class="name-wrong">Некорректный ввод в поле "Ваше имя"</p>`;
  const telWrong = `<p style="color:red" class="tel-wrong">Некорректный ввод в поле "Ваш номер телефона"</p>`;
  const checkWrong = `<p style="color:red" class="agreement-wrong">Необходимо согласие.</p>`;

  form.addEventListener('input', (e) => {
    const target = e.target;
    if (!target.matches('input')) {
      return;
    }
    if (target.getAttribute('name') === 'name') {
      target.value = target.value.replace(/[^а-яё -]/ig, '');
    } else if (target.getAttribute('name') === 'phone') {
      target.value = target.value.replace(/[^+0-9]/g, '');
    } else if (target.getAttribute('id') === 'check1') {
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

    if (!(target.matches('input') && target.getAttribute('id') !== 'check1')) {
      return;
    }
    if (target.getAttribute('name') === 'name') {
      if (/^([a-яё]{2,})/.test(target.value)) {
        if (form.querySelector('.name-wrong')) {
          target.parentNode.removeChild(form.querySelector('.name-wrong'));
        }
      } else {
        if (!form.querySelector('.name-wrong')) {
          target.parentNode.insertAdjacentHTML('beforeend', nameWrong);
        }
      }
    } else if (target.getAttribute('name') === 'phone') {
      if (/^(8|\+7)\d{10}$/.test(target.value)) {
        if (form.querySelector('.tel-wrong')) {
          target.parentNode.removeChild(form.querySelector('.tel-wrong'));
        }
      } else {
        if (!form.querySelector('.tel-wrong')) {
          target.parentNode.insertAdjacentHTML('beforeend', telWrong);
        }
      }
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!agreement) {
      if (!form.querySelector('.agreement-wrong')) {
        form.querySelector('.personal-data').insertAdjacentHTML('beforeend', checkWrong);
      }
      return;
    } else if (form.querySelector('.tel-wrong') || form.querySelector('.name-wrong')) {
      return;
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
      form.querySelectorAll('input').forEach(item => item.value = '');
      document.getElementById('check1').checked = false;
    });

    request.open('POST', '../../server.php');
    request.setRequestHeader('Content-Type', 'multipart/form-data');
    request.send(JSON.stringify(body));

  });




};

export default bannerForm;