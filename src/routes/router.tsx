import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';

  import { ShoppingListPage } from '../pages/shopping-list';
import { WithHistoryProps } from '../types';

  export const RouteContainer: React.FunctionComponent<WithHistoryProps> = ({ history }) => (
    <Router history={history}>
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