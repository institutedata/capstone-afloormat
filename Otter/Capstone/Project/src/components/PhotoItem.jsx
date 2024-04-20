import React, { useState } from 'react';

const PhotoItem = ({ photo, updatePhoto, onImageClick }) => {
    const [editCaption, setEditCaption] = useState(photo.caption);
    const [newLabel, setNewLabel] = useState('');

    const handleCaptionChange = (e) => {
        e.stopPropagation(); // Stop the click event from bubbling up
        setEditCaption(e.target.value);
    };

    const handleCaptionBlur = (e) => {
        e.stopPropagation(); // Stop the click event from bubbling up
        updatePhoto(photo.id, editCaption, 'caption');
    };

    const handleNewLabelKeyDown = (e) => {
        e.stopPropagation(); // Stop the click event from bubbling up
        if (e.key === 'Enter' && newLabel.trim()) {
            updatePhoto(photo.id, newLabel, 'label');
            setNewLabel(''); // Reset input after adding
        }
    };

    return (
        <div className="photo-item">
            <img src={photo.src} alt={editCaption} onClick={() => onImageClick()} />
            <p>{photo.caption}</p> {/* Display Caption */}
            <div className="input-box-gallery">
                <input 
                    value={editCaption}
                    onChange={handleCaptionChange}
                    onBlur={handleCaptionBlur}
                    placeholder="Edit Caption"
                    onClick={e => e.stopPropagation()} // Stop the click event from bubbling up
                />
            </div>
            <div className="input-box-gallery">
                <input 
                    value={newLabel}
                    onChange={(e) => {e.stopPropagation(); setNewLabel(e.target.value);}}
                    onKeyDown={handleNewLabelKeyDown}
                    placeholder="Add label"
                    onClick={e => e.stopPropagation()} // Stop the click event from bubbling up
                />
            </div>
            <div className="labels-container" onClick={e => e.stopPropagation()}>
                {photo.labels.map((label, index) => (
                    <span key={index} className="photo-label">{label}</span>
                ))}
            </div>
        </div>
    );
};

export default PhotoItem;
