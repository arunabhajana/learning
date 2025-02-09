import { useState } from "react";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";

const Sharing = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <Comp1 count={count} onClickHandler = {() => setCount(count+1)} />
            <Comp2 count={count} onClickHandler = {() => setCount(count+1)} />
        </div>
    );
}

export default Sharing;