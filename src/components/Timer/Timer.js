import React from 'react'
import { formatDistance } from 'date-fns'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      publicDate: new Date(),
      dateNow: new Date(),
      // min: null,
      // sec: null,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.timeDistance(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
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
    const { publicDate, dateNow } = this.state
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
          />
          <button
            type="button"
            aria-label="Stop timer"
            className="icon icon-pause"
          />
          {' 12:25 '}
        </span>
        <span className="description">created {distanceTime}</span>
      </>
    )
  }
}
