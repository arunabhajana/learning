import {useState} from "react"

const MovieDB = () => {

    const [movies,setMovies] = useState([{
        id: 1,
        title : "Spiderman",
        rating : 5
    },{
        id: 2,
        title : "Superman",
        rating : 3
    }]);

    const handleclick = () => {
        setMovies(
            movies.map((m) => (m.id === 1) ? {...movies , title: "John Wick"} : m))}


    return (
        <div>
            {movies.map(m => (
                <li key = {Math.random()}>{m.title}</li>
            ))}

            <button onClick={handleclick}>Change Movie Title</button>
        </div>
    );
}

export default MovieDB;


// useState() for Object Inside An Array