import React, {useContext, useEffect, useState} from 'react';
import AlgoContext  from '../AlgoContext';


function BubbleSort(props)
{
    const algo = useContext(AlgoContext);
    
    useEffect(() => {
       execute();
    }, []);

    
    // useEffect(() => {
    //     console.log(algo.arr);
    //  }, [algo.arr]);


    async function execute(){
        let localArr  = [...algo.arr];
        for(var i = 0; i < localArr.length; i++){
            for(var j = 0; j < ( localArr.length - i -1 ); j++){
                if(localArr[j] > localArr[j+1]){
                    localArr = await swap(localArr, j);
                    console.log(localArr);
                }
            }
        }
    }
    async function sleep(millis) {
        return new Promise((resolve) => setTimeout(resolve, millis));
    }

    async function swap(arr, j){
        let tempArr = [...arr];
        var temp = tempArr[j]
        tempArr[j] = tempArr[j + 1]
        tempArr[j+1] = temp;
        await sleep(1000)
        algo.setArr(tempArr);
        return Promise.resolve(tempArr);
    }

    return(
        props.code.map((line, i) => {
            return <p key={i}>{line}</p>
        })
    );
}

export default BubbleSort;