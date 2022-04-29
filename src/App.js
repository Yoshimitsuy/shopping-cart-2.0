import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Login from './pages/Login'
import MainPage from './pages/MainPage'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={ Login } /> 
        <Route path="/cart" component={ Cart } /> 
        <Route exact path="/" component={ MainPage } /> 
      </Switch>
    )
  }
}
