import axios from 'axios'
import { useEffect, useState } from 'react'


const newPost = {
    title: 'New Post',
    body: 'New Post Using Axios On ReactJS',
    userId: 1
}

const AxiosPost = () => {

    const[data,setData] = useState(null);

    useEffect(() => {
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
        .then(response => {
            setData(response.data);
        });
    },[]);

    return (
        <div>
            <h1>Posted Successfully !</h1>
            <p>{data?.title}</p>
        </div>
    );
}

export default AxiosPost;