const input = document.getElementById("inputMovie");
const buttonMovie = document.getElementById("buttonMovie");
const results = document.getElementById("results");
const results2 = document.getElementById("results2");

const key = "e4b3b0e01c98dde5382f39171487969f";

console.log(input.value);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    currentPage = 0;
    getMovies();
  }
});

buttonMovie.addEventListener("click", function (event) {
  event.preventDefault();
  currentPage = 0;
  getMovies();
});

let currentPage = 0;

let getMovies = () => {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${input.value}`;

  if (input.value.length <= 0) {
    results.innerHTML = `<h3 class="info noData">Please enter a movie name</h3>`;
  } else {
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      data.results.length === 0
        ? (results.innerHTML = `<h3 class="info noData">Please enter a movie name</h3>`)
        : (results.innerHTML = `
      <div class="info">
      <a class="flechaD" id="flechaD">⪼</a>
      <a class="flechaIz" id="flechaIz">⪻</a>
          <h1 id="movieTitle">${data.results[currentPage].title}</h1>
            <img id="image404" src="https://image.tmdb.org/t/p/w200${data.results[currentPage].poster_path}">
            <p id="voteAverage">${data.results[currentPage].vote_average}/10</p>
        <p id="movieOverview">${data.results[currentPage].overview}</p>
        <p id="releaseDate">${data.results[currentPage].release_date}</p>
          </div>
      `);
      removeArrows(data);
      arrowsChangeMovie();
      changeImg(data);
    });
};

let removeArrows = (data) => {
  let flechaIz = document.getElementById("flechaIz");
  let flechaD = document.getElementById("flechaD");

  currentPage + 1 === data.results.length
    ? flechaD.classList.add("hidden")
    : flechaD.classList.remove("hidden");

  currentPage === 0
    ? flechaIz.classList.add("hidden")
    : flechaIz.classList.remove("hidden");
};

let arrowsChangeMovie = () => {
  let flechaD = document.getElementById("flechaD");
  let flechaIz = document.getElementById("flechaIz");

  flechaD.addEventListener("click", function () {
    currentPage++;
    getMovies();
  });

  flechaIz.addEventListener("click", function () {
    currentPage--;
    getMovies();
  });
};

let changeImg = (data) => {
  data.results[currentPage].poster_path === null
    ? (document.getElementById("image404").src = "./NotFoundMovieNice.png")
    : data.results[currentPage].poster_path;
};
