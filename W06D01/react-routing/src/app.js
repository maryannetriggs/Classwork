import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'
import Index from './components/Index'
import Show from './components/Show'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home Page</Link>
          <Link to="/index">Index Page</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/index/:id/" component={Show} />
          <Route path="/index" component={Index} />
        </Switch>
      </BrowserRouter>
    )
  }
}
    
ReactDOM.render(
  <App />,
  document.getElementById('root')
)