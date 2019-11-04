import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    axios.get('/api/animals')
      .then(res => this.setState({ animals: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ul>
        {this.state.animals.map(animal => <li key={animal._id}>{animal.name}</li>)}
      </ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))