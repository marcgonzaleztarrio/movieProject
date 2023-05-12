const input = document.getElementById("inputMovie");
const buttonMovie = document.getElementById("buttonMovie");
const results = document.getElementById("results");

const key = "e4b3b0e01c98dde5382f39171487969f";

buttonMovie.onclick = () => {
  getMovies();
};

let getMovies = () => {
  let movieName = input.value;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`;

  if (movieName.length <= 0) {
    results.innerHTML = `<h3 class="msg">Please enter a movie name</h3>`;
  } else {
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      results.innerHTML = `
      <div class="info">
          <h1 id="movieTitle">${data.results[0].original_title}</h1>
          <div id="gridContainer">
            <img class="gridContent poster" src="https://image.tmdb.org/t/p/w200${data.results[0].poster_path}">
            <p class="gridContent" id="voteAverage">${data.results[0].vote_average}/10</p>
          </div>
        <p id="movieOverview">${data.results[0].overview}</p>
        <p id="releaseDate">${data.results[0].release_date}</p>
          </div>
      `;
    });
};
