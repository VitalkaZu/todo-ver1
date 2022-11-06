import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = ()=>{
    return (
        <ul>
            <li><TodoListItem label="Drink Coffee" /></li>
            <li><TodoListItem
                label="Repair car"
                important /></li>
        </ul>
    )
}

export default TodoList;