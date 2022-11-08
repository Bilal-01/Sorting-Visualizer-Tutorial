import React from 'react';
import '../css/bar.css';

function Bars(props){
    
    var isZero = false;
    if(props.num === 0){
        isZero = true;
    }
    var width = props.size;


    const styles={
        backgroundColor: '#F66B0E',
        height: isZero ? '5px' : `${props.num*50}px`,
        margin: '5px',
        width: '50px',
    }

    return(
        <div style={styles}>
        </div>
    )
}   

export default Bars;