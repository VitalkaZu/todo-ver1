import React from "react";
import PropTypes from "prop-types";

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
        const {filter, chooseFilter} = this.props

        return(
            <ul className="filters">
                {this.state.filter.map(el=>(
                    <li key={el.key}>
                        <button
                                className={el.key === filter?"filter selected":"filter"}
                                onClick={()=> chooseFilter(el.key)}>
                            {el.name}</button>
                    </li>
                ))}
            </ul>
        )
    }
}

TaskFilter.propTypes = {
    chooseFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}