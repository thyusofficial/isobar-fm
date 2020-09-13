import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Band from '../pages/Band';

// import { Container } from './styles';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/band/:id" component={Band} />
    </Switch>
  );
}

export default Routes;
