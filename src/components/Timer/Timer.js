import React from 'react'
import PropTypes from 'prop-types'

export default class Timer extends React.Component {
  timeToString = () => {
    const { timer } = this.props
    const min = Math.floor(timer / 60)
    const sec = timer % 60
    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  componentDidUpdate(prevProps) {
    const { stopTimer, completed } = this.props
    if (completed !== prevProps.completed) {
      stopTimer()
    }
  }

  render() {
    const { runTimer, stopTimer, completed, timer } = this.props

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
        {this.timeToString()}
      </span>
    )
  }
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  runTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
}
