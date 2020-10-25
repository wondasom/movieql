let movies = [
	{ id: 0, name: 'Captain Marvel', score: 7 },
	{ id: 1, name: 'Take this Waltz', score: 7 },
	{ id: 2, name: 'Money Ball', score: 9 },
	{ id: 3, name: 'Inside Job', score: 8 },
	{ id: 4, name: 'Logan', score: 8 },
	{ id: 5, name: 'My Dear Genius', score: 9 },
	{ id: 6, name: 'Maggie', score: 9 }
];

export const getMovies = () => movies;

export const getById = (id) => {
	const filteredMovies = movies.filter((movie) => movie.id === id);
	return filteredMovies[0];
};

export const deleteMovie = (id) => {
	const cleanedMovies = movies.filter((movie) => movie.id !== id);
	if (movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		return true;
	} else {
		return false;
	}
};

export const addMovie = (name, score) => {
	const newMovie = {
		id: `${movies.length}+1`,
		name,
		score
	};
	movies.push(newMovie);
	return newMovie;
};
