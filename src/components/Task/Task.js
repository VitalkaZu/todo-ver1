import React from "react";
import {formatDistanceToNow} from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends React.Component {

    state = {
        label:this.props.label,
        editing: false
    }

    onLabelChange = (e) => {
        this.setState({
                label: e.target.value
            }
        )
    }

    submitTask = (e) => {
        e.preventDefault();
        if (this.state.label) {
            this.props.editLabelTask(this.state.label)
            this.setState({
                // label: "",
                editing: false
            })
        }
    }

     classTask = () => {
        let classTask = "task"
        if (this.state.editing) classTask += " editing"
        if (this.props.completed) classTask += " completed"
        return classTask
    }

    editTask = () => {
        this.setState({
                editing: true,
            }
        )
    }

    render() {
        const {label, publicDate, completed, onDeleted, completeTask} = this.props

        const  timeDistance = formatDistanceToNow(
            publicDate,
            {addSuffix: true}
        )

        return (
            <li className={this.classTask()}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={completeTask} checked={completed}/>
                    <label >
                        <span className="description" onClick={completeTask}>{label}</span>
                        <span className="created">{timeDistance}</span>
                    </label>
                    <button className="icon icon-edit" onClick={this.editTask}></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
                <form onSubmit={this.submitTask}>
                <input type="text" className="edit" value={this.state.label} onChange={this.onLabelChange}/>
                </form>
            </li>
        )
    }
}

Task.defaultProps = {
    publicDate: new Date(),
    completed: false
};

Task.propTypes = {
    label: PropTypes.string.isRequired,
    publicDate: PropTypes.instanceOf(Date),
    completed: PropTypes.bool,
    onDeleted: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
    editLabelTask: PropTypes.func.isRequired
};