import React, { useState, useEffect } from 'react'
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
  const [labelState, setLabelState] = useState(label)
  const [editing, setEditing] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  const onLabelChange = (e) => {
    setLabelState(e.target.value)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  useEffect(() => {
    if (timer <= 0 || completed) {
      setIsRunning(false)
    }
  }, [timer])

  useInterval(
    () => {
      subTime()
    },
    isRunning ? 1000 : null
  )

  const runTimer = () => {
    if (!isRunning && timer > 0) {
      setIsRunning(true)
    }
  }

  const submitTask = (e) => {
    e.preventDefault()
    if (labelState) {
      editLabelTask(labelState)
      setEditing(false)
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
    setIsRunning(false)
  }

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
