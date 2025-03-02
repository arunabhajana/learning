import { useState } from "react";

const Todo = () => {

    const [todolist, setTodo] = useState(['Wash Dishes', 'Wash Clothes']);
    const addTodo = () => {
        setTodo([...todolist , 'Do Homework']);
    }


    return (
        <div>
            {todolist.map((t , index) => (
                <li key={index}>{t}</li>
            ))}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default Todo;