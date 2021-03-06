import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'src/components/Dashboard';

function Routes() {
  /* eslint-disable max-len */
  return (
    <Switch>
      <Route component={ Dashboard } exact path="/" />
    </Switch>
  );
  /* eslint-enable max-len */
}

export default Routes;
