import React from 'react';
import NavList from './NavList';
import '../css/header.css';

function Header () {

    return(
        <div className='header'>
            <h1>
                SORTING ALGORITHM VISUALIZER
            </h1>
            <NavList />
        </div>
    );
}

export default Header;