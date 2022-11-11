import React from "react";


const NewTaskForm = (props) => {
    const onKeyEnter = (event) => {
        if(event.key === 'Enter'){
            props.addTask("TEST")
        }
    }

    return (
        <input className="new-todo" placeholder="What needs to be done?"
        onKeyDown={onKeyEnter}/>
    )
}

export default NewTaskForm;