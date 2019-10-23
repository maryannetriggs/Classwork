import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'


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
        color: '',
        age: '',
        breakfastOrder: ['']
      }
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const formData = { ...this.state.formData, [name]: value }
    this.setState({ formData })
  }


  render() {
    console.log(this.state.formData)
    const { formData } = this.state
    return (
      <main className="section">
        <div className="columns is-mobile">
          <div className="column is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile card"> 
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
                />  
              </label>
            </div>
            <div className="field">
              <label className="label">Pick a person!</label>
              <div className="select">
                <select name="person">
                  <option value="jack">Jack</option>
                  <option value="tal">Tal</option>
                  <option value="mia">Mia</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="label">Pick a color!</label>
              <div className="control">
                <label className="radio">
                  <input 
                    type="radio" 
                    name="color" 
                  />
                    Green
                </label>
                <label className="radio">
                  <input 
                    type="radio" 
                    name="color" 
                  />
                     Red
                </label>
                <label className="radio">
                  <input 
                    type="radio" 
                    name="color" 
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
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Your Breakfast Order</label>
              <div className="control">
              </div>
            </div>
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