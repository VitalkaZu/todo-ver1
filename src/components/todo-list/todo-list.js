import React from "react";

import Task from "../task";

const TodoList = ({todos})=>{
    const arrTodo = todos.map(item => {
        const {id, completed, ...itemProps} = item
        return (
            <li key = {id} className={completed ? "completed" : ""}><Task {...itemProps} /></li>
                // label = {item.label}
                // important = {item.important} /></li>
        )
    })


    return (
            <ul className="todo-list">
                {arrTodo}
            </ul>
    )
}

export default TodoList;