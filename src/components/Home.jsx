import React, { useState, useContext} from 'react';
import FileUpload from './FileUpload';
import AlgoContext  from './AlgoContext';
import Algorithms from './Algorithms';
import BarContainer from './BarContainer';
import '../css/home.css';

/*
RESTRICTIONS
        1. Negative Numbers
        2. Real Numbers
        3. Range : 1 - 1000
*/

function Home() {
    const algo = useContext(AlgoContext);
    return(
        <>
        <div className='home'>
            <div className ='rowC'>
                <BarContainer />
                <div>
                    <div className='code-container'>
                        {
                            <Algorithms sort={algo.algorithm} />
                        }
                    </div>
                    <div className="complexity-container">
                        <button className="time-btn">
                            Time Complexity
                        </button>
                        <button className="space-btn">
                            Space Complexity
                        </button>
                    </div>
                </div>
            </div>
            <div className='file-upload'>
                <FileUpload />
            </div>
        </div>
        </>
    );
}

export default Home;