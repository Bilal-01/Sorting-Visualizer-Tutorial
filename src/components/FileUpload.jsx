import React, { useRef } from 'react';
import { Button, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function FileUpload(){
    
    const file= useRef(null);
    
    const handleFile = () => {
        file.current.files[0].arrayBuffer().then((buffer) => {
            const list = new TextDecoder('utf-8').decode(buffer)
            list.forEach()
        })
    }
    
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