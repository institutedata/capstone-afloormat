import React, { useState } from 'react';

const PhotoItem = ({ photo, updatePhoto }) => {
    const [editCaption, setEditCaption] = useState(photo.caption);
    const [newLabel, setNewLabel] = useState('');

    const handleCaptionChange = (e) => {
        setEditCaption(e.target.value);
    };

    const handleCaptionBlur = () => {
        updatePhoto(photo.id, editCaption, 'caption');
    };

    const handleNewLabelKeyDown = (e) => {
        if (e.key === 'Enter' && newLabel.trim()) {
            updatePhoto(photo.id, newLabel, 'label');
            setNewLabel(''); // Reset input after adding
        }
    };

    return (
        <div className="photo-item">
            <img src={photo.src} alt={editCaption} />
            <div className="input-box-gallery">
                <input 
                    className="input-box input"
                    value={editCaption}
                    onChange={handleCaptionChange}
                    onBlur={handleCaptionBlur}
                    placeholder="Caption"
                />
                <label> {/* No dynamic label text was given, consider adding if needed */}
                    Caption
                </label>
            </div>
            <div className="input-box-gallery">
                <input 
                    className="input-box input"
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                    onKeyDown={handleNewLabelKeyDown}
                    placeholder="Add label"
                />
                {/* Assuming label styling is not dynamically needed */}
            </div>
            <div className="labels-container">
                {photo.labels.map((label, index) => (
                    <span key={index} className="photo-label">{label}</span>
                ))}
            </div>
        </div>
    );
};

export default PhotoItem;
