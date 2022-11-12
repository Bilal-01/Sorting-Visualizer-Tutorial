import React, {useContext, useEffect, useState} from 'react';
import AlgoContext  from '../AlgoContext';


function BubbleSort(props)
{
    const algo = useContext(AlgoContext);
    
    useEffect(() => {
       execute();
    }, []);


    function execute(){
        var localArr  = [...algo.arr];
        for(var i = 0; i < localArr.length; i++){
            for(var j = 0; j < ( localArr.length - i -1 ); j++){
                if(localArr[j] > localArr[j+1]){
                    localArr = swap(localArr, j).
                    console.log(localArr);
                }
            }
        }
    }
    async function sleep(millis) {
        return new Promise((resolve) => setTimeout(resolve, millis));
    }

    async function swap(arr, j){
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp;
        await sleep(1000)
        algo.setArr(arr);
        return arr;
    }

    return(
        props.code.map((line, i) => {
            return <p key={i}>{line}</p>
        })
    );
}

export default BubbleSort;