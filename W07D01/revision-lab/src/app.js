import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bulma'
import '../src/style.scss'

import CheeseCard from './components/CheeseCard'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      cheeses: []
    }
  }

  componentDidMount() {
    axios.get('https://cheesebored.herokuapp.com/cheeses')
      .then(res => this.setState({ cheeses: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">

            {this.state.cheeses.map(cheese => (
              <div key={cheese._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <CheeseCard
                  name={cheese.name}
                  image={cheese.image}
                />
              </div>
            ))}

          </div>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
