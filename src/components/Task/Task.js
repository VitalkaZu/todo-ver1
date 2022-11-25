import React from 'react'
import PropTypes from 'prop-types'
import Timer from '../Timer'

export default class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      labelState: props.label,
      editing: false,
      timer: props.timer,
    }
  }

  subTime = () => {
    console.log('subTime function call')
    this.setState(({ timer }) => ({
      timer: timer - 1,
    }))
  }

  onLabelChange = (e) => {
    this.setState({
      labelState: e.target.value,
    })
  }

  submitTask = (e) => {
    const { labelState } = this.state
    const { editLabelTask } = this.props
    e.preventDefault()
    if (labelState) {
      editLabelTask(labelState)
      this.setState({
        editing: false,
      })
    }
  }

  classTask = () => {
    const { editing } = this.state
    const { completed } = this.props
    let classTask = 'task'
    if (editing) classTask += ' editing'
    if (completed) classTask += ' completed'
    return classTask
  }

  editTask = () => {
    this.setState({
      editing: true,
    })
  }

  render() {
    // eslint-disable-next-line prettier/prettier
    const { id, label, publicDate, completed, onDeleted, completeTask } =
      this.props
    const { labelState, timer } = this.state

    return (
      <li className={this.classTask()}>
        <div className="view">
          <input
            id={id}
            className="toggle"
            type="checkbox"
            onChange={completeTask}
            checked={completed}
          />
          <label htmlFor={id}>
            <span tabIndex="-1" role="button" className="title">
              {label}
            </span>
            <Timer
              publicDate={publicDate}
              timer={timer}
              subTime={this.subTime}
            />
          </label>
          <button
            type="button"
            className="icon icon-edit"
            onClick={this.editTask}
            aria-label="Edit task"
          />
          <button
            type="button"
            className="icon icon-destroy"
            onClick={onDeleted}
            aria-label="Delete task"
          />
        </div>
        <form onSubmit={this.submitTask}>
          <input
            type="text"
            className="edit"
            value={labelState}
            onChange={this.onLabelChange}
          />
        </form>
      </li>
    )
  }
}

Task.defaultProps = {
  completed: false,
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  publicDate: PropTypes.instanceOf(Date).isRequired,
  completed: PropTypes.bool,
  onDeleted: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  editLabelTask: PropTypes.func.isRequired,
}
