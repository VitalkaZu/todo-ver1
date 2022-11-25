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

  // onLabelChange = (e) => {
  //   this.setState({
  //     label: e.target.value,
  //   })
  // }
  handleUserInput = (e) => {
    const { name } = e.target
    const { value } = e.target
    this.setState({ [name]: value })
  }

  // onMinChange = (e) => {
  //   this.setState({
  //     min: e.target.value,
  //   })
  // }
  //
  // onSecChange = (e) => {
  //   this.setState({
  //     sec: e.target.value,
  //   })
  // }

  submitTask = (e) => {
    const { label, min, sec } = this.state
    const { addTask } = this.props
    const timer = min * 60 + parseInt(sec, 10)
    if (label) {
      addTask(label, timer)
      this.setState({
        label: '',
        min: '',
        sec: '',
      })
    }
    e.preventDefault()
  }

  render() {
    const { label, min, sec } = this.state
    return (
      <form id="myForm" className="new-todo-form" onSubmit={this.submitTask}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.handleUserInput}
          required="required"
          value={label}
          name="label"
        />
        <input
          type="number"
          className="new-todo-form__timer"
          onChange={this.handleUserInput}
          value={min}
          required="required"
          placeholder="Min"
          name="min"
        />
        <input
          type="number"
          max="59"
          className="new-todo-form__timer"
          onChange={this.handleUserInput}
          value={sec}
          required="required"
          placeholder="Sec"
          name="sec"
        />
        <input type="submit" hidden="hidden" />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}
