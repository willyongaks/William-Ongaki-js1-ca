
const header = document.querySelector(".header")
header.innerHTML = `<h1> Here we curate the best games. </h1>
                                <br>Platform</br>
        `
var platforms = ["all", "pc", "browser"]
for (platform of platforms){
    var btn = document.createElement("button")
    btn.innerHTML = platform
    btn.platform=platform
    btn.id=platform
    btn.addEventListener("click", fetchGame)
    header.append(btn)
}



async function fetchGame(evt) {
    try {
        document.close()
        let url;
        platform= evt.currentTarget.platform
        console.log(platform)
        if (platform === "all"){
            url = "https://www.freetogame.com/api/games/"

        }else{
            url = "https://www.freetogame.com/api/games?platform=" + platform
        }
        const proxy = "https://noroffcors.herokuapp.com/"

        const corsFix = proxy + url;
        const response = await fetch(corsFix);
        const results = await response.json();

            
        for(let i = 0; i < results.length; i++){
            const body = document.body
            const indexHtml = document.createElement("div")
            body.append(indexHtml);
            indexHtml.classList.add("indexHtml");
            indexHtml.innerHTML = ``;

            const container = document.createElement("div");
            body.append(container);
            container.innerHTML = `<hr>
                <br> ${results[i].title} - ${results[i].platform}
                PUBLISHER: <br>${results[i].publisher}<br></br>
                RELEASE DATE:<br> ${results[i].release_date}<br></br>
                <a href="details.html?id=${results[i].id}"> More details... </a></br>
                <a href="contact.html"> Contact us </a>
                
                </hr> `
            
            
        }
        
        




    }
    catch(error) {
        console.log(error)

    }
}
