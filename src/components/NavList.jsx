import React, {useContext} from 'react';
import AlgoContext  from './AlgoContext';
import '../css/navlist.css';


function NavList () {

    const algo = useContext(AlgoContext);

    return(
        <div className='nav-list'>
            <button className='nav-link' onClick={() => algo.setAlgorithm('Insertion')} >
                Insertion Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('Bubble')}>
                Bubble Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('Merge')}>
                Merge Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('Heap')}>
                Heap Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('Quick')}>
                Quick Sort
            </button>
            <button className='nav-link' onClick={() => {
                algo.setAlgorithm('Radix');
                algo.setIsFreqTable(true);
            }}>
                Radix Sort
            </button>
            <button className='nav-link' onClick={() => {
                algo.setAlgorithm('Bucket');
            }}>
                Bucket Sort
            </button>
            <button className='nav-link' onClick={() => {
                algo.setAlgorithm('Counting');
                algo.setIsFreqTable(true);
            }}>
                Counting Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('Modified Quicksort')}>
               7.4.5 Sort
            </button>
            <button className='nav-link' onClick={() => {
                algo.setAlgorithm('Modified Countsort');
                algo.setIsFreqTable(true);
            }}>
                8.2.4 Sort
            </button>
        </div>

    );
}

export default NavList;