import React, { useState } from 'react'
import PropTypes from 'prop-types'

function NewTaskForm({ addTask }) {
  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const submitTask = (e) => {
    const timer = min * 60 + parseInt(sec, 10)
    if (label) {
      addTask(label, timer)
      setLabel('')
      setMin('')
      setSec('')
    }
    e.preventDefault()
  }

  return (
    <form id="myForm" className="new-todo-form" onSubmit={submitTask}>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(e) => setLabel(e.target.value)}
        required="required"
        value={label}
        name="label"
      />
      <input
        type="number"
        min="0"
        className="new-todo-form__timer"
        onChange={(e) => setMin(e.target.value)}
        value={min}
        required="required"
        placeholder="Min"
        name="min"
      />
      <input
        type="number"
        min="0"
        max="59"
        className="new-todo-form__timer"
        onChange={(e) => setSec(e.target.value)}
        value={sec}
        required="required"
        placeholder="Sec"
        name="sec"
      />
      <input type="submit" hidden="hidden" />
    </form>
  )
}

export default NewTaskForm

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}
