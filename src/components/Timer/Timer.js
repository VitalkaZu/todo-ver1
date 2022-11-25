import React from 'react'
import PropTypes from 'prop-types'
import { formatDistance } from 'date-fns'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateNow: new Date(),
      subTimeBoolean: false,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.subTimeFunc()
      this.timeDistance()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  onClickStartTimer = () => {
    this.setState({
      subTimeBoolean: true,
    })
  }

  onClickStopTimer = () => {
    this.setState({
      subTimeBoolean: false,
    })
  }

  subTimeFunc() {
    const { subTimeBoolean } = this.state
    const { subTime, timer } = this.props
    if (subTimeBoolean && timer > 0) {
      subTime()
    }
  }

  timeDistance() {
    this.setState({
      dateNow: new Date(),
    })
  }

  timeToString() {
    const { timer } = this.props
    const min = Math.floor(timer / 60)
    const sec = timer % 60
    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  renderTimerButton() {
    const { subTimeBoolean } = this.state
    if (!subTimeBoolean) {
      return (
        <button
          type="button"
          aria-label="Play timer"
          className="icon icon-play"
          onClick={this.onClickStartTimer}
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
        onClick={this.onClickStopTimer}
      />
    )
  }

  render() {
    const { dateNow } = this.state
    const { publicDate } = this.props
    const distanceTime = formatDistance(publicDate, dateNow, {
      addSuffix: true,
    })
    return (
      <>
        <span className="description">
          {this.renderTimerButton()}
          {this.timeToString()}
        </span>
        <span className="description">created {distanceTime}</span>
      </>
    )
  }
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  publicDate: PropTypes.instanceOf(Date).isRequired,
  subTime: PropTypes.func.isRequired,
}
