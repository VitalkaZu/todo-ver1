import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default class Task extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    taskComplete = () => {
        console.log("Done "  + this.props.label)
    }

    render() {
        const {label, publicdate} = this.props

        const  timeDistance = formatDistanceToNow(
            publicdate,
            {addSuffix: true}
        )

        return (
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description" onClick={this.taskComplete}>{label}</span>
                    <span className="created">{timeDistance}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
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