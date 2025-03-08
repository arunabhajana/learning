import { useRef } from "react";

const Ref = () => {

    const inputElement = useRef(null);
    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "Alice";
    }

    return (
        <div>
            <input type="text" ref={inputElement}></input>
            <button onClick={() => focusInput()}>Focus & Write Alice</button>
        </div>
    );
}

export default Ref;