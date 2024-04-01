import React, { useState } from 'react';
import { PlanningBar, ManagementBar } from "../components/Toolbar.jsx";
import PhotoGallery from '../components/PhotoGallery';
import UploadButton from '../components/UploadButton';

const PhotoAlbum = () => {
    const [photos, setPhotos] = useState([
        { id: 1, src: 'https://picsum.photos/200/300?random=1', caption: 'Photo 1', labels: [] },
        { id: 2, src: 'https://picsum.photos/200/300?random=2', caption: 'Photo 2', labels: [] },
        { id: 3, src: 'https://picsum.photos/200/300?random=3', caption: 'Photo 3', labels: [] },
        { id: 4, src: 'https://picsum.photos/200/300?random=4', caption: 'Photo 4', labels: [] },
        { id: 5, src: 'https://picsum.photos/200/300?random=5', caption: 'Photo 5', labels: [] },
        { id: 6, src: 'https://picsum.photos/200/300?random=6', caption: 'Photo 6', labels: [] },
        { id: 7, src: 'https://picsum.photos/200/300?random=7', caption: 'Photo 7', labels: [] },
        { id: 8, src: 'https://picsum.photos/200/300?random=8', caption: 'Photo 8', labels: [] },
        { id: 9, src: 'https://picsum.photos/200/300?random=9', caption: 'Photo 9', labels: [] },
        { id: 10, src: 'https://picsum.photos/200/300?random=10', caption: 'Photo 10', labels: [] },
        // Additional photos can be initialized here
    ]);

    // Function to update photo's caption or add a new label
    const updatePhoto = (id, newValue, field) => {
        setPhotos(photos.map(photo => {
            if (photo.id === id) {
                if (field === 'caption') {
                    return { ...photo, caption: newValue };
                } else if (field === 'label') {
                    // Ensure no duplicate labels are added
                    const labelsSet = new Set([...photo.labels, newValue]);
                    return { ...photo, labels: Array.from(labelsSet) };
                }
            }
            return photo;
        }));
    };

    return (
        <div className="photo-album-container">
            <PlanningBar />
            <h2>Our Photo Album</h2>
            <h3>Browse and manage photos shared between you and "x"</h3> {/* Replace "x" with partner's name variable */}
            <PhotoGallery photos={photos} updatePhoto={updatePhoto} />
            <UploadButton onUpload={() => {/* Implement upload functionality */}} />
            <ManagementBar />
        </div>
    );
};

export default PhotoAlbum;
