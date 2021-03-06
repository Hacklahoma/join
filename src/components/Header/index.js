import React, { Component } from 'react'
import './index.scss'

export class Header extends Component {
    render() {
        if(this.props.closed)
         return (
             <div className="Header closed">
                 <div className="wrapper">
                     <div className="logo">
                         <a href="https://hacklahoma.org">Hacklahoma</a>
                     </div>
                     <div className="line top" />
                     <div className="content">
                         <h1>
                             Applications are
                             <br />
                             closed,
                         </h1>
                         <h3>check back next year.</h3>
                     </div>
                     <div className="line bottom" />
                 </div>
             </div>
         );
        else
            return (
                <div className="Header">
                    <div className="wrapper">
                        <div className="logo">
                            <a href="https://hacklahoma.org">Hacklahoma</a>
                        </div>
                        <div className="line top" />
                        <div className="content">
                            <h1>
                                We are looking
                                <br />
                                for new talent,
                            </h1>
                            <h3>let's talk.</h3>
                        </div>
                        <div className="line bottom" />
                    </div>
                </div>
            );
    }
}

export default Header
