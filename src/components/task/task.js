import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default class Task extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         completed: this.props.completed,
    //         publicDate: this.props.publicDate
    //     }
    // }
    //
    // taskComplete = () => {
    //     console.log("Done "  + this.props.label)
    // }
    //
    // clickTask = () => {
    //     this.setState(({completed}) => {
    //         return {
    //             completed:!completed
    //         }
    //     })
    // }

    render() {
        const {label, publicDate, completed, onDeleted, completeTask} = this.props
        // console.log(id)
        // const {completed} = this.state;
        let className = completed ? "completed": "";


        const  timeDistance = formatDistanceToNow(
            publicDate,
            {addSuffix: true}
        )

        return (
            <li className={className}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={completeTask} checked={completed}/>
                    <label>
                        <span className="description">{label}</span>
                        <span className="created">{timeDistance}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
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