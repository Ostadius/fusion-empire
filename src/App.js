import React, { Component } from 'react';
import CharPage from './containers/CharPage/CharPage';
import Home from './containers/Auth/Home/Home';
import Layout from './components/Layout/Layout';
import Auth from './containers/Auth/Auth';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div>
    <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/char-page' component={CharPage} />
          <Route path='/auth' component={Auth} />
        </Switch>
    </Layout>
    </div>
    );
  }
}

export default App;
