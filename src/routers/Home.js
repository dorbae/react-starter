import React, { useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5");
        const data = await response.json();
        setLoading(false);
        setMovies(data.data.movies);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <h1>Movies({loading ? 0 : movies.length})</h1>
            {loading ? <strong>Loading...</strong> : (
                <div>
                    {movies.map(movie => (
                        <Movie  id={movie.id}
                                medium_cover_image={movie.medium_cover_image}
                                title={movie.title}
                                rating={movie.rating}
                                summary={movie.summary}
                                genres={movie.genres}
                                key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;