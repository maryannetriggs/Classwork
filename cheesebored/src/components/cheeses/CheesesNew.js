import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import CheesesForm from './CheesesForm'

class CheesesNew extends React.Component {
  constructor() {
    super()

    this.state = { 
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('https://cheesebored.herokuapp.com/cheeses', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/cheeses/${res.data._id}`)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    console.log(this.state.errors)
    return (
      <section className="section">
        <div className="container">
          <CheesesForm 
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
          />
        </div>
      </section>
    )
  }
}

export default CheesesNew