import React, { Component } from 'react'
import positions from '../config/positions.json'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { HomeRounded } from '@material-ui/icons'
import Button from '../components/Button'
import './Page.scss'

export class Page extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            category: '',
            description: '',
            do: [],
            want: [],
            link: '',
            disabled: false,
        }
    }

    componentDidMount() {
        var key = window.location.pathname.replace('/', '');
        if(positions[key]) {
            this.setState({
                name: positions[key].name,
                category: positions[key].category,
                description: positions[key].description,
                do: positions[key].whatYouDo,
                want: positions[key].whatWeWant,
                link: positions[key].applyLink,
                disabled: positions[key].disabled
            });
        }
        else {
            this.props.history.push("/");
        }
    }
    
    render() {
        return (
            <div className="Page">
                <div className="header">
                    <div className="wrapper">
                        <Link to="/" className="button">
                            <HomeRounded className="icon" />
                            <p>Home</p>
                        </Link>
                        <p className="category">{this.state.category}</p>
                        <h1 className="name">{this.state.name}</h1>
                    </div>
                </div>
                <div className="content wrapper">
                    <p className="description">{this.state.description}</p>
                    <h2>What you'll do</h2>
                    <ul className="list">
                        {Object.values(this.state.do).map(val => {
                            return <li key={val}>{val}</li>;
                        })}
                    </ul>
                    <h2>What we want</h2>
                    <ul className="list">
                        {Object.values(this.state.want).map(val => {
                            return <li key={val}>{val}</li>;
                        })}
                    </ul>
                    {this.state.disabled ? null :
                        <div className="apply">
                            <Button color="blue" href={this.state.link}>
                                Apply
                            </Button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Page);
