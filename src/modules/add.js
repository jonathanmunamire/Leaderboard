const addScore = () => {
    const nameInput = document.querySelector(".name_input");
    const scoreInput = document.querySelector(".score_input");
    const errorMessage = document.querySelector(".error_message");
    if(nameInput.value == "" || scoreInput.value == ""){
        errorMessage.innerHTML = "Add Input";
        setTimeout(() =>{
            errorMessage.innerHTML = "";
        }, 2000);
    }else {
    const table = document.querySelector(".scores_container");
    const row = document.createElement("tr");
    const data = document.createElement("td");
    data.innerHTML = `${nameInput.value} : ${scoreInput.value}`;
    row.appendChild(data);
    table.appendChild(row);
    }

    return;
}

export {addScore};