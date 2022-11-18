import './style.css';
import postScore from './modules/post.js';
import { getScore } from './modules/add.js';

const button = document.querySelector('.refresh_button');
const submit = document.querySelector('.submit_button');

const nameInput = document.querySelector('.name_input');
const scoreInput = document.querySelector('.score_input');

button.addEventListener('click', () => {
  getScore();
});

const cleanInput = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

submit.addEventListener('click', () => {
  const errorMessage = document.querySelector('.error_message');
  if (nameInput.value === '' || scoreInput.value === '') {
    errorMessage.innerHTML = 'Add Input';
    errorMessage.classList.remove('success');
    setTimeout(() => {
      errorMessage.innerHTML = '';
    }, 3000);
  } else {
    postScore();
    errorMessage.innerHTML = 'Score Added';
    errorMessage.classList.add('success');
    setTimeout(() => {
      errorMessage.innerHTML = '';
    }, 3000);
  }

  cleanInput();
});