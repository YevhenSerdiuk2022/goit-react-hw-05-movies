import PropTypes from 'prop-types';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { Title, Ul } from './MovieList.styled';


const MovieList = ({movies, title, locationState}) => {
    return (
        <>
        <Title>{title}</Title>
        <Ul>
            {movies.map(movie =>(
                <MovieListItem key={movie.id}
                 movie={movie}
                 locationState={locationState} />
                          
            ))}
       
        </Ul>
        </>
    )
};

MovieList.propTypes ={
    title: PropTypes.string,
    movies:PropTypes.array,
   
};
export default MovieList;