


let key = "ef406712";

async function searchMovies() {

    var movieName = document.querySelector("#movie_name").value;
    try {
        let data = await fetch(`https://www.omdbapi.com/?apikey=ef406712&t=${movieName}`);

        let res = await data.json();

        if (res.Response == 'False') throw "err"

        populate(res);
    }
    catch (err) {
        errorfunction123();
    }

}


function populate(res) {
    console.log("res:", res)

    let right = document.getElementById("right");
    right.innerHTML = "";
    right.style.backgroundImage = "none"

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let poster = document.createElement("img");
    poster.className = "poster"
    poster.src = res.Poster;

    let title = document.createElement("h3");
    title.innerText = `Title: ${res.Title}`;

    let rec = document.createElement("h3");
    rec.innerText = `RECOMMENDED`;
    rec.setAttribute("class", "peach")

    let mainSpace = document.createElement("div");
    mainSpace.setAttribute("id", "mainSpace");


    let genre = document.createElement("p");
    genre.innerText = `Actors: ${res.Genre}`;

    let actors = document.createElement("p");
    actors.innerText = `Actors: ${res.Actors}`;

    let director = document.createElement("p");
    director.innerText = `Director: ${res.Director}`;


    let writer = document.createElement("p");
    writer.innerText = `Writer: ${res.Writer}`;


    let awards = document.createElement("p");
    awards.innerText = `Award: ${res.Awards}`;

    let plot = document.createElement("p");
    plot.innerText = `Plot: ${res.Plot}`;

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${res.imdbRating}`;

    let releaseDate = document.createElement("p")
    releaseDate.innerText = `Release Date: ${res.Released}`;

    if(Number(res.imdbRating) > 8.5){
        mainSpace.append(title, rec);

    } else{
        mainSpace.append(title);
    }

    let desc = document.createElement("div");
    desc.setAttribute("class", "desc");
    desc.append(mainSpace, genre, plot, actors, director, writer, awards, rating, releaseDate);

    desc.style.borderLeft = "1px solid gray";

    right.style.border = "1px solid gray"

    card.append(poster, desc);

    right.append(card);

}

function errorfunction123() {


    right.innerHTML = "";
    right.style.backgroundImage = "url('http://test.ultralinx.co/wp-content/uploads/2020/03/1_2__3_gif.gif')"
    // right.style.background = "url(http://test.ultralinx.co/wp-content/uploads/2020/03/1_2__3_gif.gif) no-repeat center center'";
    right.style.backgroundRepeat = "no-repeat"
    let errorMsg = document.createElement("h3");
    errorMsg.setAttribute("class", "errorMsg");
    errorMsg.innerText = "Uh Oh! Movie Not Found!"

    right.style.border = "0"

    right.append(errorMsg)





}

let trendingBtn = document.getElementById('trending')
trendingBtn.addEventListener('click', () => {
    window.location.href = 'trending.html'
})