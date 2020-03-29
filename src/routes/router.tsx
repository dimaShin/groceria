import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  import { ShoppingListPage } from '../pages/shopping-list';

  export const RouteConteiner: React.FunctionComponent = () => (
    <Router>
        <Switch>
          <Route path="/list">
            <ShoppingListPage />
          </Route>
          <Route path="*">
            <Redirect to="/list" />
          </Route>
        </Switch>
    </Router>
  );