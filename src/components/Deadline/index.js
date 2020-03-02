import React, { Component } from 'react'
import './index.scss'

export class Deadline extends Component {
    constructor() {
        super();
        this.state = {
            days: '--',
            hours: '--',
            minutes: '--',
            seconds: '--',
        }
    }

    componentDidMount() {
        this.updateClock();
        this.myInterval = setInterval(() => {
            this.updateClock();
        }, 1000);
    }

    updateClock() {
        if (this.props.date) {
            const oneDay = 24 * 60 * 60 * 1000;
            const oneHour = 60 * 60 * 1000;
            const oneMinute = 60 * 1000;
            const oneSecond = 1000;
            var now = new Date(Date.now());
            var deadline = this.props.date;
            this.setState({
                days: Math.floor(Math.abs((deadline - now) / oneDay))
                    .toString()
                    .padStart(2, "0"),
                hours: Math.floor(Math.abs((deadline - now) / oneHour) % 24)
                    .toString()
                    .padStart(2, "0"),
                minutes: Math.floor(Math.abs((deadline - now) / oneMinute) % 60)
                    .toString()
                    .padStart(2, "0"),
                seconds: Math.floor(Math.abs((deadline - now) / oneSecond) % 60)
                    .toString()
                    .padStart(2, "0")
            });
        }
    }
    
    render() {
        return (
            <div className="Deadline">
                <div className="countdown">
                    <div className="part">
                        <p className="value">{this.state.days}</p>
                        <p className="label">days</p>
                    </div>
                    <div className="part">
                        <p className="value">{this.state.hours}</p>
                        <p className="label">hours</p>
                    </div>
                    <div className="part">
                        <p className="value">{this.state.minutes}</p>
                        <p className="label">minutes</p>
                    </div>
                    <div className="part">
                        <p className="value">{this.state.seconds}</p>
                        <p className="label">seconds</p>
                    </div>
                </div>
                <p className="subtitle">Applications close {this.props.deadline}</p>
            </div>
        );
    }
}

export default Deadline
