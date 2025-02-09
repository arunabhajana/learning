import { useState } from "react";

const Movie = () => {

    const [movies, setMovies] = useState({
        title: 'Interstellar',
        rating: 5
    });

    const updateRating = () => {
        const copyMovie = {
            ...movies,
            rating: 3
        }
        setMovies(copyMovie);
    }

    return (
        <div>
            <h2>Title: {movies.title}</h2>
            <h2>Rating: {movies.rating}</h2>
            <button onClick={updateRating}>Update Rating</button>
        </div>
    );
}

export default Movie;


// useState() Using Objects