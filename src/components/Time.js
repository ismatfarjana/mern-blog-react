import React, { Component } from "react";
import "../Time.css";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date()
    };
  }

  componentDidMount() {
    setInterval(this.setDate, 1000);
  }

  setDate = () => {
    this.setState({ now: new Date() });
  };

  render() {
    const seconds = this.state.now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    const secondHand = {
      transform: `rotate(${secondsDegrees}deg)`
    };

    const mins = this.state.now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    const minsHand = {
      transform: `rotate(${minsDegrees}deg)`
    };

    const hour = this.state.now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    const hourHand = {
      transform: `rotate(${hourDegrees}deg)`
    };

    return (
      <div className="clock">
        <div className="clock-face">
          <div className="hand" style={hourHand}></div>
          <div className="hand" style={minsHand}></div>
          <div className="hand" style={secondHand}></div>
        </div>
      </div>
    );
  }
}
