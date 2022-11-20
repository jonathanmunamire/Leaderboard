![](https://img.shields.io/badge/Microverse-blueviolet)

# LeaderBoard

> Project to Display List of Players with their respective scores

## Built With

- Html
- Css
- Js

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Browser
- Git
- A Code Editor (like VS Code for example)

### Setup

    Clone this repository
    git clone https://github.com/jonathanmunamire/Leaderboard.git

### Install

    Open Html file in preferred browser

### Deployment

[Live Demo Link](https://jonathanmunamire.github.io/Leaderboard/dist/)

## How To POST, GET data from LeaderBoad API Service

- Leaderboad [Link](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3)
- You need to create a unique key for your game, so that you can post to it and read data from your game
- To create **UNIQUE ID** for your **GAME** use the curl command in your terminal with the API endpoint as shown, ensure to change the name from Gladiators to a Unique name of your choice `$ curl -X POST -d 'name=Gladiators' https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ `
- You will get a response like this in the terminal `{"result":"Game with ID: NvYHfEPmQZtyuBJeIesV added."}aye@aye-HP-EliteBook-850-G3:~$ ` the message shows you have successfully created a user.

- Next Thing you need to do is to add the key you just got to your project url where you will perform the **POST** and **GET** requests

### GET Request With Fetch API

- Set your fetch this way or anyway you usually do, but remember to have the `{ method: "GET" }` after your **URL** `fetch(url, { method: "GET" } ) .then(res=> res.json()) .then(data => { // Perform Any action you want to do with the data here, make it display to your DOM return console.log(data)})`

### POST Request With Fetch API

- To make a post request to create a score for a new user use this code for fetch ` fetch(url, { method: "POST", headers:{"Content-Type": "application/json"}, body: JSON.stringify(payloadObject) }) .then((res)=> { return res.json()}) .then(data => { console.log("Data",data)}) .catch(error=> console.log(error))` customize the code the way you usually write your code.

- Ensure you have this content after the url in your fetch method ` { method: "POST", headers:{"Content-Type": "application/json"}, body: JSON.stringify(payloadObject) }`

- Feel free to look at how to set headers using this API [link](https://rapidapi.com/digiwalls/api/free-to-play-games-database)

## Create your Own Webpack Template

Set up project with webpack and get the guide by clicking [here](https://github.com/microverseinc/curriculum-javascript/blob/main/todo-list/exercises/exercise_set_up_project_with_webpack.md)

To get a local copy up and running follow these simple example steps.

## Authors

👤 **Author**

- GitHub: [@jonathanmunamire](https://github.com/jonathanmunamire)
- Twitter: [@amanimunamire](https://twitter.com/amanimunamire)
- LinkedIn: [Jonathan Munamire](https://www.linkedin.com/in/jonathanmunamire/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used

## 📝 License

This project is [MIT](./LICENSE) licensed.
