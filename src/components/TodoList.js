import React from "react";
import {useState} from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeTodo }) {
    return(
        <ul style={{ liststyle: 'none' }}>
            {todos.map(todo => (
                <Todo 
                    todo={todo} 
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;