import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BASE_URL_IMG } from 'services/moviesApi';
import fallback from 'images/fallback.jpg';
import { Card, Img, Info } from './MovieListItem.styled';

export const MovieListItem = ({
  movie: { id, title, poster_path },
  locationState,
}) => {
    return (
      <Link to={`/movies/${id}`} state={{from: locationState}}>
        <Card>
          <Img 
          src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback} />
         <Info>{title}</Info> 
        
        </Card>
        </Link>
    );
  };

  MovieListItem.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
    locationState: PropTypes.object.isRequired,
  };