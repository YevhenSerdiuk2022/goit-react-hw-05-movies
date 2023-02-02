import React, {useState, useEffect} from "react";
import {Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { getMovieDetails } from '../../services/moviesApi';
import Status from "utils/StateMashin";
import MovieDetailsCards from "components/MovieDetailsCards/MovieDetailsCards";
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";
import { Button } from "components/Button/Button.styled";
import { CastLink, AdditionalBox } from "./MovieDetails.styled";



const MovieDetails = () => {
 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const { movieId} = useParams();
  const [movie, setMovie] =  useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    async function fetchMovieDetails(){
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
        setStatus(Status.RESOLVED);
      }
      catch(error){
        console.log(error);
        setStatus(Status.REJECTED);
      }
    }
    fetchMovieDetails();
  },[movieId]);

 
  const goBack = () => navigate(from);
  return (
      <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <Error />}
      {status === Status.RESOLVED && movie && (
        <>
        <Button onClick={goBack}>Go Back</Button>
        <MovieDetailsCards movie={movie}/>
        <AdditionalBox>
        <CastLink state={{from}} to={'cast'}>Cast</CastLink >
        <CastLink state={{from}} to={`/movies/${movieId}/reviews`}>Reviews</CastLink>
        </AdditionalBox>
        
        <Outlet/>
      
       
        </>
      )}
        
      </>
  
  );
};

export default MovieDetails;