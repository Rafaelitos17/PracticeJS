"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a1 = prompt("Один из последних просмотренных фильмов?", ""),
    b1 = +prompt("На сколько оцените его?", ""),
    a2 = prompt("Один из последних просмотренных фильмов?", ""),
    b2 = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[a1] = b1;
personalMovieDB.movies[a2] = b2;

console.log(personalMovieDB);