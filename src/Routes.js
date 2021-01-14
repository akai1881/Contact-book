import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './components/Details/Details';
import MainComponent from './components/MainComponent/MainComponent';
import { history } from './helpers/History';

const Routes = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
