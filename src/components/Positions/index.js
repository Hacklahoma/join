import React, { Component } from 'react'
import './index.scss'
import Item from './Item'
import positions from '../../config/positions.json'

export class Positions extends Component {
    constructor() {
        super();
        this.state = {
            positions: null
        }
    }

    componentDidMount() {
        var map = new Map();
        Object.keys(positions).forEach((key) => {
            if(!positions[key].disabled) {
                if (map.has(positions[key].category)) {
                    map.get(positions[key].category).push(key)
                } else {
                    map.set(positions[key].category, [key]);
                }
            }
        })

        this.setState({
            positions: map
        })

        // Debug
        // console.log(map);
    }
    

    renderCategories() {
        var cats = this.state.positions
        var result = [];
        var item = [];
        if(cats) {
            cats.forEach((key) => {
                item = [];
                item.push(
                    <div key={key} className="header">
                        <h2>{positions[key[0]].category}</h2>
                        <div className="divider" />
                    </div>
                );
                key.forEach(val => {
                    item.push(
                        <Item
                            key={val + "item"}
                            position={positions[val].name}
                            category={positions[val].category}
                            url={val}
                        />
                    );
                })
                result.push(<div key={key + "all"} className="category">{item}</div>)
            });
        }
        return result;
    }

    render() {
        return (
            <div className="Positions">
                <div className="title">
                    <h1>Officer applications are closed for 2024 season. Check back next year!</h1>
                </div>
                <div className="positions">
                    {this.renderCategories()}
                </div>
            </div>
        );
    }
}

export default Positions;
