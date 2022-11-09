import React, {useContext} from 'react';
import AlgoContext  from './AlgoContext';
import '../css/navlist.css';


function NavList () {

    const algo = useContext(AlgoContext);

    return(
        <div className='nav-list'>
            <button className='nav-link' onClick={() => algo.setAlgorithm('insertion')} >
                Insertion Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('bubble')}>
                Bubble Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('merge')}>
                Merge Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('heap')}>
                Heap Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('quick')}>
                Quick Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('radix')}>
                Radix Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('bucket')}>
                Bucket Sort
            </button>
            <button className='nav-link' onClick={() => algo.setAlgorithm('counting')}>
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