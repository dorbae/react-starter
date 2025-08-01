import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, medium_cover_image, title, rating, summary, genres }) {
    return (
        <div>
            <img src={medium_cover_image} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title} ({rating})</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Movie;
