import './style.css';
import addScore from './modules/add.js';

const nameInput = document.querySelector('.name_input');
const scoreInput = document.querySelector('.score_input');
const submit = document.querySelector('.submit_button');

const cleanInput = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

submit.addEventListener('click', () => {
  addScore();
  cleanInput();
});