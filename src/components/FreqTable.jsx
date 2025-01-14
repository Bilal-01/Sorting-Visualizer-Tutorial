import React,{useContext, useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AlgoContext from './AlgoContext';


function FreqTable(){

  const algo = useContext(AlgoContext);

  const [rows,setRow] = useState([...algo.freq]);
  useEffect(() => {
    let arr = [...algo.freq];
    setRow(arr);
  }, [algo.freq])



  return (
    <TableContainer component={Paper} sx={{ width: '50%', marginLeft: '80px', marginTop:'5px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell align="right"><h3>Index</h3></TableCell>
            <TableCell align="right">0&nbsp;</TableCell>
            <TableCell align="right">1&nbsp;</TableCell>
            <TableCell align="right">2&nbsp;</TableCell>
            <TableCell align="right">3&nbsp;</TableCell>
            <TableCell align="right">4&nbsp;</TableCell>
            <TableCell align="right">5&nbsp;</TableCell>
            <TableCell align="right">6&nbsp;</TableCell>
            <TableCell align="right">7&nbsp;</TableCell>
            <TableCell align="right">8&nbsp;</TableCell>
            <TableCell align="right">9&nbsp;</TableCell>
            <TableCell align="right">10&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableCell align="right"><h3>Frequency</h3></TableCell>
          {rows.map((row, i) => (
              <TableCell key={i} align="right" sx={{fontSize: '1.5rem'}}>{row}&nbsp;</TableCell>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FreqTable;