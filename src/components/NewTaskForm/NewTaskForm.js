import React from "react";
import PropTypes from 'prop-types';


export default class NewTaskForm extends React.Component {
    state = {
        label:""
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
           this.props.addTask(this.state.label)
           this.setState({
               label:""
           })
       }
   }

    render() {
        return (
            <form onSubmit={this.submitTask}>
            <input className="new-todo" placeholder="What needs to be done?"
                   onChange={this.onLabelChange}
                   value={this.state.label}/>
            </form>
        )
   }


}

NewTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
}
