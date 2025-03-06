import {useState , useEffect} from 'react'


const BasicEffects = () => {

    const[value,setValue] = useState(0);

    useEffect(() => {
        console.log("useEffect Triggered");
        document.title = `Count : ${value}`
    },[]);

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue(value+1)}>Click Me</button>
        </div>
    );
}

export default BasicEffects;