import React from 'react';
import Bars from './Bars';
import FileUpload from './FileUpload';
import '../css/home.css';

/*
    RESTRICTIONS
        1. Negative Numbers
        2. Real Numbers
        3. Range : 1 - 1000
*/

function Home() {

    const arr = [99, 199, 299, 399, 50, 2, 120, 20, 500];
    var avg = 0;

    arr.forEach(function(item, index) {
        avg += item;
    });
    avg = avg / arr.length;

    return(
        <>
        <div className='home'>
            <div className ='rowC'>
                <div className='home-container'>
                    {
                        arr.map((value, i) => {
                            return(
                                <div key = {i} style={{textAlign: 'center'}}>
                                    <h3 style={{color: '#205375', marginBottom: '0px' }}>{value}</h3>
                                    <Bars num = {value} size={arr.length} avg={avg} />
                                </div>
                            ) 
                        })
                    }
                </div>
                <div>
                    <div className='code-container'>
                        {
                            arr.map((value, i) => {
                                return(
                                    <div key={i}>
                                        Hello
                                    </div>
                                ) 
                            })
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