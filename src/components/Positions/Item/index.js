import React, { Component } from 'react'
import './index.scss'
import { Link } from "react-router-dom"

export class Item extends Component {
    render() {
        return (
            <div className="Item">
                <Link to={this.props.url} style={{ textDecoration: "none" }}>
                    <div className="content">
                        <p>{this.props.category}</p>
                        <h3>{this.props.position}</h3>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Item;
