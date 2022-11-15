import React from 'react'
import PropTypes from 'prop-types'
import TaskFilter from '../TaskFilter'

function Footer({ completed, chooseFilter, deleteCompletedTask, filter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{completed} items left</span>
      <TaskFilter chooseFilter={chooseFilter} filter={filter} />
      <button
        type="button"
        className="clear-completed"
        onClick={deleteCompletedTask}
      >
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  completed: PropTypes.number.isRequired,
  chooseFilter: PropTypes.func.isRequired,
  deleteCompletedTask: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

export default Footer
