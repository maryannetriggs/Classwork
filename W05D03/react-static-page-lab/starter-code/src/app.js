import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      header: {
        image: '/assets/hero.jpg',
        title: 'Sargent Portraits of Artists & Friends',
        subtitle: 'by John Sergent'
      },
      info: {
        hours: [
          { day: 'Monday', times: '10.00am - 5.50pm' },
          { day: 'Tuesday', times: '10.00am - 5.30pm' },
          { day: 'Wednesday', times: '10.00am - 5.30pm' },
          { day: 'Thursday', times: '10.00am - 5.30pm' },
          { day: 'Friday', times: '10.00am - 9.00pm' },
          { day: 'Saturday', times: '10.00am - 9.00pm' },
          { day: 'Sunday', times: '10.00am - 5.30pm' }
        ],
        admissions: [
          { type: 'Adults', amount: 25 },
          { type: 'Seniors', amount: 17 },
          { type: 'Students', amount: 12 }
        ]
      },
      donor: {
        contact: {
          email: 'development@metmuseum.org',
          phone: '212-650-2425'
        },
        amounts: [50, 100, 250, 500, 1000, 5000]
      }
    }
  }

  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)