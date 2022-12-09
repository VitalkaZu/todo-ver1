import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function Timer({ runTimer, stopTimer, completed, timer }) {
  const timeToString = () => {
    const min = Math.floor(timer / 60)
    const sec = timer % 60
    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    stopTimer()
  }, [completed])

  return (
    <span className="description">
      <button
        type="button"
        disabled={completed || timer === 0}
        aria-label="Play timer"
        className="icon icon-play"
        onClick={runTimer}
        name="true"
      />
      <button
        type="button"
        disabled={completed || timer === 0}
        aria-label="Stop timer"
        className="icon icon-pause"
        name="false"
        onClick={stopTimer}
      />
      {timeToString()}
    </span>
  )
  // const { runTimer, stopTimer, completed, timer } = this.props
}

export default Timer

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  runTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
}
