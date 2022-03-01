const API_KEY = "55628b9d02ef84132ba8bcb4ae34a9f4";
let trendingMoviesDiv = document.getElementById('trendingMovies');

async function getData() {

    let data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)

    let res = await data.json();

    console.log(res.results);

    populate(res.results);


}

getData();

// adult: false
// backdrop_path: "/oQPbZ5e6J9fuAyv4Gl0mMZMIyPI.jpg"
// genre_ids: (4) [28, 12, 53, 10752]
// id: 476669
// media_type: "movie"
// original_language: "en"
// original_title: "The King's Man"
// overview: "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them."
// popularity: 470.655
// poster_path: "/nj5HmHRZsrYQEYYXyAusFv35erP.jpg"
// release_date: "2021-12-22"
// title: "The King's Man"
// video: false
// vote_average: 6.8
// vote_count: 465

// backdrop_path: "/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg"
// first_air_date: "2021-12-29"
// genre_ids: (2) [10759, 10765]
// id: 115036
// media_type: "tv"
// name: "The Book of Boba Fett"
// origin_country: ['US']
// original_language: "en"
// original_name: "The Book of Boba Fett"
// overview: "Legendary bounty hunter Boba Fett and mercenary Fennec Shand must navigate the galaxy’s underworld when they return to the sands of Tatooine to stake their claim on the territory once ruled by Jabba the Hutt and his crime syndicate."
// popularity: 2712.977
// poster_path: "/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg"
// vote_average: 8.3
// vote_count: 822

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