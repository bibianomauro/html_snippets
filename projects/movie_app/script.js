const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");


// Get initial movies
getMovies(API_URL);

async function getMovies(url)
{
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
};

function showMovies(movies)
{
  main.innerHTML = "";
  for(let i = 0; i < movies.length; i++)
  {
    let {
      title: title,
      poster_path: poster_path,
      vote_average: vote_average,
      overview: overview,
    } = movies[i];
    
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
      />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
    main.appendChild(movieEl);
  }
};

function getClassByRate(rating)
{
  if(rating >= 7.5)
  {
    return "green";
  }
  else if(rating < 5)
  {
    return "red";
  };
  return "orange";
};

form.addEventListener("submit", function(e)
{
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm && searchTerm != "")
  {
    const rola = getMovies(SEARCH_API + searchTerm);
    search.value = "";
  }
  else
  {
    window.location.reload();
  };
});