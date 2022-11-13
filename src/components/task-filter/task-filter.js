import React from "react";

export default class TaskFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            filter:[
                {
                    key:"all",
                    name:"All"
                },
                {
                    key:"false",
                    name:"Active"
                },
                {
                    key:"true",
                    name:"Completed"
                }
            ]
        }
    }


    render() {
        return(
            <ul className="filters">
                {this.state.filter.map(el=>(
                    <li>
                        <button key={el.key}
                                className={el.key === this.props.filter?"filter selected":"filter"}
                                onClick={()=> this.props.chooseFilter(el.key)}>
                            {el.name}</button>
                    </li>
                ))}
            </ul>
        )
    }
}