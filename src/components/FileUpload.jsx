import React, { useRef, useContext } from 'react';
import { Button, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function FileUpload(props){
    var arr;
    const file= useRef(null);
    const handleFile = () => {
        file.current.files[0].arrayBuffer().then((buffer) => {
            const list = new TextDecoder('utf-8').decode(buffer);
            arr = list.split(' ').map(function(item) {
                return parseInt(item);
            });
        })
    }
    props.onHandle(10);
    
    return (
        <div>
            <Button variant='contained' component='label'>
                <input accept='.txt' multiple hidden type="file" ref={file} onChange={handleFile} />
                <Typography color='white'>
                    Upload
                </Typography>
                <FileUploadIcon />
            </Button>
        </div>
    );
}

export default FileUpload;