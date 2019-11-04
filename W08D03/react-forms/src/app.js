import React from 'react'
import ReactDOM from 'react-dom'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import 'bulma'
import './style.scss'

const animatedcomponents = makeAnimated()

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        description: '',
        havingFun: false,
        person: '',
        colour: '',
        age: '',
        breakfastOrder: ['']
      }
    }

    this.options = [
      { value: 'eggs', label: 'Eggs' },
      { value: 'facon', label: 'Facon' },
      { value: 'coffee', label: 'Coffee' },
      { value: 'tea', label: 'Tea' },
      { value: 'beans', label: 'Beans' },
      { value: 'toast', label: 'Toast' },
      { value: 'cereal', label: 'Cereal' }
    ]

    this.handleChange = this.handleChange.bind(this)
    this.handleMultiSelect = this.handleMultiSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value, type, checked } }) {
    const newValue = type === 'checkbox' ? checked : value
    const formData = { ...this.state.formData, [name]: newValue }
    this.setState({ formData })
  }

  handleMultiSelect(selected) {
    if (!selected) {
      return this.setState({ formData: { ...this.state.formData, breakfastOrder: [] } })
    }
    const breakfastOrder = selected.map(item => item.value)
    const formData = { ...this.state.formData, breakfastOrder } // same as: { ...this.state.formData, breakfastOrder: breakfastOrder } 
    // console.log('my new state will be: ', formData)
    this.setState({ formData })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitting this form biatches')
    console.table(this.state)
  }

  render() {
    console.log(this.state.formData)
    const { formData } = this.state
    return (
      <main className="section">
        <div className="columns is-mobile">
          <div className="column is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile card">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    className="input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className="input"
                    name="lastName"
                    value={formData.lastName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="description"
                    value={formData.description}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="checkbox label">
                  Having fun yet?
                  <input
                    type="checkbox"
                    name="havingFun"
                    checked={formData.havingFun}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="field">
                <label className="label">Pick a person!</label>
                <div className="select">
                  <select name="person" onChange={this.handleChange} value={formData.person}>
                    <option value="" disabled>Pick a Person</option>
                    <option value="jack">Jack</option>
                    <option value="tal">Tal</option>
                    <option value="mia">Mia</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">Pick a colour!</label>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="colour"
                      value="green"
                      checked={formData.colour === 'green'}
                      onChange={this.handleChange}
                    />
                    Green
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="colour"
                      value="red"
                      checked={formData.colour === 'red'}
                      onChange={this.handleChange}
                    />
                    Red
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="colour"
                      value="blue"
                      checked={formData.colour === 'blue'}
                      onChange={this.handleChange}
                    />
                    Blue
                  </label>
                </div>
              </div>
              <div className="field">
                <label className="label">Your Age</label>
                <div className="control">
                  <input
                    className="input"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Your Breakfast Order</label>
                <div className="control">
                  <Select
                    options={this.options}
                    isMulti
                    onChange={this.handleMultiSelect}
                    components={animatedcomponents}
                  />
                </div>
              </div>
              <button className="button">Submit!</button>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
