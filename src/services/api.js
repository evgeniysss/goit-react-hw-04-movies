import axios from 'axios';

const keyQ = 'b8c07d967f5a7bfc4387519364b1cf54';

export const getHomePage = () =>
  axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${keyQ}`);

export const getMoviesPage = (query = 'Yoyo') =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${keyQ}&language=en-US&query=${query}&page=1&include_adult=false`,
  );

export const getMovieDetailsPage = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${keyQ}&language=en-US`,
  );

export const getCast = id =>
  axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keyQ}`); //

export const getReview = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${keyQ}&language=en-US&page=1`,
  );
