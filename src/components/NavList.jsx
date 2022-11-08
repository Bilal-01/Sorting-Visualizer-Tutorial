import React from 'react';
import '../css/navlist.css';

function NavList () {
    return(
        <div className='nav-list'>
            <button className='nav-link'>
                Insertion Sort
            </button>
            <button className='nav-link'>
                Bubble Sort
            </button>
            <button className='nav-link'>
                Merge Sort
            </button>
            <button className='nav-link'>
                Heap Sort
            </button>
            <button className='nav-link'>
                Quick Sort
            </button>
            <button className='nav-link'>
                Radix Sort
            </button>
            <button className='nav-link'>
                Bucket Sort
            </button>
            <button className='nav-link'>
                Counting Sort
            </button>
            <button className='nav-link'>
               7.4.5 Sort
            </button>
            <button className='nav-link'>
                8.2.4 Sort
            </button>
        </div>

    );
}

export default NavList;