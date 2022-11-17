import { url } from './add.js';

const postScore = async () => {
  const nameInput = document.querySelector('.name_input');
  const scoreInput = document.querySelector('.score_input');

  const object = {
    user: nameInput.value,
    score: scoreInput.value,
  };

  await fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => new Error(error));
};

export default postScore;