// Code Keypad Component Here

import React from 'react'

class Keypad extends React.Component {

    theFunction() {
        console.log("Entering password...")
    }

    render () {
      return(  <input type="password" onKeyUp={this.theFunction} />  )
    }
}

export default Keypad