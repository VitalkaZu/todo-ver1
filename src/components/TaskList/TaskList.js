import React from "react";

import Task from "../task";

const TaskList = (props)=>{
    const {todos, onDeleted, completeTask, editLabelTask} = props

    const arrTodo = todos.map(item => {
        const {id, ...itemProps} = item

        return (
            <Task key={id} {...itemProps}
            onDeleted={()=>onDeleted(id)}
            completeTask ={() => completeTask(id)}
            editLabelTask = {(text) => editLabelTask(id, text)}/>
        )
    })


    return (
            <ul className="todo-list">
                {arrTodo}
            </ul>
    )
}

export default TaskList;