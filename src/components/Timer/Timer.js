import React from 'react'
import { formatDistance } from 'date-fns'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateNow: new Date(),
      subTimeBolean: false,
      // min: null,
      // sec: null,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => () => {
        this.timeDistance()
        this.subTime()
      },
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  onClickTimer = (e) => {
    const { value } = e.target.name
    this.setState({
      subTimeBolean: value,
    })
  }

  subTime() {
    const { subTimeBolean } = this.state
    const { subTime } = this.props
    if (subTimeBolean) {
      subTime()
    }
  }

  timeDistance() {
    this.setState({
      dateNow: new Date(),
    })
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.tick(), 1000)
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timerID)
  // }
  //
  // tick() {
  //   this.setState({
  //     dateNow: new Date(),
  //   })
  // }

  render() {
    const { dateNow } = this.state
    const { publicDate, timer } = this.props
    const distanceTime = formatDistance(publicDate, dateNow, {
      addSuffix: true,
    })
    return (
      <>
        <span className="description">
          <button
            type="button"
            aria-label="Play timer"
            className="icon icon-play"
            onClick={this.onClickTimer}
            name="true"
          />
          <button
            type="button"
            aria-label="Stop timer"
            className="icon icon-pause"
            name="false"
            onClick={this.onClickTimer}
          />
          {timer}
        </span>
        <span className="description">created {distanceTime}</span>
      </>
    )
  }
}
