import React, { Component } from 'react'
import Home from './views/Home'
import Page from './views/Page'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/:page" component={Page} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default Router
