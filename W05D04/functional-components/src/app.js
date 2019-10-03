import React from 'react'
import ReactDOM from 'react-dom'
import County from './components/County';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      counties: [{
        name: 'Greater London',
        population: 8778500,
        borderedBy: [
          'Essex',
          'Kent',
          'Buckinghamshire',
          'Berkshire',
          'Hertfordshire',
          'Surrey'
        ]
      }, {
        name: 'Essex',
        population: 1802200,
        borderedBy: [
          'Greater London',
          'Hertfordshire',
          'Kent',
          'Suffolk',
          'Cambridgeshire'
        ]
      }, {
        name: 'Hertfordshire',
        population: 1176700,
        borderedBy: [
          'Essex',
          'Greater London',
          'Cambridgeshire',
          'Bedfordshire',
          'Buckinghamshire',
          'Berkshire',
          'Surrey'
        ]
      }]
    }
  }

  render() {
    return (
      <>
        {this.state.counties.map(county => (
          <County key={county.name} {...county}/>
        ))}
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)