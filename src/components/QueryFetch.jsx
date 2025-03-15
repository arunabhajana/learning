import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

const fetchdata = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}

const QueryFetch = () => {

    const{ data , isLoading , error} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchdata,
    });

    if(isLoading) return <p>Loading ...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <div>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))};
            </ul>
        </div>
    );
};

export default QueryFetch;