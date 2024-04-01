// components/PhotoGallery.jsx
import React from 'react';
import PhotoItem from './PhotoItem';

const PhotoGallery = ({ photos, updatePhoto }) => {
    return (
        <div className="wrappergallery">
            <div className="photo-grid">
                {photos.map((photo) => (
                    <PhotoItem key={photo.id} photo={photo} updatePhoto={updatePhoto} />
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
