const url = "https://www.freetogame.com/api/games?category=shooter"
const proxy = "https://noroffcors.herokuapp.com/"

const corsFix = proxy + url ;


async function getMenuPlan() {
    try {
        const response = await fetch(corsFix);
        const results = await response.json();

        console.log(results);



        for(let i = 0; i < results.length; i++){

        const body = document.body
        const div = document.createElement("div");
        body.append(div);
        div.innerHTML = `${results[i].title}`
        
            console.log(results[i])

        }
        
        




    }
    catch {

    }
}

getMenuPlan();