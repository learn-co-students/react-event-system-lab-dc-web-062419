// Code Keypad Component Here
import React from 'react';

class KeyPad extends React.Component{

 eventSys(){
        console.log('Entering password...')
    }
    render(){
        return (
            <input type= 'password' onKeyUp ={this.eventSys}/>
        )
    }
}

export default KeyPad