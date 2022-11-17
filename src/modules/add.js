const API_KEY = "gMaGSzDmg04MJQsCUpvH";

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores`;

 export const getScore = ()=>{
  fetch(url, 
    {
      method: "GET"
    })
  
    .then(res => res.json())
    .then(data => {
      document.querySelector('.scores_container').innerHTML = ''
       return data.result.forEach((element) => {

            const table = document.querySelector('.scores_container');
            const row = document.createElement('tr');
            const data = document.createElement('td');
            data.innerHTML = `${element.user} : ${element.score}`;
            row.appendChild(data);
            table.appendChild(row);

        });
    })
}

export {url};