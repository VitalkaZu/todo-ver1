import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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

     classNameEdit = () => {
        let classTask = "task"
        if (this.state.editing) classTask += " editing"
        if (this.props.completed) classTask += " completed"
        return classTask
    }

    editTask = () => {
        this.setState(({editing}) => {
            return {
                editing: true,
            }
        })
        // this.classNameEdit(true);
    }

    render() {
        const {label, publicDate, completed, onDeleted, completeTask} = this.props

        const  timeDistance = formatDistanceToNow(
            publicDate,
            {addSuffix: true}
        )

        return (
            <li className={this.classNameEdit()}>
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


// const Task = ({label, publicdate}) => {
//     const  timeDistance = formatDistanceToNow(
//         publicdate,
//         {addSuffix: true}
//     )
//
//     return (
//         <div className="view">
//                 <input className="toggle" type="checkbox"/>
//                     <label>
//                         <span className="description">{label}</span>
//                         <span className="created">{timeDistance}</span>
//                     </label>
//                     <button className="icon icon-edit"></button>
//                     <button className="icon icon-destroy"></button>
//         </div>
//     )
//
// }
//
// export default Task;