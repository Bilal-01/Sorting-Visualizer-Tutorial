import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../css/complexity.css';
import AlgoContext from './AlgoContext';
import insertionImg from './../images/insertion.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const classes = {
    timeBtn: {
        background: '#112B3C',
        color: '#D3E4CD',
        padding: '10px 10px',
        borderRadius: '5px',
        marginRight: '2px',
        fontSize: '0.85rem',
        fontWeight: 'bolder',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",

        ':&hover' : {

        }
    
     },


    spaceBtn: {
        background: '#F66B0E',
        color: '#112B3C',
        padding: '10px 10px',
        borderRadius: '5px',
        marginRight: '2px',
        fontSize: '0.85rem',
        fontWeight: 'bolder',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    }
}

const imgStyle = {
  width: '400px',
  height: '300px'
}

export default function ComplexityModal(props) {
  const algo = useContext(AlgoContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let img;
  if(algo.algorithm === 'Insertion'){
    img = insertionImg;
  }

//{props.complexity === 'Time' ? '.time-btn' : '.space-btn'}
  return (
      <div>
        <Button style={props.complexity === 'Time' ? classes.timeBtn : classes.spaceBtn} onClick={handleOpen}>{props.complexity} Complexity</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {algo.alogrithm} Sort
          </Typography>
          <img src={img} alt="sorting image" style={imgStyle} />
        </Box>
      </Modal>
    </div>
  );
}