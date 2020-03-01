import React, { Component } from 'react'
import Header from '../components/Header'
import Positions from '../components/Positions'
import Why from '../components/Why'
import status from '../config/status.json'

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            closed: false,
            deadline: ""
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
        var now = new Date(Date.now())

        // Setting date states
        this.setState({
            closed: date.getTime() < now.getTime(),
            deadline: wordMonth + " " + day + ending + " at 11:59pm CST"
        });
    }
    
    render() {
        return (
            <div>
                <Header closed={this.state.closed} />
                <Why />
                {this.state.closed ? null : <Positions deadline={this.state.deadline} />}
            </div>
        );
    }
}

export default Home
