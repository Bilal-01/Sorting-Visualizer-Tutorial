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

        if(Math.max.apply(null, algo.arr) <= 10){
            return props.num*30;
        }

        if (props.num < 100){
            return  props.num + 20;
        }
        else if(props.num < 200)
            return props.num + 20;
        else if(props.num < 300)
            return props.num + 20;
        else if(props.num <= 400)
            return props.num + 20;
    }



    function setColor(){
        for(let i=0; i<algo.arr.length; i++){
            if(props.index === algo.indices[i]){
                return '112B3C';
            }
        }
        return 'F66B0E';
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