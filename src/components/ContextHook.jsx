import { createContext } from "react";
import ComponentB from "./ComponentB";

export const Data = createContext();

const ContextHook = () => {
    const name = "Alice";

    return (
        <div>
            <Data.Provider value={name}>
                <ComponentB />
            </Data.Provider>
        </div>
    );
}

export default ContextHook;