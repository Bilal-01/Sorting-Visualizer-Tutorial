import React, {useContext, useEffect, useState} from 'react';
import AlgoContext from './AlgoContext';
import BarContainer from './BarContainer';
import BubbleSort from './algorithms/BubbleSort';

function Algorithms(){
    const algo = useContext(AlgoContext);
    const [strBubble, setStrBubble] = useState([]);

    useEffect(() => {
        var algoWords = [
            `for(var i = 0; i < arr.length; i++){`,
            `    for(var j = 0; j < ( arr.length - i -1 ); j++){`,
            `      if(arr[j] > arr[j+1]){`,
            `        var temp = arr[j]`,
            `        arr[j] = arr[j + 1]`,
            `        arr[j+1] = temp`,
            `      }`,
            `    }`,
            `}`
        ];
        setStrBubble(algoWords);
    }, []);
    
    

    return (
        <>
            <h3>{algo.algorithm} Sort</h3>
            {algo.algorithm === 'bubble' ? <BubbleSort code={strBubble} /> : 'Not available'}
        </>
    )
}



export default Algorithms