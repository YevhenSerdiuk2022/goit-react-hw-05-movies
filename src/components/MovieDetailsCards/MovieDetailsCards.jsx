import PropTypes from "prop-types";
import { BASE_URL_IMG } from "services/moviesApi";
import { Card, Img, Info } from "./MovieDetailscards.styled";
import fallback from "images/fallback.jpg";

const MovieDetailsCards = ({ movie }) => {
  const {
    title,
    release_date,
    genres,
    overview,
    poster_path,
    vote_average,
  } = movie;
  const userScore = vote_average * 10;
  const year = release_date.slice(0, 4);
  return (
    <Card>
      <Img
        src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback}
        alt={title}
      />
      <Info>
        <h2>
          {title} ({year})
        </h2>
        <p>User score: {userScore} %</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres.map(({ id, name }) => (
          <span key={id}>{name} </span>
        ))}
      </Info>
    </Card>
  );
};

MovieDetailsCards.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

export default MovieDetailsCards;
