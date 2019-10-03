import React from 'react'

const County = ({ name, population, borderedBy }) => (
  <>
    <h1>{name}</h1>
    <h3>{population}</h3>
    {borderedBy.map(county => <p key={county}>{county}</p>)}
  </>
)

// class County extends React.Component {
//   render() {
//     // console.log(this.props)
//     return (
//       <>
//         <h1>{this.props.name}</h1>
//         <p>{this.props.population}</p>
//       </>
//     )
//   }
// }

export default County