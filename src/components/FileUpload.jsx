import React, { useRef, useContext } from 'react';
import { Button, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AlgoContext from './AlgoContext';

function FileUpload(props){
    const algo = useContext(AlgoContext);
    const file= useRef(null);
    const handleFile = () => {
        file.current.files[0].arrayBuffer().then((buffer) => {
            const list = new TextDecoder('utf-8').decode(buffer);
            var arr = list.split(' ').map(function(item) {
                return parseInt(item);
            });
            algo.setArr(arr);
            algo.setInputArr(arr);
        })
    }
    
    return (
        <div>
            <Button variant='contained' component='label'>
                <input accept='.txt' multiple hidden type="file" ref={file} onChange={handleFile} />
                <Typography color='white'>
                    Choose File
                </Typography>
                <FileUploadIcon />
            </Button>
        </div>
    );
}

export default FileUpload;
