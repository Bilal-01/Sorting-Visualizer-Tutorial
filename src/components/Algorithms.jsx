import React, {useContext} from 'react';
import AlgoContext from './AlgoContext';
import BarContainer from './BarContainer';

function Algorithms(props){
    const algo = useContext(AlgoContext);
    var strBubble = [
        `for(var i = 0; i < arr.length; i++){`,
        `    for(var j = 0; j < ( arr.length - i -1 ); j++){`,
        `      if(arr[j] > arr[j+1]){`,
        `        var temp = arr[j]`,
        `        arr[j] = arr[j + 1]`,
        `        arr[j+1] = temp`,
        `      }`,
        `    }`,
        `}`
    ]
    

    return (
        <>
            <h3>{props.sort} Sort</h3>
            
            {props.sort === 'bubble' ? bubbleSort(algo, strBubble) : 'Not available'}
        </>
    )

}

function bubbleSort(algo, strBubble){
    
    for(var i = 0; i < algo.arr.length; i++){
        for(var j = 0; j < ( algo.arr.length - i -1 ); j++){
            if(algo.arr[j] > algo.arr[j+1]){
                var temp = algo.arr[j]
                algo.arr[j] = algo.arr[j + 1]
                algo.arr[j+1] = temp
            }
        }
    }
    console.log(algo.arr);
    return(
        strBubble.map((line, i) => {
            return <p key={i}>{line}</p>
        })
    );

}

export default Algorithms