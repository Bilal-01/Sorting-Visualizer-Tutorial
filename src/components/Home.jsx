import React  from 'react';
import FileUpload from './FileUpload';
import Algorithms from './Algorithms';
import BarContainer from './BarContainer';
import '../css/home.css';

/*
RESTRICTIONS
        1. Negative Numbers
        2. Real Numbers
        3. Range : 1 - 500?
*/

function Home() {

    return(
        <>
        <div className='home'>
            <div className ='rowC'>
                <BarContainer />
                <div>
                    <div className='code-container'>
                        <Algorithms/>
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