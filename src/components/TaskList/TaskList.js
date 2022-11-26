import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task'

function TaskList({
  todos,
  onDeleted,
  completeTask,
  editLabelTask,
  subTime,
  dateNow,
  onClickTimer,
}) {
  const arrTodo = todos.map((item) => {
    const { id, label, publicDate, completed, timer, onTimer } = item
    return (
      <Task
        key={id}
        id={id}
        label={label}
        publicDate={publicDate}
        timer={timer}
        onTimer={onTimer}
        completed={completed}
        onDeleted={() => onDeleted(id)}
        completeTask={() => completeTask(id)}
        editLabelTask={(text) => editLabelTask(id, text)}
        subTime={() => subTime(id)}
        dateNow={dateNow}
        onClickTimer={() => onClickTimer(id)}
      />
    )
  })

  return <ul className="todo-list">{arrTodo}</ul>
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      completed: PropTypes.bool,
      publicDate: PropTypes.instanceOf(Date),
      id: PropTypes.string.isRequired,
      timer: PropTypes.number.isRequired,
      onTimer: PropTypes.func.isRequired,
    })
  ).isRequired,
  dateNow: PropTypes.instanceOf(Date).isRequired,
  onDeleted: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  editLabelTask: PropTypes.func.isRequired,
  onClickTimer: PropTypes.func.isRequired,
  subTime: PropTypes.func.isRequired,
}

export default TaskList
