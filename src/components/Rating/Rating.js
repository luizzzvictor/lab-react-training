import React from 'react';
import './Rating.css'

function Rating(props) {
    if(Number(props.children)<1) {
        return (
            <div>
                <p>☆☆☆☆☆</p>
            </div>
        );
    } else if (Number(props.children)<=1.49) {
        return (
            <div>
                <p>★☆☆☆☆</p>
            </div>
        );        
    }
     else if (Number(props.children)>=1.5 && Number(props.children)<2.49) {
        return (
            <div>
                <p>★★☆☆☆</p>
            </div>
        );        
    }
    
     else if (Number(props.children)>=2.5 && Number(props.children)<3.49) {
        return (
            <div>
                <p>★★★☆☆</p>
            </div>
        );        
    }

     else if (Number(props.children)>=3.5 && Number(props.children)<4.49) {
        return (
            <div>
                <p>★★★★☆</p>
            </div>
        );        
    }

    else if (Number(props.children)>=4.5) {
        return (
            <div>
                <p>★★★★★</p>
            </div>
        );        
    }
    
    
  
}

export default Rating;