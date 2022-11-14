import React, { useContext }  from 'react';
import FileUpload from './FileUpload';
import Algorithms from './Algorithms';
import BarContainer from './BarContainer';
import AlgoContext from './AlgoContext';
import FreqTable from './FreqTable';
import '../css/home.css';

/*
RESTRICTIONS
        1. Negative Numbers
        2. Real Numbers
        3. Range : 1 - 500?
*/

function Home() {
    const algo = useContext(AlgoContext);
    let arr = [0,0,0,0,0,0,0,0,0,0];

    
    return(
        <>
            <div className='home'>
                {algo.isFreqTable ? <FreqTable />:null}
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