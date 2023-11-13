const heroBtn = document.querySelector('.hero__btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

overlay.style.transitionDuration = '0.36s';
modal.style.transitionDuration = '0.36s';

heroBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_open');
  modal.classList.add('modal_open');
});

overlay.addEventListener('click', ({target}) => {
  if (target === overlay || target.closest('.modal__close')) {
    modal.classList.remove('modal_open');
    overlay.classList.remove('overlay_open');
  }
});

const form = document.querySelector('.modal__form');
const modalTitle = document.querySelector('.modal__title');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    surname: form.surname.value,
    tel: form.tel.value,
  };

  fetch('https://cloudy-slash-rubidium.glitch.me/api/order', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(response => response.json())
    .then(person => {
      modalTitle.textContent  = `
        ${person.name}, Ваша заявка успешно отправлена!
        Номер заявки: ${person.id}.
      `;
      form.remove();

      setTimeout(() => {
        modal.classList.remove('modal_open');
        overlay.classList.remove('overlay_open');
      }, 4000);
    });
});