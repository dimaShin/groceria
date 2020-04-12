import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';

import { ShoppingListPage } from '../pages/shopping-list';
import { WithHistoryProps } from '../types';

export const RouteContainer: React.FunctionComponent<WithHistoryProps> = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/list">
        <React.Suspense fallback={<p>LOading...</p>}><ShoppingListPage /></React.Suspense>
      </Route>
      <Route path="*">
        <Redirect to="/list" />
      </Route>
    </Switch>
  </Router>
);