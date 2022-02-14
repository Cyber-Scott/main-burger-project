import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import Orders from './containers/Orders/Orders';

import  { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout>
          <Route path='/checkout' component={CheckOut}/>
          <Route path='/orders'  component={Orders}/>
          <Route path='/' exact component={BurgerBuilder}/>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
