import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class CheesesShow extends React.Component {
  constructor() {
    super()

    this.state = {
      cheese: null
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    const cheeseId = this.props.match.params.id
    axios.get(`https://cheesebored.herokuapp.com/cheeses/${cheeseId}`)
      .then(res => this.setState({ cheese: res.data }))
      .catch(err => console.log(err))
  }

  handleDelete() {
    const cheeseId = this.props.match.params.id
    axios.delete(`https://cheesebored.herokuapp.com/cheeses/${cheeseId}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/cheeses'))
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.cheese.user._id
  }

  render() {
    if (!this.state.cheese) return null
    const { cheese } = this.state
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{cheese.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={cheese.image} alt={cheese.name} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Tasting Notes</h4>
              <p>{cheese.tastingNotes}</p>
              <hr />
              <h4 className="title is-4">Origin</h4>
              <p>{cheese.origin}</p>
              <hr />
              {this.isOwner() && 
              <>
              <Link to={`/cheeses/${cheese._id}/edit`} className="button is-warning">
                Edit
              </Link>
              <button className="button is-danger" onClick={this.handleDelete}>Delete Cheese</button>
              </>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CheesesShow