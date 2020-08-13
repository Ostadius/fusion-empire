import React, { Component } from 'react';
import { connect } from 'react-redux';

import CharPage from './containers/CharPage/CharPage';
import CharBuilder from './containers/CharBuilder/CharBuilder';
import Home from './containers/Auth/Home/Home';
import Battle from './containers/Battle/Battle';
import Layout from './components/Layout/Layout';
import Auth from './containers/Auth/Auth';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div>
    <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/char-page' component={CharPage} />
          <Route path='/char-builder' component={CharBuilder} />
          <Route path='/battle-data' component={Battle} />
          <Route path='/auth' component={Auth} />
        </Switch>
    </Layout>
    </div>
    );
  }
}

export default App;
