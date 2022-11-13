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
            <button className='nav-link' onClick={() => algo.setAlgorithm('Radix')}>
                Radix Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('Bucket')}>
                Bucket Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('Counting')}>
                Counting Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('7.4.5')}>
               7.4.5 Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('8.2.4')}>
                8.2.4 Sort
            </button>
        </div>

    );
}

export default NavList;