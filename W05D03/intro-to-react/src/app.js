import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
  
    this.state = {
      animals: ['cat', 'dog', 'bird', 'mouse', 'elephant'],
      message: 'Hello World'
    } 
  }

  render() {
    // const animals = this.state.animals
    // const message = this.state.message
    const { message, animals } = this.state
    return (
      <>
        <h1>{message}</h1>
        <ul>
          {animals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
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

// class App extends React.Component {
//   constructor() { // has a constructor method like  REGULAR JS class that is run first
//     super() // have to call this first in the constructor every time

//     this.state = { // this is a special object in React, when something changes in the data here, it causes React to re - render. React then works out what has changed and updates the real DOM accordingly
//       animals: ['cat', 'dog', 'bird', 'lizard'],
//       message: 'Goodbye World'
//     }
//   }

//   render() { // this is the render method from react, it must be present and return either JSX or null
//     const { message, animals } = this.state // destructuring our state object to store its values in variable names that match it keys
//     return (
//       <> 
//         <h1>{message}</h1>
//         <ul>
//           {animals.map((animal, i) => (
//             <li key={i}>{animal}</li>
//           ))}
//         </ul>
//       </>
//     ) // the return must only return one parent level element, but that element can have as many children as it likes. 
//   }
// }

// ReactDOM.render( // This renders our main parent App component to the DOM.
//   <App />,
//   document.getElementById('root')
// )