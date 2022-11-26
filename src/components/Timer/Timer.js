import React from 'react'
import PropTypes from 'prop-types'
import { formatDistance } from 'date-fns'

function Timer({ onClickTimer, timer, publicDate, dateNow, onTimer }) {
  const timeToString = () => {
    const min = Math.floor(timer / 60)
    const sec = timer % 60
    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  const renderTimerButton = () => {
    if (!onTimer) {
      return (
        <button
          type="button"
          aria-label="Play timer"
          className="icon icon-play"
          onClick={onClickTimer}
          name="true"
        />
      )
    }
    return (
      <button
        type="button"
        aria-label="Stop timer"
        className="icon icon-pause"
        name="false"
        onClick={onClickTimer}
      />
    )
  }

  const distanceTime = formatDistance(publicDate, dateNow, {
    addSuffix: true,
  })

  return (
    <>
      <span className="description">
        {renderTimerButton()}
        {timeToString()}
      </span>
      <span className="description">created {distanceTime}</span>
    </>
  )
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  dateNow: PropTypes.instanceOf(Date).isRequired,
  publicDate: PropTypes.instanceOf(Date).isRequired,
  onTimer: PropTypes.func.isRequired,
  onClickTimer: PropTypes.func.isRequired,
}

export default Timer
