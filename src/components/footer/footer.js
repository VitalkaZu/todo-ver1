import React from "react";
import "../task-filter"
import TaskFilter from "../task-filter";
const Footer = (props) => {

    return (
        <footer className="footer">
            <span className="todo-count">{props.completed} items left</span>
            <TaskFilter chooseFilter={props.chooseFilter} />
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer;