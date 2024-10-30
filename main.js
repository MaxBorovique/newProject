const numberOfMovies = +prompt('Скільки фільмів ви подивились останнім часом?', '');
const personalMovieDB = {
  count: numberOfMovies,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Назвіть один із останній переглянутих фільмів', ''),
      b = prompt('На скільки ви можете оцінити його?', ''),
      c = prompt('Назвіть один із останній переглянутих фільмів', ''),
      d = prompt('На скільки ви можете оцінити його?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);