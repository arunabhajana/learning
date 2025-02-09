import { useState } from "react";

const State = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return (
        <div>
            <p>{count}</p>
            <button onClick={ increment }>+</button>
        </div>
    )
}

export default State;

// UseState Hook 