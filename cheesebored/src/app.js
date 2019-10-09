import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import CheesesIndex from './components/cheeses/CheesesIndex'
import CheesesShow from './components/cheeses/CheesesShow'
import CheesesNew from './components/cheeses/CheesesNew'
import CheesesEdit from './components/cheeses/CheesesEdit'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import SecureRoute from './components/common/SecureRoute'

const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <SecureRoute path="/cheeses/:id/edit" component={CheesesEdit}/>
        <SecureRoute path="/cheeses/new" component={CheesesNew}/>
        <Route path="/cheeses/:id" component={CheesesShow}/>
        <Route exact path="/cheeses" component={CheesesIndex}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </>
  
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)