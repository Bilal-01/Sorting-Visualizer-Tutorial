import React, {useContext, useEffect, useState} from 'react';
import AlgoContext  from '../AlgoContext';


function Sorts(props)
{
    const algo = useContext(AlgoContext);
    let localArr  = [...algo.arr];
    
    useEffect(() => {
        if(algo.algorithm === 'bubble'){
            bubbleSort(localArr, swap, animateColor);
        }
        else if(algo.algorithm === 'insertion'){
            insertionSort(localArr, swap, animateColor);
        }
        else if(algo.algorithm === 'quick'){
            
        }
        else if(algo.algorithm === 'merge'){
            
        }
        else if(algo.algorithm === 'heap'){
            
        }
        else if(algo.algorithm === 'counting'){
            
        }
        else if(algo.algorithm === 'radix'){
            
        }
        else if(algo.algorithm === 'bucket'){
            
        }
    }, []);


    async function sleep(millis) {
        return new Promise((resolve) => setTimeout(resolve, millis));
    }

    async function animateColor(i, j){
        await sleep(1000);
        let indices = [i, j];
        algo.setIndices(indices);
        return Promise;

    }

    async function swap(arr, i, j){
        let tempArr = [...arr];
        var temp = tempArr[i]
        tempArr[i] = tempArr[j]
        tempArr[j] = temp;
        await sleep(500);
        algo.setArr(tempArr);
        return Promise.resolve(tempArr);
    }

    return(
        props.code.map((line, i) => {
            return <p key={i}>{line}</p>
        })
    );
}

async function bubbleSort(localArr, swap, animateColor){
    for(var i = 0; i < localArr.length; i++){
        for(var j = 0; j < ( localArr.length - i -1 ); j++){
            await animateColor(j, j+1);
            if(localArr[j] > localArr[j+1]){
                localArr = await swap(localArr, j, j+1);
            }
        }
    }
}

async function insertionSort(localArr, swap, animateColor){
    let i, j; 
    for (i = 1; i < localArr.length; i++)
    { 
        j = i; 
        while (j >= 0 && localArr[j] < localArr[j-1])
        { 
            await animateColor(j, j-1);
            localArr = await swap(localArr, j, j-1);
            j = j-1;
        } 
    } 
}

export default Sorts;