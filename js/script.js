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
            const loading = document.createElement("div")
            body.append(loading);
            loading.classList.add("loading");
            loading.innerHTML = ``;
            
            const container = document.createElement("div");
            body.append(container);
                container.innerHTML = `<hr>
                TITLE: <br>${results[i].title} <br></br>
                PUBLISHER: <br>${results[i].publisher}<br></br>
                RELEASE DATE:<br> ${results[i].release_date}<br></br>
                DESCRIPTION:<br>${results[i].short_description}<br></br>
                THUMBNAIL LINK:<br> ${results[i].thumbnail}
                </hr> `
            
                console.log(results[i])

        }
        
        




    }
    catch(error) {
        loading.innerHTML = "error"
        console.log("error")

    }
}

getMenuPlan();