import React from "react";


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
       this.props.addTask(this.state.label)
       this.setState({
           label:""
       })
   }

   // onKeyEnter = (event) => {
   //      if(event.key === 'Enter'){
   //          this.props.addTask("TEST")
   //      }
   //  }

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
