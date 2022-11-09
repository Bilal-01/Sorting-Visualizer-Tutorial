import React from 'react';
import '../css/bar.css';

function Bars(props){
    
    var isZero = false;
    if(props.num === 0){
        isZero = true;
    }
    var newHeight;


    function getHeight(){
        if (props.num < 100){
            return  props.num + 20;
        }
        else if(props.num < 200)
            return props.num + 20;
        else if(props.num < 300)
            return props.num + 20;
        else if(props.num < 400)
            return props.num + 20;
        else if(props.num <= 500)
            return props.num;
    }

    


    const styles={
        backgroundColor: '#F66B0E',
        height: isZero ? '5px' : `${getHeight()}px`,
        margin: '5px',
        width: '45px',
    }

    return(
        <div style={styles}>
        </div>
    )
}   

export default Bars;