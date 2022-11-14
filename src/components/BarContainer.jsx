import React, {useContext, useEffect, useState} from 'react';
import AlgoContext from './AlgoContext';
import Bars from './Bars';
import '../css/bar.css';

function BarContainer(){
    const algo = useContext(AlgoContext);

    const [show, setShow] = useState('active');

    function handleShow(str){
        setShow(str);
    }

    useEffect(() => {
        if(algo.algorithm === 'Counting'){
            //handleShow('hide');
        }
    }, [algo.algorithm]);

    return(
        <div className='home-container'>
            {
               algo.arr.map((value, i) => (
                    <div className={show} key = {i} style={{textAlign: 'center'}}>
                        <h3 style={{color: '#205375', marginBottom: '0px' }}>{value}</h3>
                        <Bars num = {value} index={i} />
                    </div>
                )) 
            }
        </div>
    );
}

export default BarContainer;