import React from "react";
import PropTypes from 'prop-types';

import Task from "../Task";

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

TaskList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            completed: PropTypes.bool,
            publicDate: PropTypes.instanceOf(Date),
            id: PropTypes.string.isRequired
        })
    ),
    onDeleted: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
    editLabelTask: PropTypes.func.isRequired
}

export default TaskList;

