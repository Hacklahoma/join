import React, { Component } from 'react'
import './index.scss'

export class Item extends Component {
    render() {
        return (
            <div className="Item">
                <div className="content">
                    <p>{this.props.category}</p>
                    <h3>{this.props.position}</h3>
                </div>
            </div>
        );
    }
}

export default Item;
