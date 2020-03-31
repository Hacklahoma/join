import React, { Component } from "react";
import styled from "styled-components";
import Item from "../Positions/Item";
import positions from "../../config/positions.json";

const StyledNavBar = styled.div`
    min-width: 250px;
    .item {
        margin-left: 30px;
    }
    h2 {
        font-size: 1.4em;
    }
`;

export class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            positions: null,
        };
    }
    componentDidMount() {
        var map = new Map();
        Object.keys(positions).forEach(key => {
            if (!positions[key].disabled) {
                if (map.has(positions[key].category)) {
                    map.get(positions[key].category).push(key);
                } else {
                    map.set(positions[key].category, [key]);
                }
            }
        });

        this.setState({
            positions: map,
        });
    }

    renderCategories() {
        var cats = this.state.positions;
        var result = [];
        var item = [];
        if (cats) {
            cats.forEach(key => {
                item = [];
                item.push(
                    <div key={key} className="categoryHeader">
                        <h2>{positions[key[0]].category}</h2>
                        <div className="divider" />
                    </div>
                );
                key.forEach(val => {
                    item.push(
                        <div key={val + "item"} className="item">
                            <Item
                                position={positions[val].name}
                                category={positions[val].category}
                                url={val}
                            />
                        </div>
                    );
                });
                result.push(
                    <div key={key + "all"} className="categoryContainer">
                        {item}
                    </div>
                );
            });
        }
        return result;
    }

    render() {
        return <StyledNavBar>{this.renderCategories()}</StyledNavBar>;
    }
}

export default NavBar;
