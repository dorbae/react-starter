import { useEffect} from "react";
import { useParams } from "react-router-dom";


function Detail() {
    const { id } = useParams();
    const getMovieDetails = async (movieId) => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`);
        const data = await response.json();
        console.log(data);
    };
    useEffect(() => {
        getMovieDetails(id);
    }, []);

    return (
        <div>
            <h1>Detail Page {id}</h1>
            {/* Detail content goes here */}
        </div>
    );
}

export default Detail;
