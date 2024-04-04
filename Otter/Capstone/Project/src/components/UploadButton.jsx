import React from 'react';

const UploadButton = ({ onUpload }) => {
    // Function to trigger the file input when the button is clicked
    const triggerFileInput = () => {
        document.getElementById('file-upload').click();
    };

    // Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && onUpload) {
            onUpload(file);
        }
    };

    return (
        <div>
            <input
                type="file"
                id="file-upload"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <button onClick={triggerFileInput}>Upload Photo</button>
        </div>
    );
};

export default UploadButton;
