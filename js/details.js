const detailscontainer = document.querySelector(".details-results")

const url = "https://www.freetogame.com/api/games?category=shooter"
const proxy = "https://noroffcors.herokuapp.com/"

const corsFix = proxy + url;

async function fetchGame(){
    try{
        const response = await fetch(corsFix);
        const results = await response.json();
        console.log(results);
        createhtml(results);
    }
    catch{

    }
}


fetchGame();

function createhtml(results){
    detailscontainer.innerHTML = ` <h1> ${results.title}</h1>`
}