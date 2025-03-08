import { useReducer } from "react";

const initialState = {count : 0};

const reducer = (state,action) => {
    switch (action.type) {
        case "increment":
            return {...state , count: state.count + 1};
        case "decrement":
            return {...state , count: state.count - 1};
        case "reset":
            return {...state , count : 0};
        default:
            return state;
    }
}


const Reducer = () => {

    const [state , dispatcher] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatcher({type : "increment"})}>+</button>
            <button onClick={() => dispatcher({type : "decrement"})}>-</button>
            <button onClick={() => dispatcher({type : "reset"})}>Reset</button>
        </div>
    );
};

export default Reducer;