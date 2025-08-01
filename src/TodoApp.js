import React, { useEffect } from 'react';

function TodoApp() {
    const [toDo, setToDo] = React.useState("");
    const [toDos, setToDos] = React.useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
        console.log("ToDos:", toDos);
    };

    return (
        <div>
            <h1>Todo App ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} placeholder="Add a new todo" />
                <button type="submit">Add Todo</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;