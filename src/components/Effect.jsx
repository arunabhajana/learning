import { useState, useEffect } from "react";

const Effect = () => {

    const [value,setValue] = useState(0);

    useEffect(() => {
        console.log('Call useEffect');
        document.title = `Increment ${value}`
    })

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => setValue(value + 1)}>Click Me</button>
        </div>
    );
}

export default Effect;