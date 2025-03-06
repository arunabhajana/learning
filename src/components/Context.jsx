import { createContext } from "react";
import ComponentA from "./ComponentA";

export const Data = createContext(); // First Instance
export const Data1 = createContext(); // Second Instance

const Context = () => {
    const name = "Alice"; // Data to pass
    const age = 25; // Second Data

    return (
        <Data.Provider value={name}>
            <Data1.Provider value={age}>
            <ComponentA />
            </Data1.Provider>
        </Data.Provider>
    );
}

export default Context;
