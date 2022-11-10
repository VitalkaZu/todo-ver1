import React from "react";

import Task from "../task";

const TodoList = ({todos, onDeleted})=>{
    const arrTodo = todos.map(item => {
        const {id, ...itemProps} = item

        // <li key = {id} className={completed ? "completed" : ""}><Task {...itemProps} /></li>
        // label = {item.label}
        // important = {item.important} /></li>
        return (
            <Task key={id} {...itemProps}
            onDeleted={()=>onDeleted(id)}/>
        )
    })


    return (
            <ul className="todo-list">
                {arrTodo}
            </ul>
    )
}

export default TodoList;