import './style.css';

const API_KEY = "kXKsdO2M53vccZw26fHC";

url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kXKsdO2M53vccZw26fHC/scores";

const button = document.querySelector('.refresh_button');
const submit = document.querySelector('.submit_button');

const nameInput = document.querySelector('.name_input');
const scoreInput = document.querySelector('.score_input');

button.addEventListener('click', ()=>{
    fetch(url, 
        {
          method: "GET"
        })
    
        .then(res => res.json())
        .then(data => {
           return data.result.forEach((element) => {

                const table = document.querySelector('.scores_container');
                const row = document.createElement('tr');
                const data = document.createElement('td');
                data.innerHTML = `${element.user} : ${element.score}`;
                row.appendChild(data);
                table.appendChild(row);

            });
        })
})

async function postScore(){
  const object = {
    user: nameInput.value,
    score: scoreInput.value
   }
  
   await fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    })
    .then((res)=> res.json())
    .then((data) => data)
    .catch((error) => new Error(error))
}


submit.addEventListener('click', () => {
    postScore();
  }); 