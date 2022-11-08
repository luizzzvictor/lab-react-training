import React from 'react';
import './Random.css'

function Random(props) {
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    return (
        <div className='randomContainer'>
        <p>Random value between {props.min} and {props.max} => {getRandomArbitrary(props.min,props.max)} </p>            
        </div>
    );
}

export default Random;