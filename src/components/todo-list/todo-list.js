import React from "react";

import TodoListItem from "../todo-list-item";

const TodoList = ({todos})=>{
    const arrTodo = todos.map(item => {
        const {id, ...itemProps} = item

        return (
            <li key = {id} className="list-group-item"><TodoListItem {...itemProps} /></li>
                // label = {item.label}
                // important = {item.important} /></li>
        )
    })


    return (
        <ul className="list-group">
            {arrTodo}
        </ul>
    )
}

export default TodoList;