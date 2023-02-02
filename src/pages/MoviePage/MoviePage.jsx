// import React, {useState, useEffect} from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from 'components/Loader/Loader';

import SearchForm  from '../../components/SearchForm/SearchForm';
import Status from 'utils/StateMashin';
import { getMoviesSearch } from 'services/moviesApi';
import MovieList from 'components/MovieList/Movielist';


const MoviePage =()=> {
 const [movies, setMovies] = useState(null);
 const [status, setStatus] = useState(Status.IDLE);
 const [searchParams, setSearchParams] = useSearchParams();
 const searchQuery = searchParams.get('query');
 const location = useLocation();
console.log('MoviePage', location);
 
 useEffect(() => {
  if(!searchQuery){
    return;
  }
 async function fetchMovies(){
  setStatus(Status.PENDING);
  try {
    const movies = await getMoviesSearch(searchQuery);
    if (movies.results.length === 0){
      setStatus(Status.REJECTED);
      toast.info('Sorry, no results were found');
      return;
    }
    setMovies(movies.results);
    setStatus(Status.RESOLVED);

  } catch(error){
    console.log(error);
    setStatus(Status.REJECTED);
  }
 }
 fetchMovies();
 
 }, [searchQuery]);
const handleSubmit = query => {
    if(!query.trim()){
      setMovies(null);
      toast.info('Please, enter something');
    }
    setSearchParams({query});
}
  return (
   <>
   <SearchForm onSubmit={handleSubmit}/>
   {status === Status.IDLE || (status === Status.RESOLVED && <></>)}
   {status === Status.PENDING && <Loader/>}
   {status  === Status.RESOLVED && movies &&(
        <MovieList movies={movies}
        locationState={location}
         title={'Search results'}  />
      )}
    
 
 
   <ToastContainer toastStyle={{ backgroundColor: "#7440A7" }} 
   position="top-center" 
   autoClose={2000} 
   theme="colored" />
   </>
  );
};
export default MoviePage;