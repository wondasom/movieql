// let movies = [
// 	{ id: 0, name: 'Captain Marvel', score: 7 },
// 	{ id: 1, name: 'Take this Waltz', score: 7 },
// 	{ id: 2, name: 'Money Ball', score: 9 },
// 	{ id: 3, name: 'Inside Job', score: 8 },
// 	{ id: 4, name: 'Logan', score: 8 },
// 	{ id: 5, name: 'My Dear Genius', score: 9 },
// 	{ id: 6, name: 'Maggie', score: 9 }
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
// 	const filteredMovies = movies.filter((movie) => movie.id === id);
// 	return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
// 	const cleanedMovies = movies.filter((movie) => movie.id !== id);
// 	if (movies.length > cleanedMovies.length) {
// 		movies = cleanedMovies;
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// export const addMovie = (name, score) => {
// 	const newMovie = {
// 		id: `${movies.length}+1`,
// 		name,
// 		score
// 	};
// 	movies.push(newMovie);
// 	return newMovie;
// };
import fetch from 'node-fetch';

const API_URL = 'https://yts.mx/api/v2/list_movies.json?';

export const getMovies = (limit, rating) => {
	let REQUEST_URL = API_URL;
	if (limit > 0) {
		REQUEST_URL += `limit=${limit}`;
	}
	if (rating > 0) {
		REQUEST_URL += `&minimum_rating=${rating}`;
	}
	return fetch(REQUEST_URL)
		.then((res) => res.json())
		.then((json) => json.data.movies);
};
