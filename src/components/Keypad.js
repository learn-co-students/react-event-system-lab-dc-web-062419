// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

pressing = () => {
    console.log('Entering password...')
}
    render(){
        return(
            <input type='password' onKeyUp={this.pressing}></input>
        )
    }
};

export default Keypad

