import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/moviesApi";
import { Ul } from "./MovieDetailsReviews.styled";

const MovieDetailsReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const movieReviews = await getReviews(movieId);

        if (movieReviews.results.length === 0) {
          return;
        }
        setReviews(movieReviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <Ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <span>Author: {author}</span>
              <p>{content}</p>
            </li>
          ))}
        </Ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default MovieDetailsReviews;
