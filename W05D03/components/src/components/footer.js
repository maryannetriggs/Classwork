import React from 'react'
import Button from './button'

class Footer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <footer>
        <div>{'Made with love'}</div>
        <Button text={'Hello World'} />
      </footer>
    )
  }
}

export default Footer