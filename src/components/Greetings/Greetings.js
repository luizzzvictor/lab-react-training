import React from 'react';
import './Greetings.css'

function Greetings(props) {
    if (props.lang ==='de') {
        return (
            <div className='greetingsContainer'>
            <p>Hallo {props.children}</p>            
            </div>
        );
    }
    if (props.lang ==='en') {
        return (
            <div className='greetingsContainer'>
            <p>Hello {props.children}</p>            
            </div>
        );
    }
    if (props.lang ==='es') {
        return (
            <div className='greetingsContainer'>
            <p>Hola {props.children}</p>            
            </div>
        );
    }
    if (props.lang ==='fr') {
        return (
            <div className='greetingsContainer'>
            <p>Bonjour {props.children}</p>            
            </div>
        );
    }
}

export default Greetings;