import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import System from './routes/system';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={System} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
