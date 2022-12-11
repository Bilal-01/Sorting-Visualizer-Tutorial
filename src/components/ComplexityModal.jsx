import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../css/complexity.css';
import AlgoContext from './AlgoContext';
import bubbleImg from './../images/bubble.jpg'
import S_bubbleImg from './../images/S_bubble.jpg'
import insertionImg from './../images/insertion.jpg'
import S_insertionImg from './../images/S_insertion.jpg'
import quickImg from './../images/quick.jpg'
import S_quickImg from './../images/S_quick.jpg'
import heapImg from './../images/heap.jpg'
import S_heapImg from './../images/S_heap.jpg'
import bucketImg from './../images/bucket.jpg'
import S_bucketImg from './../images/S_bucket.jpg'
import mergeImg from './../images/merge.jpg'
import S_mergeImg from './../images/S_merge.jpg'
import countImg from './../images/count.jpg'
import S_countImg from './../images/S_count.jpg'
import radixImg from './../images/radix.jpg'
import S_radixImg from './../images/S_radix.jpg'
import modifiedCountImg from './../images/modified_count.jpg'
import S_modifiedCountImg from './../images/S_modified_count.jpg'
import modifiedQuickImg from './../images/modified_quick.jpg'
import S_modifiedQuickImg from './../images/S_modified_quick.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 500,
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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  height: '400px'
}

export default function ComplexityModal(props) {
  const algo = useContext(AlgoContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let img, imgS;
  if(algo.algorithm === 'Bubble'){
    img = bubbleImg;
    imgS = S_bubbleImg;
  }
  if(algo.algorithm === 'Insertion'){
    img = insertionImg;
    imgS = S_insertionImg;
  }
  if(algo.algorithm === 'Quick'){
    img = quickImg;
    imgS = S_quickImg;
  }
  if(algo.algorithm === 'Heap'){
    img = heapImg;
    imgS = S_heapImg;
  }
  if(algo.algorithm === 'Bucket'){
    img = bucketImg;
    imgS = S_bucketImg;
  }
  if(algo.algorithm === 'Merge'){
    img = mergeImg;
    imgS = S_mergeImg;
  }
  if(algo.algorithm === 'Counting'){
    img = countImg;
    imgS = S_countImg
  }
  if(algo.algorithm === 'Radix'){
    img = radixImg;
    imgS = S_radixImg;
  }
  if (algo.algorithm === 'Modified Count'){
    img = modifiedCountImg;
    imgS = S_modifiedCountImg;
  }
  if (algo.algorithm === 'Modified Quick'){
    imgS = S_modifiedQuickImg;
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
            {algo.algorithm} Sort
          </Typography>
          <img src = {props.complexity === 'Time' ? img: imgS}  alt="sorting image" style={imgStyle} />
        </Box>
      </Modal>
    </div>
  );
}