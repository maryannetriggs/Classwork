import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import CheeseCard from './CheeseCard'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      cheeses: []
    }
  }

  componentdidMount() {
    fetch('https://cheesebored.herokuapp.com.cheeses')
      .then(res => res.json())
      .then(data => this.setState({ cheese: data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">

            {this.state.cheeses.map(cheese => {
              <div key={cheese._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <CheeseCard
                  name={cheese.name}
                  image={cheese.image}
                />
              </div>
            })}

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
