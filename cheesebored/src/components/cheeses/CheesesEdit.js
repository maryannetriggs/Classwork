import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import CheesesForm from './CheesesForm'

class CheesesEdit extends React.Component {
  constructor() {
    super()

    this.state = { 
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: ''
      } 
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const cheeseId = this.props.match.params.id
    axios.get(`https://cheesebored.herokuapp.com/cheeses/${cheeseId}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
    const cheeseId = this.props.match.params.id
    axios.put(`https://cheesebored.herokuapp.com/cheeses/${cheeseId}`, this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/cheeses/${res.data._id}`)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <CheesesForm 
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default  CheesesEdit