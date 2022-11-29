import React from 'react'
import PropTypes from 'prop-types'

function Timer({ timer, runTimer, stopTimer, completed }) {
  const timeToString = () => {
    const min = Math.floor(timer / 60)
    const sec = timer % 60
    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  // const renderTimerButton = () => {
  //   if (timerStatus && timer > 0) {
  //     return (
  //       <button
  //         type="button"
  //         disabled={completed}
  //         aria-label="Stop timer"
  //         className="icon icon-pause"
  //         name="false"
  //         onClick={stopTimer}
  //       />
  //     )
  //   }
  //   return (
  //     <button
  //       type="button"
  //       disabled={completed}
  //       aria-label="Play timer"
  //       className="icon icon-play"
  //       onClick={runTimer}
  //       name="true"
  //     />
  //   )
  // }
  //
  // const distanceTime = formatDistanceToNow(publicDate, {
  //   addSuffix: true,
  // })

  return (
    <span className="description">
      {/* {renderTimerButton()} */}
      <button
        type="button"
        disabled={completed}
        aria-label="Play timer"
        className="icon icon-play"
        onClick={runTimer}
        name="true"
      />
      <button
        type="button"
        disabled={completed}
        aria-label="Stop timer"
        className="icon icon-pause"
        name="false"
        onClick={stopTimer}
      />
      {timeToString()}
    </span>
  )
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  // timerStatus: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  // onClickTimer: PropTypes.func.isRequired,
  runTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
}

export default Timer
