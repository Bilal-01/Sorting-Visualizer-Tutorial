import React, { useContext } from "react";
import AlgoContext from "./AlgoContext";
function ShowCount()
{
    const algo = useContext(AlgoContext);
    return (
        <div><h1>Numbers between  {algo.count[0]}  and {algo.count[1]}   are : {algo.count[2]} </h1></div>
    )
}

export default ShowCount;