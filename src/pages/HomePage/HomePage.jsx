import MovieList from '../../components/MovieList/Movielist';
import React, {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom';
import { getTrending } from "services/moviesApi";
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import Status from 'utils/StateMashin';


const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();

  
useEffect(() => {
  setStatus(Status.PENDING);
 
  async function fetchTrending(){
    try{
      const movies = await getTrending();
      setMovies(movies.results);
      setStatus(Status.RESOLVED);
    }
    catch(error){
      console.log(error);
      setStatus(Status.REJECTED);
    }
  }
  fetchTrending();
}, []);

    return (
      <>
      {status  === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <Error />}
      {status  === Status.RESOLVED && movies &&(
        <MovieList movies={movies}
        locationState={location}
         title={'Trending today'}  />
      )}
       
      </>
    );
  };

  export default HomePage;