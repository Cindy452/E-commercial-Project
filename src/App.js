import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
    </BrowserRouter>
      </div>
  );
}

export default App;
