import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.completed,
            publicDate: this.props.publicDate
        }
    }

    taskComplete = () => {
        console.log("Done "  + this.props.label)
    }

    clickTask = () => {
        this.setState({
            completed:!this.state.completed
        })
    }

    render() {
        const {id, label, publicDate} = this.props
        const {completed} = this.state;
        let className = completed ? "completed": "";


        const  timeDistance = formatDistanceToNow(
            publicDate,
            {addSuffix: true}
        )

        return (
            <li key = {id} className={className}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={this.clickTask} checked={completed}/>
                    <label>
                        <span className="description" onClick={this.taskComplete}>{label}</span>
                        <span className="created">{timeDistance}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
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