import mobileMenu from './menu.js';
import cardInfo from './data.js';
import { templete1, templete2, modal } from './templetes.js';

mobileMenu();

const workContainer = document.querySelector('.work-container');

cardInfo.forEach((data, i) => {
  if (i === 0) {
    workContainer.innerHTML += templete1(data, i);
  } else {
    workContainer.innerHTML += templete2(data, i);
  }
});

const seeProject = document.querySelectorAll('.popup');
const modalContainer = document.querySelector('.modal-container');
const modalBlur = document.querySelector('.modal-back');

seeProject.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const modalId = index;
    modalContainer.innerHTML = modal(cardInfo[modalId]);
    modalContainer.classList.add('open-modal');
    modalBlur.classList.add('blur');

    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      modalContainer.classList.remove('open-modal');
      modalContainer.innerHTML = '';
      modalBlur.classList.remove('blur');
    });
  });
});

const submitForm = document.querySelector('.contact-form');

submitForm.addEventListener('submit', (event) => {
  const emailInput = document.querySelector('.contact-form input[type=email]').value;
  const emailLower = emailInput.toLowerCase();
  const errorMessage = document.querySelector('.error-message');

  if (emailInput !== emailLower) {
    event.preventDefault();
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
});
