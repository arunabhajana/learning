import axios from 'axios'
import { useEffect, useState } from 'react';

const AxiosGet = () => {

    const[data,setData] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setData(response.data);
        });
    },[]);

    return (
        <div>
            <h1>{data?.title}</h1>
        </div>
    );
}

export default AxiosGet;
