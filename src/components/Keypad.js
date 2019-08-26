// Code Keypad Component Here

import React, { Component } from 'react';

const keyUpEvent = () => {
    console.log('Entering password...')
}
export default class Keypad extends Component{
    
    render(){



        return(
            <div>
            <input type="password" onKeyUp={keyUpEvent}></input>
            </div>
        )

    }


}