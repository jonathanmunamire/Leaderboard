import './style.css';
import { postScore } from "./modules/post.js"
import { getScore } from './modules/add.js';

const button = document.querySelector('.refresh_button');
const submit = document.querySelector('.submit_button');

const nameInput = document.querySelector('.name_input');
const scoreInput = document.querySelector('.score_input');

button.addEventListener('click', ()=>{
    getScore()
})

submit.addEventListener('click', () => {
  const errorMessage = document.querySelector('.error_message');
  if (nameInput.value === '' || scoreInput.value === '') {
    errorMessage.innerHTML = 'Add Input';
    setTimeout(() => {
      errorMessage.innerHTML = '';
    }, 2000);
  } else {
    postScore();
  }

  cleanInput();
  }); 

  const cleanInput = () => {
    nameInput.value = '';
    scoreInput.value = '';
  };