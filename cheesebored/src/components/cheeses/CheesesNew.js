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
      } 
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('https://cheesebored.herokuapp.com/cheeses', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/cheeses/${res.data._id}`)
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log('re render', this.state.data)
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

export default CheesesNew