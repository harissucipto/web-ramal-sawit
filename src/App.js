import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';

import * as ROUTES from './constants/routes';
import Layout from './components/Layout';
import HomePage from './containers/HomePage';
import AkunPage from './containers/AkunPage';

const App = () => (
  <Provider>
    <Router>
      <Layout>
        <Route exact path={ROUTES.DASHBOARD} component={HomePage} />
        <Route path={ROUTES.ADMIN} component={AkunPage} />
      </Layout>
    </Router>
  </Provider>
);

export default App;
