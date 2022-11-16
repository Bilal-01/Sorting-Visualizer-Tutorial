import React, { useContext, useEffect, useState } from 'react';
import AlgoContext from './AlgoContext';
import BarContainer from './BarContainer';
import Sorts from './algorithms/Sorts';

function Algorithms() {
    const algo = useContext(AlgoContext);
    const [algoText, setAlgoText] = useState([]);
    let bubbleStr = [
        `for(var i = 0; i < arr.length; i++)`,
        `    for(var j = 0; j < ( arr.length - i -1 ); j++)`,
        `      if(arr[j] > arr[j+1])`,
        `        swap(arr[j] , arr[j + 1])`,
    ];

    let insertionStr = [
        "for (i = 1; i < arr.length; i++)",
        " j = i",
        " while (j >= 0 && arr[j] < arr[j - 1])",
        " swap(arr[j],arr[j - 1])",
        " j = j - 1",
    ];

    let quickStr = [
        "Choose the high-index Pivot.",
        "Take two variables to point Left and Right of the list excluding Pivot.",
        "Left points to the low index.",
        "Right points to the high index.",
        "If the value at the Left is less than the pivot move in the right direction.",
        "If the value at the Right is greater than the pivot move in the left direction.",
    ]

    let bucketStr = [

        "Make B buckets, each of which can store a range of values for all of the buckets.",
        "Fill each bucket with 0 values for all buckets.",
        "Put elements in buckets that match the range for all buckets.",
        "Sort elements in each bucket using INSERTION SORT and gather elements from each bucket"
    ]

    let mergeStr = [

        "If the left index of array is less than the right index,calculate its mid point",
        "Divide array into equal halves, unless the atomic values are achieved.",
        "Again find that is left index is less than the right index for both arrays, if found yes, then again calculate mid points for both the arrays.",
        "Further divide these two arrays into further halves, until the atomic units of the array is reached and further division is not possible.",
        "After dividing the array into smallest units, start merging the elements again based on comparison of size of elements",
        "Firstly, compare the element for each list and then combine them into another list in a sorted manner.",
    ]

    let heapStr = [
        " heapify(Arr, i)",
             "if (left < N and Arr[left] > Arr[largest])->largest = l",
             "if (right < N && Arr[right] > Arr[largest])->largest = right;",
             "if (largest != i) swap(arr[i], Arr[largest]) & heapify(Arr, largest)",
        "heapSort(Arr)",
        "do heapify(Arr,i)",
        "do swap(Arr[0], Arr[i]) & heapify(Arr,i)",

    ]

    let countStr = [
        "create key (counting) array",
        "for each element in list",
        "increase the respective counter by 1",
        "for each counter, starting from smallest key",
        "while counter is non-zero",
        "restore element to list",
        "decrease counter by 1",
    ]

    let modifiedQuickStr = [
        "Define a threshold",
        "Apply Quicksort until (high - low) > threshold",
        "Apply insertion sort on the 'nearly' sorted array",
    ]

    
    let modifiedCountStr = [
        "Create a frequency array and initialize it with 0",
        "Create a prefix sum array => B[i]",
        "Number of integers in given range => B[b] - B[a - 1] ( B[-1] = 0 )",
    ]

    useEffect(() => {
        if (algo.algorithm === 'Bubble') {
            setAlgoText(bubbleStr);
        }
        if (algo.algorithm === 'Insertion') {
            setAlgoText(insertionStr);
        }
        if (algo.algorithm === 'Quick') {
            setAlgoText(quickStr);
        }
        if (algo.algorithm === 'Heap') {
            setAlgoText(heapStr);
        }
        if (algo.algorithm === 'Merge') {
            setAlgoText(mergeStr);
        }
        if (algo.algorithm === 'Bucket') {
            setAlgoText(bucketStr);
        }
        if (algo.algorithm === 'Counting') {
            setAlgoText(countStr);
        }
        if (algo.algorithm === 'Modified Quick') {
            setAlgoText(modifiedQuickStr);
        }
        if (algo.algorithm === 'Modified Count') {
            setAlgoText(modifiedCountStr);
        }
    }, [algo.algorithm]);

    return (
        <>
            <h2>{algo.algorithm} Sort</h2>
            {algo.algorithm === '' ? (<div><h5>1. Choose File </h5><h5>2. Select Sorting Algorithm</h5></div>) : <Sorts code={algoText} />}
        </>
    )
}



export default Algorithms