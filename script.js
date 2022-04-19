const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', "");

const pesonalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 const a = prompt('Один из последних просмотренних фильмов', ''),
       b = prompt('На сколько оцените его?', '')
       c = prompt('Один из последних просмотренних фильмов', ''),
       d = prompt('На сколько оцените его?', '');
    

       pesonalMoviDB.movies[a] = b;
       pesonalMoviDB.movies[c] = d;

       console.log(pesonalMoviDB);
       