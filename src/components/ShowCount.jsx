import { width } from "@mui/system";
import React, { useContext } from "react";
import AlgoContext from "./AlgoContext";
function ShowCount()
{
    const algo = useContext(AlgoContext);
    const styles = {
        fontWeight: 'lighter',
        fontSize: '3rem',
        width: '50%',
        margin: '10px 20px'
    }
    return (
        <div style={styles}>
            Numbers between  {algo.count[0]}  and {algo.count[1]}   are : {algo.count[2]}
        </div>
    )
}

export default ShowCount;