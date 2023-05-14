const input = document.getElementById("inputMovie");
const buttonMovie = document.getElementById("buttonMovie");
const results = document.getElementById("results");
const results2 = document.getElementById("results2");

const key = "e4b3b0e01c98dde5382f39171487969f";

console.log(input.value);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getMovies();
  }
});

let getMovies = () => {
  let movieName = input.value;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${input.value}`;

  if (movieName.length <= 0) {
    results.innerHTML = `<h3 class="msg">Please enter a movie name</h3>`;
  } else {
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let flechaD = document.getElementsByClassName("flechaD");

      results.innerHTML = `
      <div class="info">
      <a class="flechaD" onclick="restarPelicula()">⪻</a>
      <a class="flechaIz" onclick="sumarPelicula()">⪼</a>
          <h1 id="movieTitle">${data.results[0].original_title}</h1>
            <img src="https://image.tmdb.org/t/p/w200${data.results[0].poster_path}">
            <p id="voteAverage">${data.results[0].vote_average}/10</p>
        <p id="movieOverview">${data.results[0].overview}</p>
        <p id="releaseDate">${data.results[0].release_date}</p>
          </div>
      `;
    });
};

let restarPelicula = (data) => {
  console.log("Restar Pelicula");
  console.log("loko2");
  let info = document.querySelector(".info");
  info.classList.add("hidden");
  results2.innerHTML = `
  <div class="info2">
  <a class="flechaD">⪻</a>
  <a class="flechaIz">⪼</a>
      <h1 id="movieTitle">${data.results[0 + 1].original_title}</h1>
        <img src="https://image.tmdb.org/t/p/w200${
          data.results[0 + 1].poster_path
        }">
        <p id="voteAverage">${data.results[0 + 1].vote_average}/10</p>
    <p id="movieOverview">${data.results[0 + 1].overview}</p>
    <p id="releaseDate">${data.results[0 + 1].release_date}</p>
      </div>
  `;
};

let sumarPelicula = () => {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${input.value}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      console.log("this is data page " + (data.page + 1));

      let info = document.querySelector(".info");
      info.classList.add("hidden");
      results2.innerHTML = `
  <div class="info2">
  <a class="flechaD">⪻</a>
  <a class="flechaIz" onclick="sumarPelicula()">⪼</a>
      <h1 id="movieTitle">${data.results[+1].original_title}</h1>
        <img src="https://image.tmdb.org/t/p/w200${
          data.results[+1].poster_path
        }">
        <p id="voteAverage">${data.results[+1].vote_average}/10</p>
    <p id="movieOverview">${data.results[+1].overview}</p>
    <p id="releaseDate">${data.results[+1].release_date}</p>
      </div>
  `;
    });
};

// ⪻

// let getNextMovie = (data) => {
//   console.log("loko2");
//   let info = document.querySelector(".info");
//   info.classList.add("hidden");
//   results.innerHTML = `
//   <div class="info">
//   <a class="flechaD">⪻</a>
//   <a class="flechaIz">⪼</a>
//       <h1 id="movieTitle">${data.results[0 + 1].original_title}</h1>
//         <img src="https://image.tmdb.org/t/p/w200${
//           data.results[0 + 1].poster_path
//         }">
//         <p id="voteAverage">${data.results[0 + 1].vote_average}/10</p>
//     <p id="movieOverview">${data.results[0 + 1].overview}</p>
//     <p id="releaseDate">${data.results[0 + 1].release_date}</p>
//       </div>
//   `;
// };

// let getMovies = () => {
//   let movieName = input.value;
//   let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.results);

//       data.results.length === 0
//         ? (results.innerHTML = ` <div class="info noData"><h3>Please Enter Movie Name</h3></div>`)
//         : data.results.length >= 2
//         ? (results.innerHTML = `
//       <div class="info">
//       <a class="flechaD">⪻</a>
//       <a class="flechaIz">⪼</a>
//           <h1 id="movieTitle">${data.results[0].original_title}</h1>
//             <img src="https://image.tmdb.org/t/p/w200${data.results[0].poster_path}">
//             <p id="voteAverage">${data.results[0].vote_average}/10</p>
//         <p id="movieOverview">${data.results[0].overview}</p>
//         <p id="releaseDate">${data.results[0].release_date}</p>
//           </div>
//       `)
//         : (results.innerHTML = `
//         <div class="info">
//             <h1 id="movieTitle">${data.results[0].original_title}</h1>
//               <img src="https://image.tmdb.org/t/p/w200${data.results[0].poster_path}">
//               <p id="voteAverage">${data.results[0].vote_average}/10</p>
//           <p id="movieOverview">${data.results[0].overview}</p>
//           <p id="releaseDate">${data.results[0].release_date}</p>
//             </div>
//         `);
//     });
// };
