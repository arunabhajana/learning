import { useContext } from "react";
import { Data } from "./ContextHook.jsx";

const ComponentB = () => {

    const userName = useContext(Data);


    return (
        <div>
            {userName}
        </div>
    );
}

export default ComponentB;