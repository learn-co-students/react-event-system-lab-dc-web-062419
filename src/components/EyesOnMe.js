// Code EyesOnMe Component Here
import React, { Component } from 'react';

    const focusEvent = () => {
        console.log('Good!')
    }

    const blurEvent = () => {
        console.log('Hey! Eyes on me!')
    }


export default class EyesOnMe extends Component{


    render(){



        return(
            <div>
            <button onFocus={focusEvent} onBlur={blurEvent}></button>
            </div>
        )

    }


}