import React, {useState, useEffect} from "react";
import {  useParams } from "react-router-dom";
import { BASE_URL_IMG, getCast } from '../../services/moviesApi';
import defaultImages from '../../images/defaultImg.jpg';
import {Ul} from './MovieDetailsCast.styled';

const MovieDetailsCast = () => {
  const { movieId} = useParams();
  const [cast, setCast] =  useState(null);
 

  useEffect(() => {
      async function fetchCast(){
      try {
        const movieCast = await getCast(movieId);
        setCast( movieCast.cast);
       
      }
      catch(error){
        console.log(error);
       
      }
    }
    fetchCast();
  },[movieId]);

 
  return (
      <>
      {cast && (
     <Ul>
        {cast.map(({id, name, character, profile_path})=> (
            <li key={id}>
                <img 
                src={ profile_path ? `${BASE_URL_IMG}/${profile_path}` :defaultImages }alt={name} />
                <p>{name}</p>
                <p>
                <span>Character:</span> {character}
              </p>
            </li>
        ))}
     </Ul>
      )}
    

       
       
        </>
    
        
    
  
  );
};

export default MovieDetailsCast;