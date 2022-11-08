import React from 'react';
import Bars from './Bars';
import Header from './Header';
import Footer from './Footer';
import '../css/home.css';

/*
    RESTRICTIONS
        1. Negative Numbers
        2. Real Numbers
        3. Range : 1 - 1000
*/

function Home() {

    const arr = [5, 3, 1, 9, 0, 5, 2];
    var avg = 0;

    arr.forEach(function(item, index) {
        avg += item;
    });
    avg = avg / arr.length;

    return(
        <>
        <div className='home'>
            <div className='home-container'>
                {
                    arr.map((value, i) => {
                        return(
                            <div key = {i} style={{textAlign: 'center'}}>
                                <h3 style={{color: '#205375' }}>{value}</h3>
                                <Bars num = {value} size={arr.length} avg={avg} />
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
        </>
    );
}

export default Home;