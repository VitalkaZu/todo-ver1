import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import Timer from '../Timer'

export default class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      labelState: props.label,
      editing: false,
      timerStatus: false,
    }
  }

  onLabelChange = (e) => {
    this.setState({
      labelState: e.target.value,
    })
  }

  componentDidUpdate(prevProps) {
    const { timer, completed } = this.props
    if ((prevProps.timer !== timer && timer <= 0) || completed) {
      clearInterval(this.intervalId)
    }
  }

  runTimer = () => {
    const { subTime, timer } = this.props
    if (!this.intervalId && timer > 0) {
      this.setState({ timerStatus: true })
      this.intervalId = setInterval(() => {
        subTime()
      }, 1000)
    }
  }

  stopTimer = () => {
    this.setState({ timerStatus: false })
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  componentWillUnmount() {
    this.stopTimer()
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
    const { id, label, publicDate, completed, onDeleted, completeTask, timer } =
      this.props
    const { labelState, timerStatus } = this.state
    const distanceTime = formatDistanceToNow(publicDate, {
      addSuffix: true,
    })

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
              timerStatus={timerStatus}
              runTimer={this.runTimer}
              stopTimer={this.stopTimer}
              completed={completed}
            />
            <span className="description">created {distanceTime}</span>
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
  timer: PropTypes.number.isRequired,
  // onClickTimer: PropTypes.func.isRequired,
  subTime: PropTypes.func.isRequired,
}
