import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import useInterval from '../../userHooks/useInterval'
import Timer from '../Timer'

function Task({
  id,
  label,
  publicDate,
  completed,
  onDeleted,
  completeTask,
  timer,
  editLabelTask,
  subTime,
}) {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     labelState: props.label,
  //     editing: false,
  //     timerId: null,
  //   }
  // }

  const [labelState, setLabelState] = useState(label)
  const [editing, setEditing] = useState(false)
  const [timerId, setTimerId] = useState()

  const onLabelChange = (e) => {
    setLabelState(e.target.value)
    // this.setState({
    //   labelState: e.target.value,
    // })
  }

  const stopTimer = () => {
    console.log('stop timer')
    clearInterval(timerId)
    setTimerId(null)
    // this.setState({ timerId: null })
  }

  useEffect(() => {
    if (timer <= 0 || completed) {
      clearInterval(timerId)
    }
    return () => {
      console.log('unmount')
      stopTimer()
    }
  }, [timer])

  // componentDidUpdate(prevProps) {
  //   const { timer, completed } = this.props
  //   const { timerId } = this.state
  //   if ((prevProps.timer !== timer && timer <= 0) || completed) {
  //     clearInterval(timerId)
  //   }
  // }

  const runTimer = useCallback(() => {
    if (!timerId && timer > 0) {
      setTimerId(
        useInterval(subTime(), 1000)
        // setInterval(() => {
        //   subTime()
        // }, 1000)
      )
      // this.setState({
      //   timerId: setInterval(() => {
      //     subTime()
      //   }, 1000),
      // })
    }
  }, [timer])

  // componentWillUnmount() {
  //   this.stopTimer()
  // }

  const submitTask = (e) => {
    //   const { labelState } = this.state
    //   const { editLabelTask } = this.props
    e.preventDefault()
    if (labelState) {
      editLabelTask(labelState)
      setEditing(false)
      // this.setState({
      //   editing: false,
      // })
    }
  }

  const classTask = () => {
    let classTaskName = 'task'
    if (editing) classTaskName += ' editing'
    if (completed) classTaskName += ' completed'
    return classTaskName
  }

  const editTask = () => {
    setEditing(true)
    // this.setState({
    //   editing: true,
    // })
  }

  // render() {
  // eslint-disable-next-line prettier/prettier
  // const { id, label, publicDate, completed, onDeleted, completeTask, timer } =
  //   this.props
  // const { labelState } = this.state
  const distanceTime = formatDistanceToNow(publicDate, {
    addSuffix: true,
  })

  return (
    <li className={classTask()}>
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
            runTimer={runTimer}
            stopTimer={stopTimer}
            completed={completed}
          />
          <span className="description">created {distanceTime}</span>
        </label>
        <button
          type="button"
          className="icon icon-edit"
          onClick={editTask}
          aria-label="Edit task"
        />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={onDeleted}
          aria-label="Delete task"
        />
      </div>
      <form onSubmit={submitTask}>
        <input
          type="text"
          className="edit"
          value={labelState}
          onChange={onLabelChange}
        />
      </form>
    </li>
  )
  // }
}

export default Task

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
  subTime: PropTypes.func.isRequired,
}
