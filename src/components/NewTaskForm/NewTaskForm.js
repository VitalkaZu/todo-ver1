import React from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  submitTask = (e) => {
    const { label } = this.state
    const { addTask } = this.props
    e.preventDefault()
    if (label) {
      addTask(label)
      this.setState({
        label: '',
      })
    }
  }

  render() {
    const { label } = this.state
    return (
      <form onSubmit={this.submitTask}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={label}
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}
