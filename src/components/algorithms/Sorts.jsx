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
        if(algo.algorithm === 'Bubble'){
            bubbleSort(localArr, helperFunctions);
        }
        else if(algo.algorithm === 'Insertion'){
            insertionSort(localArr, helperFunctions);
        }
        else if(algo.algorithm === 'Quick'){    
            let high = localArr.length-1;
            let low = 0;
            quickSort(localArr, low, high, swap,animateColor);
            // var sArray= quickSort(localArr,swap,animateColor);
            // console.log(sArray);
        }
        else if(algo.algorithm === 'Merge'){
            
        }
        else if(algo.algorithm === 'Heap'){
            
        }
        else if(algo.algorithm === 'Counting'){
            
        }
        else if(algo.algorithm === 'Radix'){
            
        }
        else if(algo.algorithm === 'Bucket'){
            
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

async function partition(localArr, low, high,swap, animateColor) {
  
    let pivot = localArr[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (localArr[j] < pivot) {
            i++;
            await animateColor(i, j);
        localArr = await swap(localArr, i, j);
        }
    }
    // await sleep(500);
    await animateColor(i+1, high);
    localArr = await swap(localArr, i + 1, high);
    return Promise.resolve(i + 1);

}
async function quickSort(localArr, low, high, swap, animateColor)
{
    if (low < high) {
        let pi = await partition(localArr, low, high,swap, animateColor);       
        await quickSort(localArr, low, pi - 1,swap,animateColor);
        await quickSort(localArr, pi + 1, high, swap, animateColor);
        console.log(pi);
    }    
}

// async function quickSort(localArr,swap,animateColor) {

// 	if(localArr.length <= 1){ return localArr }
//     else{
//         let left = [];
//         let right = [];
//         let newArray = [];
//         let pivot = localArr.pop();
    
//         localArr.forEach(value => {
//             value <= pivot ? left.push(value) : right.push(value);
//         });
    
//         return newArray.concat(await quickSort(left), pivot,await quickSort(right));
//     }
// };

export default Sorts;