import React, {useContext, useEffect, useState} from 'react';
import AlgoContext  from '../AlgoContext';


function Sorts(props)
{
    const algo = useContext(AlgoContext);
    

    const helperFunctions = {
        swap, 
        animateColor, 
        completeSorted,
        sleep,
    };
    
    useEffect(() => {
        algo.setIsSorted(false);
        const originalArray = [...algo.inputArr];
        algo.setArr(originalArray);
        let localArr  = [...originalArray];
        if(algo.algorithm === 'bubble'){
            bubbleSort(localArr, helperFunctions);
        }
        else if(algo.algorithm === 'insertion'){
            insertionSort(localArr, helperFunctions);
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
    }, [algo.algorithm]);

    useEffect(() => {
        algo.setIndices([]);
    }, [algo.isSorted]);


    async function sleep(millis) {
        return new Promise((resolve) => setTimeout(resolve, millis));
    }

    async function animateColor(i, j){
        await sleep(100);
        let indices = [i, j];
        algo.setIndices(indices);
        return Promise;

    }

    async function swap(arr, i, j){
        let tempArr = [...arr];
        var temp = tempArr[i]
        tempArr[i] = tempArr[j]
        tempArr[j] = temp;
        await sleep(50);
        algo.setArr(tempArr);
        return Promise.resolve(tempArr);
    }

    async function completeSorted(){
        algo.setIsSorted(true);
        return Promise;
    }

    return(
        props.code.map((line, i) => {
            return <p key={i}>{line}</p>
        })
    );
}

async function bubbleSort(localArr, helperFunctions){
    await helperFunctions.sleep(1000);
    for(var i = 0; i < localArr.length; i++){
        for(var j = 0; j < ( localArr.length - i -1 ); j++){
            await helperFunctions.animateColor(j, j+1);
            if(localArr[j] > localArr[j+1]){
                localArr = await helperFunctions.swap(localArr, j, j+1);
            }
        }
    }
    await helperFunctions.completeSorted();
}

async function insertionSort(localArr, helperFunctions){
    await helperFunctions.sleep(1000);
    let i, j; 
    for (i = 1; i < localArr.length; i++)
    { 
        j = i; 
        while (j >= 0 && localArr[j] < localArr[j-1])
        { 
            await helperFunctions.animateColor(j, j-1);
            localArr = await helperFunctions.swap(localArr, j, j-1);
            j = j-1;
        } 
    }
    await helperFunctions.completeSorted();

}

export default Sorts;