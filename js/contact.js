const submitForm = document.querySelector(".submitForm");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");

function validationForm(){

    Event.preventDefault();

}





const navigation = document.querySelector(".navigation")
navigation.innerHTML = `<a href = "index.html"><strong>< </strong>Back</a>`

const url = "https://www.freetogame.com/api/game?id=" + id
const proxy = "https://noroffcors.herokuapp.com/"

const corsFix = proxy + url;

async function fetchGame() {
    try {
        const response = await fetch(corsFix);
        const results = await response.json();
        console.log(results);
        createhtml(results);
    }
    catch {

    }
}


fetchGame();
