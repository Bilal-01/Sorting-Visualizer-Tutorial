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
        mergeAnimation,
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
            quickSort(localArr, helperFunctions);
        }
        else if(algo.algorithm === 'Merge'){
            mergeSort(localArr, 0, localArr.length-1, helperFunctions);
        }
        else if(algo.algorithm === 'Heap'){
            heapSort(localArr, helperFunctions)
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

    async function animateColor(arr){
        await sleep(1000);
        let indices = [...arr];
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

    async function completeSorted(){
        algo.setIsSorted(true);
        return Promise;
    }

    return(
        props.code.map((line, i) => {
            return <p key={i}>{line}</p>
        })
    );

    async function mergeAnimation(arr){
        let tempArr = [...arr];
        await sleep(1000);
        algo.setArr(tempArr);
        return Promise;

    }


}

async function bubbleSort(localArr, helperFunctions){
    await helperFunctions.sleep(1000);
    for(var i = 0; i < localArr.length; i++){
        for(var j = 0; j < ( localArr.length - i -1 ); j++){
            await helperFunctions.animateColor([j, j+1]);
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
            await helperFunctions.animateColor([j, j-1]);
            localArr = await helperFunctions.swap(localArr, j, j-1);
            j = j-1;
        } 
    }
    await helperFunctions.completeSorted();

}

async function partition(localArr, low, high,helperFunctions) {
    let pivot = localArr[high];
    let i = (low);
    for (let j = low; j < high; j++) {
        if (localArr[j] < pivot) {
            await helperFunctions.animateColor([j, i]);
            localArr = await helperFunctions.swap(localArr, j, i);
            console.log(localArr);
            i++;
        }
    }
    await helperFunctions.animateColor([i, high]);
    localArr = await helperFunctions.swap(localArr, i, high);
    return Promise.resolve([localArr, i]);

}

async function quickSort(arr, helperFunctions)
{
    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);
    let pivotIndex;
    
    while(stack[stack.length - 1] >= 0){
    	let end = stack.pop();
        let start = stack.pop();
        
        [arr, pivotIndex] = await partition(arr, start, end, helperFunctions);
        console.log(arr);
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    await helperFunctions.completeSorted();    
}

async function merge(arr, l, m, r, helperFunctions)
{
    let n1 = m - l + 1;
    let n2 = r - m;
    console.log(n1 + " " + n2);
    let L = new Array(n1);
    let R = new Array(n2);
    let animations = [];
    
    let i = 0;
    let j = 0;
    console.log(arr);
    if(n1 !== 0){
        for (i = 0; i < n1; i++)
        {
            L[i] = arr[l + i];
            animations[i] = l+i;
        }
    }
    if(n2 !== 0){
        for (j = 0; j < n2; j++){
            R[j] = arr[m + 1 + j];
            animations[n1+j] = m+1+j
        }
    }
    await helperFunctions.animateColor(animations);
        
    i=0;
    j=0;    
    let k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    await helperFunctions.mergeAnimation(arr);


    console.log(arr);
    return Promise.resolve(arr);
}
 
async function mergeSort(arr,l, r, helperFunctions){
    if(l>=r){ 
        return Promise.resolve(arr);
    }
    var m =l+ parseInt((r-l)/2);
    arr = await mergeSort(arr,l,m, helperFunctions);
    arr = await mergeSort(arr,m+1,r, helperFunctions);
    arr = await merge(arr,l,m,r, helperFunctions);
    return Promise.resolve(arr);
}

async function heapSort(arr, helperFunctions)
{
    var N = arr.length;
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        arr = await heapify(arr, N, i, helperFunctions);
    for (var i = N - 1; i > 0; i--) {
        await helperFunctions.animateColor([0, i]);
        arr = await helperFunctions.swap(arr, 0, i);
        arr = await heapify(arr, i, 0, helperFunctions);
    }
    await helperFunctions.completeSorted();
}
async function heapify(arr, N, i, helperFunctions)
{
    var largest = i; 
    var l = 2 * i + 1; 
    var r = 2 * i + 2; 

    if (l < N && arr[l] > arr[largest])
        largest = l;

    if (r < N && arr[r] > arr[largest])
        largest = r;
        
    if (largest != i) {
        await helperFunctions.animateColor([i, largest]);
        arr = await helperFunctions.swap(arr, i, largest);
        arr = await heapify(arr, N, largest, helperFunctions);
    }

    return Promise.resolve(arr);
}

export default Sorts;