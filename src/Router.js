import React, { Component } from 'react'
import Home from './views/Home'
import Page from './views/Page'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import status from './config/status.json'

export class Router extends Component {
  constructor() {
      super();
      this.state = {
          closed: false,
      };
  }

  componentDidMount() {
      // Setting up deadline
      var deadlineComponents = status["deadline"].split("/");
      var month = deadlineComponents[0] - 1;
      var day = deadlineComponents[1];
      var year = deadlineComponents[2];
      var date = new Date(year, month, day, 23, 59, 59);
      var now = new Date(Date.now());

      // Setting date states
      this.setState({
          closed: status["rolling"] ? false : date.getTime() < now.getTime(),
      });
  }

  render() {
      return (
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home} />
                  {this.state.closed ? (
                      <Route path="/:page" component={Home} />
                  ) : (
                      <Route path="/:page" component={Page} />
                  )}
              </Switch>
          </BrowserRouter>
      );
  }
}

export default Router
