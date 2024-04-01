import React from 'react';

const UploadButton = ({ onUpload }) => {
    return (
        <button onClick={onUpload}>Upload More Photos</button>
    );
};

export default UploadButton;
