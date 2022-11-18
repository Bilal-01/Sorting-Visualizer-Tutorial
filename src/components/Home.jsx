import React, { useContext }  from 'react';
import FileUpload from './FileUpload';
import Algorithms from './Algorithms';
import BarContainer from './BarContainer';
import AlgoContext from './AlgoContext';
import FreqTable from './FreqTable';
import ShowCount from './ShowCount';
import ComplexityModal from './ComplexityModal';
import '../css/home.css';

/*
RESTRICTIONS
        1. Negative Numbers
        2. Real Numbers
        3. Range : 1 - 400?
*/

function Home() {
    const algo = useContext(AlgoContext);
    let arr = [0,0,0,0,0,0,0,0,0,0];

    
    return(
        <>
            <div className='home'>
                {algo.isFreqTable ? <FreqTable />:null}
                {!algo.isFreqTable && algo.algorithm === 'Modified Count'? <ShowCount />:null}
                <div className ='rowC'>
                    <BarContainer />
                    <div>
                        <div className='code-container'>
                            <Algorithms/>
                        </div>
                        <div className="complexity-container">
                            <ComplexityModal complexity='Time' />
                            <ComplexityModal complexity='Space' />
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