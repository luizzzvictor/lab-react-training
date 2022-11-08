import React from 'react';
import './BoxColor.css'

function BoxColor(props) {
    const r = props.r
    const g = props.g
    const b = props.b
    let divStyle = {backgroundColor: `rgb(${r},${g}, ${b})`}
    return (
        <div className='boxColorContainer' style={divStyle}>
        rgb({r},{g},{b})
        </div>
    );
}

export default BoxColor;