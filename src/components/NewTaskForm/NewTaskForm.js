import React from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      min: '',
      sec: '',
    }
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onMinChange = (e) => {
    this.setState({
      min: e.target.value,
    })
  }

  onSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    })
  }

  submitTask = (e) => {
    e.preventDefault()
    const { label } = this.state
    const { addTask } = this.props
    alert('submit!')
    if (label) {
      addTask(label)
      this.setState({
        label: '',
      })
    }
  }

  render() {
    const { label, min, sec } = this.state
    return (
      <form className="new-todo-form" onSubmit={this.submitTask}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={label}
        />
        <input
          className="new-todo-form__timer"
          onChange={this.onMinChange}
          value={min}
          placeholder="Min"
        />
        <input
          className="new-todo-form__timer"
          onChange={this.onSecChange}
          value={sec}
          placeholder="Sec"
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}
