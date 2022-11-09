import React, {useContext} from 'react';
import AlgoContext from './AlgoContext';
import Bars from './Bars';
import '../css/home.css';

function BarContainer(props){

    const algo = useContext(AlgoContext);

    return(
        <div className='home-container'>
            {
                algo.arr.map((value, i) => {
                    return(
                        <div key = {i} style={{textAlign: 'center'}}>
                            <h3 style={{color: '#205375', marginBottom: '0px' }}>{value}</h3>
                            <Bars num = {value} size={algo.arr.length} />
                        </div>
                    ) 
                })
            }
        </div>
    );
}

export default BarContainer;