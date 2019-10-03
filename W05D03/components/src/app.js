import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Footer from './components/footer'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)