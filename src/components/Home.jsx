import React, { useState, createContext} from 'react';
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
    const [arr, setArr] = useState([0]);
    const [x, setX] = useState(0);
    console.log(arr);

    return(
        <>
        <div className='home'>
            <div className ='rowC'>
                <div className='home-container'>
                    {
                        // arr.map((value, i) => {
                        //     return(
                        //         <div key = {i} style={{textAlign: 'center'}}>
                        //             <h3 style={{color: '#205375', marginBottom: '0px' }}>{value}</h3>
                        //             <Bars num = {value} size={arr.length} />
                        //         </div>
                        //     ) 
                        // })
                    }
                </div>
                <div>
                    <div className='code-container'>
                        {
                            // arr.map((value, i) => {
                            //     return(
                            //         <div key={i}>
                            //             Hello
                            //         </div>
                            //     ) 
                            // })
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
                <FileUpload handleChange={setArr} onHandle={setX} />
            </div>
        </div>
        </>
    );
}

export default Home;