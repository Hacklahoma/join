import React, { Component } from 'react'
import './index.scss'
import { Link } from "react-router-dom"

export class Item extends Component {
    render() {
        return (
            <div className="Item">
                <Link to={this.props.url} style={{ textDecoration: "none" }}>
                    <p>{this.props.position}</p>
                </Link>
            </div>
        );
    }
}

export default Item;
