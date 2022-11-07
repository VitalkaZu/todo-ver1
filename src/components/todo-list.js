import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = ({todos})=>{
    const arrTodo = todos.map(item => {
        const {id, ...itemProps} = item

        return (
            <li key = {id}><TodoListItem {...itemProps} /></li>
                // label = {item.label}
                // important = {item.important} /></li>
        )
    })


    return (
        <ul>
            {arrTodo}
        </ul>
    )
}

export default TodoList;