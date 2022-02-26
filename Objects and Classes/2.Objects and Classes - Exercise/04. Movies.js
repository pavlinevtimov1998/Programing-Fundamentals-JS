function movies(array) {
  let movies = [];

  for (let element of array) {
    if (element.includes("addMovie")) {
      let [_, ...movieName] = element.split(" ");
      let movieAsString = movieName.join(" ");
      let movieObject = {
        name: movieAsString,
      };
      movies.push(movieObject);
    } else if (element.includes("directedBy")) {
      let arr = element.split(" ");
      let index = arr.indexOf("directedBy");
      let name = arr.slice(0, index).join(" ");
      let director = arr.slice(index + 1).join(" ");

      let movie = movies.find((x) => x.name === name);
      if (movie) {
        movie.director = director;
      }
    } else {
      let arr = element.split(" ");
      let index = arr.indexOf("onDate");
      let name = arr.slice(0, index).join(" ");
      let date = arr.slice(index + 1).join(" ");

      let movie = movies.find((x) => x.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
  for (let movie of movies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
