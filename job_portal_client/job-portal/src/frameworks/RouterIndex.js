import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from "../views/App";
import { withRouter } from 'react-router-dom';

import CompanyJob from "../views/CompanyJob";

export default class RouterIndex extends React.Component
  {
      render()
      {
          return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <App/>
                    </Route>
                    <Route exact path='/company/:company_name' component={CompanyJob}>
                    </Route>
                </Switch>
            </Router>
          );
      }
  }