import React, { Component } from "react";
import Header from "../components/Header";
import Positions from "../components/Positions";
import Hacklahomie from "../components/Hacklahomie";
import Deadline from "../components/Deadline";
import Rolling from "../components/Rolling";
import status from "../config/status.json";
import "./Home.scss";

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            closed: false,
            date: null,
            deadline: "",
            clock: null,
        };
    }

    componentDidMount() {
        // Setting up deadline
        var deadlineComponents = status["deadline"].split("/");
        var month = deadlineComponents[0] - 1;
        var day = deadlineComponents[1];
        var year = deadlineComponents[2];
        var date = new Date(year, month, day, 23, 59, 59);

        // Getting month name
        var months = [];
        months[0] = "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";
        var wordMonth = months[date.getMonth()];
        // Getting ending
        var ending;
        if (day % 10 === 1) ending = "st";
        else if (day % 10 === 2) ending = "nd";
        else if (day % 10 === 3) ending = "rd";
        else ending = "th";
        var now = new Date(Date.now());

        // Setting date states
        this.setState({
            closed: status["rolling"] ? false : date.getTime() < now.getTime(),
            date: date,
            deadline: wordMonth + " " + day + ending + ", 11:59pm CST",
        });

        if (!status["rolling"]) {
            let clock = setInterval(() => {
                this.updateClosed(date);
            }, 1000);
            this.setState({
                clock: clock,
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.clock);
    }

    updateClosed(date) {
        var now = new Date(Date.now());
        this.setState({
            closed: date.getTime() < now.getTime(),
        });
    }

    render() {
        return (
            <div className="Home">
                <Header closed={this.state.closed} />
                {status["rolling"] ? (
                    <Rolling />
                ) : this.state.closed ? null : (
                    <Deadline deadline={this.state.deadline} date={this.state.date} />
                )}
                <div className="homeWrapper">
                    <Hacklahomie />
                    {this.state.closed ? null : <Positions />}
                </div>
            </div>
        );
    }
}

export default Home;
