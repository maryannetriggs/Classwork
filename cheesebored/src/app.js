import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import 'bulma'

import Home from './components/common/Home'
import CheesesIndex from './components/cheeses/CheesesIndex'
import CheesesShow from './components/cheeses/CheesesShow'
import CheesesNew from './components/cheeses/CheesesNew'
import CheesesEdit from './components/cheeses/CheesesEdit'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => (
  <BrowserRouter>
    <main>
      <nav className="navbar is-info">
        <Link className="navbar-item" to="/">Home Page</Link>
        <Link className="navbar-item" to="/cheeses">Index Page</Link>
        <Link className="navbar-item" to="/register">Sign Up</Link>
        <Link className="navbar-item" to="/login">Sign In</Link>
        <Link className="navbar-item" to="/cheeses/new">Add a new cheese</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cheeses/:id/edit" component={CheesesEdit}/>
        <Route path="/cheeses/new" component={CheesesNew}/>
        <Route path="/cheeses/:id" component={CheesesShow}/>
        <Route exact path="/cheeses" component={CheesesIndex}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </main>
  
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)