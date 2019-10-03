import React from 'react'

class Button extends React.Component {
  constructor() {
    super()
  }
  render() {
    console.log(this.props)
    return (
      <button type="button">
        {this.props.text || 'Click me!'}
      </button>
    )
  }
}

export default Button