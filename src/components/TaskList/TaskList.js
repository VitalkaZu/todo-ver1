import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task'

function TaskList({ todos, onDeleted, completeTask, editLabelTask, subTime }) {
  const arrTodo = todos.map((item) => {
    const { id, label, publicDate, completed, timer } = item

    //
    // /* eslint-disable-next-line react/jsx-props-no-spreading */
    // {...props}
    // id={id}
    return (
      <Task
        key={id}
        id={id}
        label={label}
        publicDate={publicDate}
        timer={timer}
        completed={completed}
        onDeleted={() => onDeleted(id)}
        completeTask={() => completeTask(id)}
        editLabelTask={(text) => editLabelTask(id, text)}
        subTime={() => subTime(id)}
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
    })
  ).isRequired,
  onDeleted: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  editLabelTask: PropTypes.func.isRequired,
}

export default TaskList
