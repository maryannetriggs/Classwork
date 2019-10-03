import React from 'react'
import Button from './button'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { 
      text: 'Hello page',
      headerButtonText: 'Different text' 
    }
  }
  
  render() {
    const { text, headerButtonText } = this.state
    return (
      <header>
        <h1>{text}</h1>
        <Button text={headerButtonText} />
      </header>
    )
  }
}

export default Header