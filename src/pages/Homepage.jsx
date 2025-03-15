import { Link } from "react-router-dom";


const Homepage = () => {


    return (
        <div>
            <h2>Welcome To React Learning Session - Here Are Quick Links To Other React Pages.</h2>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/app"}>App</Link></li>   
                <li><Link to={"/axios"}>Axios</Link></li>
                <li><Link to={"/query"}>Tanstack Query</Link></li>
            </ul>
        </div>
    );
}

export default Homepage;