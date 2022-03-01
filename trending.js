const API_KEY = "55628b9d02ef84132ba8bcb4ae34a9f4";
let trendingMoviesDiv = document.getElementById('trendingMovies');

async function getData() {

    let data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)

    let res = await data.json();

    console.log(res.results);

    populate(res.results);


}

getData();


let populate = (movies) => {

    trendingMoviesDiv.innerHTML = "";

    movies.map((el) => {

        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let poster = document.createElement('img')
        poster.src = `https://image.tmdb.org/t/p/original/${el.poster_path}`;
        poster.className = "poster"

        let title = document.createElement('p');
        if(el.title == undefined){
            title.innerText = `Title: ${el.name}`;
        } else{
            
            title.innerText = `Title: ${el.title}`;
        }

        let rating = document.createElement('p')
        rating.innerText = `Rating: ${el.vote_average}`;


        let release_date = document.createElement('p')
        if(el.release_date == undefined){
            release_date.innerText = `Release Date: ${el.first_air_date}`;
        } else{
            release_date.innerHTML = `Release Date: ${el.release_date}`;
            
        }

        let desc = document.createElement("div");
        desc.setAttribute("class", "desc");

        desc.append(title,rating,release_date);

        card.append(poster,desc);

        trendingMoviesDiv.append(card);


    })
}

let homeBtn = document.getElementById('home')
homeBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
})