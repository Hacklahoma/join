import React from 'react'
import './index.scss'

class Button extends React.Component {
    render() {
        return(
            <div className={"Button " + this.props.color}>
                <a target="_blank" rel="noopener noreferrer" href={this.props.href}>
                    {this.props.children}
                </a>
            </div>
        );
    }
}

export default Button