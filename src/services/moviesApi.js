import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '431ab85139813dba3796c445694ce723';
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

export const getTrending = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  };

  export const getMovieDetails = async id => {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  };

  export const getMoviesSearch = async query => {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data;
  }; 
  export const getCast = async id => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data;
  };
  export const getReviews = async id => {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data;
  };
