import React from 'react'
import axios from 'axios'

import CheeseCard from './CheeseCard'

class CheesesIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      cheeses: null
    }
  }

  componentDidMount() {
    axios.get('https://cheesebored.herokuapp.com/cheeses')
      .then(res => this.setState({ cheeses: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    if (!this.state.cheeses) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.cheeses.map(cheese => (
              <CheeseCard key={cheese._id} {...cheese}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default CheesesIndex