const navigation = document.querySelector(".navigation")
navigation.innerHTML = `<a href = "index.html">Back</a>`

const detailscontainer = document.querySelector(".details-results")
const params = new URLSearchParams(document.location.search)
var id = params.get("id");

const url = "https://www.freetogame.com/api/game?id=" + id
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
   detailscontainer.innerHTML = ` <h1> ${results.title}</h1>
                                <img src="${results.thumbnail}" >
                                <br>${results.description}<br></br>
                                <div class="resultsdescription"> ${results.minimum_system_requirements.graphics}</div>
    `
}