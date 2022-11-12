import React, { useContext } from 'react';
import AlgoContext from './AlgoContext';
import '../css/bar.css';

function Bars(props){
    const algo = useContext(AlgoContext);
    var isZero = false;
    if(props.num === 0){
        isZero = true;
    }



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

    function setColor(){
        if(props.index === algo.indices[0] || props.index === algo.indices[1]){
            return '112B3C';
        }
        else{
            return 'F66B0E';
        }
    }

    


    const styles={
        backgroundColor: `#${setColor()}`,
        height: isZero ? '5px' : `${getHeight()}px`,
        margin: '5px',
        width: '45px',
        transition: '1s height',
    }

    return(
        <div style={styles}>
        </div>
    )
}   

export default Bars;