import React, { Component } from 'react'
import './index.scss'
import Item from './Item'
import positions from '../../config/positions.json'

export class Positions extends Component {

    componentDidMount() {
        this.updateHeight();
        window.addEventListener("resize", this.updateHeight);
    }

    updateHeight() {
        // Setting grid height
        document.getElementsByClassName("grid")[0].style.height = "auto";
        var height = document.getElementsByClassName("grid")[0].offsetHeight;
        var items = document.getElementsByClassName("Item");
        var current = 0;
        for (var i = 0; i < items.length; i++) {
            // Debug
            // console.log(current + " " + height);

            // If the current height is more than half the container height, then break
            if (current > height / 2) {
                break;
            }
            // Add item height to current height
            current += items[i].offsetHeight;
        }
        // Set calculated height to production
        document.getElementsByClassName("grid")[0].style.height = current + "px";
    }
    

    render() {
        return (
            <div className="Positions">
                <div className="title">
                    <h1>Find a role that fits you.</h1>
                    <p>Applications close {this.props.deadline}. Click a role to learn more.</p>
                </div>
                <div className="grid">
                    {Object.keys(positions).map(key => {
                        return (
                            <Item
                                key={key}
                                url={key}
                                position={positions[key].name}
                                category={positions[key].category}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Positions;
