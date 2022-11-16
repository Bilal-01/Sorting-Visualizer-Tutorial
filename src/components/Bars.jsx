import React, { useContext } from 'react';
import AlgoContext from './AlgoContext';
import '../css/bar.css';

function Bars(props) {
    const algo = useContext(AlgoContext);
    var isZero = false;
    if (props.num === 0) {
        isZero = true;
    }



    function getHeight() {

        if (Math.max.apply(null, algo.arr) <= 10) {
            return props.num * 30;
        }

        if (props.num < 100) {
            return props.num + 20;
        }
        else if (props.num < 200)
            return props.num + 20;
        else if (props.num < 300)
            return props.num + 20;
        else if (props.num <= 400)
            return props.num + 20;
    }



    function setColor() {
        if (algo.algorithm === 'Bucket' && !algo.isSorted) {
            if (algo.indices[0] === 0) {
                for (let i = 1; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return 'FBAB50';
                    }
                }
            }
            if (algo.indices[0] === 1) {
                for (let i = 1; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return 'FFB703';
                    }
                }

            }
            if (algo.indices[0] === 2) {
                for (let i = 1; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return '817425';
                    }
                }
            }
            if (algo.indices[0] === 3) {
                for (let i = 1; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return '126782';
                    }
                }
            }
            if (algo.indices[0] === 4) {
                for (let i = 1; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return '219EBC';
                    }
                }

            }
            if (algo.indices[0] === 5) {
                for (let i = 1; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return '023047';
                    }
                }
            }
            if (algo.indices[0] === 6) {
                for (let i = 1; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return '7F7A59';
                    }
                }
            }
            if (algo.indices[0] === 7) {
                for (let i = 1; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return 'EBD4A4';
                    }
                }
            }
        }
        else if (algo.algorithm === 'Modified Quick' && !algo.isSorted) {
            console.log("index= " + algo.indices[0]);
            if (algo.indices[0] === 1) {
                for (let i = 1; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return 'BAA1A7';
                    }
                }
            }
            else {
                for (let i = 0; i < algo.indices.length; i++) {
                    if (props.index === algo.indices[i]) {
                        return '112B3C';
                    }
                }
            }
            return 'F66B0E';
        }
        else {
            for (let i = 0; i < algo.indices.length; i++) {
                if (props.index === algo.indices[i]) {
                    return '112B3C';
                }
            }
            return 'F66B0E';
        }
    }




    const styles = {
        backgroundColor: `#${setColor()}`,
        height: isZero ? '5px' : `${getHeight()}px`,
        margin: '5px',
        width: '45px',
        transition: '1s height',
    }

    return (
        <div style={styles}>
        </div>
    )
}

export default Bars;