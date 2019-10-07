import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      tubes: null
    }
  }

  componentDidMount() {
    console.log('I have mounted and am now making the api call')
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(res => this.setState({ tubes: res.data }))
      .catch(err => this.setState({ error: err.message }))
  }

  updatePage() {
    this.setState({ userInput: '', computerInput: '', gameOutcome: '' })
  }

  updateTubes() {

  }

  render() {
    
    console.log('I have rendered', this.state.tubes)
    const { tubes } = this.state

    return (
      <>
      <button>UPDATE!</button>
      <div>
        {tubes && tubes.map((tube, i) => (
          <>
            <h3 key={tube.name}>{tube.name}</h3>
            <p key={i}>{tube.lineStatuses[0].statusSeverityDescription}</p>
          </>
        ))}
      </div>
     </>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)




















// import React from 'react'
// import ReactDOM from 'react-dom'
// import axios from 'axios'


// class App extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       country: null,
//       error: null
//     }
//   }

//   componentDidMount() {
//     console.log('I have mounted and am now making the api call')
//     axios.get('https://restcountries.eu/rest/v2/name/Canada')
//       .then(res => this.setState({ country: res.data[0] }))
//       .catch(err => this.setState({ error: err.message }))
//   }

//   render() {
//     console.log('I have rendered', this.state)
//     // if (!this.state.country) return null //guard clause

//     return (
//       <div>
//         {!this.state.country && !this.state.error && <p>Loading...</p>}
//         {this.state.error && <p>Oops, something went wrong</p>}
//         {this.state.country && <h1>{this.state.country.name}</h1>}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

