const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const nameEl = document.getElementById("name");


const getAnime = async()=>{
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        nameEl.innerText = "Updating...";
        animeImgEl.src = "loading.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        // console.log(data);
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        nameEl.innerText = data.artist;
    } catch (error) {
        
    }
}
btnEl.addEventListener("click", getAnime);

