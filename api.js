const API_KEY = "kXKsdO2M53vccZw26fHC";

url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores`;

const button = document.querySelector('.refresh_button');
const submit = document.querySelector('.submit_button');

button.addEventListener('click', ()=>{
    fetch(url, 
        {
            method: "GET"
        })
    
        .then(res => res.json())
        .then(data => {
            data.result.forEach((element) => {
                const nameInput = document.querySelector('.name_input');
                const scoreInput = document.querySelector('.score_input');
                
                const table = document.querySelector('.scores_container');
                const row = document.createElement('tr');
                const data = document.createElement('td');
                data.innerHTML = `${el.user} : ${el.score}`;
                row.appendChild(data);
                table.appendChild(row);

            });
        })
})

submit.addEventListener('click', (e) => {
   let object = {
    user: nameInput.value,
    score: scoreInput.value
   }

   fetch(url, 
    {
        method: "POST",
        headers: {"content-Type":"application/json"},
        body: JSON.stringify(object)
    })
    .then((res)=>{
        return res.json()
    })

    .then(data =>{
        console.log("Data", data)
    })
    .catch(error => console.log(error))

  });