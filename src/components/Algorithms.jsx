import React, { useContext, useEffect, useState } from 'react';
import AlgoContext from './AlgoContext';
import BarContainer from './BarContainer';
import Sorts from './algorithms/Sorts';

function Algorithms() {
    const algo = useContext(AlgoContext);
    const [algoText, setAlgoText] = useState([]);
    let bubbleStr = [
        `for(var i = 0; i < arr.length; i++)`, //n
        `    for(var j = 0; j < ( arr.length - i -1 ); j++)`, // n
        `      if(arr[j] > arr[j+1])`, // 1
        `        swap(arr[j] , arr[j + 1])`, // 1
        // O(n^2)
    ];

    let insertionStr = [
        "for (i = 1; i < arr.length; i++)", // n
        " j = i", // 1
        " while (j >= 0 && arr[j] < arr[j - 1])", //n-1
        " swap(arr[j],arr[j - 1])", // 1
        " j = j - 1", // 1
        // O(n^2)
    ];

    let quickStr = [
        "Choose the high-index Pivot.",
        "For each element in arr from left to right",
        "if arr[j] < pivot, then swap(arr[left] and arr[right])",
        "Swap the pivot with Right index",
        "Apply Quicksort on subarray arr[ low .. pivot ]",
        "Apply Quicksort on subarray arr[ pivot + 1.. high ]",
    ]

    let bucketStr = [
        "Make B buckets, each of which can store a range of values for all of the buckets.", // n
        "Fill each bucket with 0 values for all buckets.", // n
        "Put elements in buckets that match the range for all buckets.", //k
        "Sort elements in each bucket using INSERTION SORT and gather elements from each bucket" // insertion in a bucket takes O(k) [assumption]
        // n+k
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
        "heapify(Arr, i)",
             "if (left < N and Arr[left] > Arr[largest])->largest = l",
             "if (right < N && Arr[right] > Arr[largest])->largest = right;",
             "if (largest != i) swap(arr[i], Arr[largest]) & heapify(Arr, largest)",
        "heapSort(Arr)",
        "do heapify(Arr,i)",
        "do swap(Arr[0], Arr[i]) & heapify(Arr,i)",

    ]

    let countStr = [
        "create key (counting) array", // k
        "for each element in list", // n
        "increase the respective counter by 1",
        "for each counter, starting from smallest key", // n+k  
        "while counter is non-zero", 
        "restore element to list",
        "decrease counter by 1",
        // O(n + k)
    ]

    let modifiedQuickStr = [
        "Define a threshold -- Threshold = 4",
        "Apply Quicksort until (high - low) > threshold",
        "Apply insertion sort on the 'nearly' sorted array",
    ]

    
    let modifiedCountStr = [
        "Create a frequency array and initialize it with 0", //O(k)
        "foreach element in original array", // n
        "Fill the frequency array", // k
        "Create a prefix sum array => B[i]", // k
        "Number of integers in given range => B[b] - B[a - 1] ( B[-1] = 0 )", // 1
    ]

    
    let radixStr = [
        "Get max element from the array",
        "for the number of digits in the max number, do",
        "Create an auxiliary array for frequency and calculate the prefix sum",
        "Apply count sort on the array according to the digit i    [ i = 1, 2, 3 ]",
        "Copy the values of digit-wise sorted array back to original array",

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
        if (algo.algorithm === 'Radix') {
            setAlgoText(radixStr);
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