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
        { id: 10, src: 'https://picsum.photos/200/300?random=10', caption: 'Photo 10', labels: [] }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLabel, setSelectedLabel] = useState('');

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

    const filteredPhotos = photos.filter(photo => {
        const captionMatch = !searchTerm || photo.caption.toLowerCase().includes(searchTerm.toLowerCase());
        const labelMatch = !selectedLabel || photo.labels.includes(selectedLabel);
        return captionMatch && labelMatch;
    });

    const uniqueLabels = [...new Set(photos.flatMap(photo => photo.labels))];

    return (
        <div className="photo-album-container">
            <PlanningBar />
            <h2>Photo Album</h2>
            <h3>Browse and manage photos shared between you and "x"</h3>
            
            <div className="search-filter-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Search by caption..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginRight: '10px', flexGrow: 1 }}
                />
                <select
                    value={selectedLabel}
                    onChange={(e) => setSelectedLabel(e.target.value)}
                    style={{ marginLeft: '10px', flexGrow: 1 }}>
                    <option value="">All Labels</option>
                    {uniqueLabels.map(label => (
                        <option key={label} value={label}>{label}</option>
                    ))}
                </select>
            </div>

            <PhotoGallery photos={filteredPhotos} updatePhoto={updatePhoto} />
            <UploadButton onUpload={() => {/* Implement upload functionality here */}} />
            <ManagementBar />
        </div>
    );
};

export default PhotoAlbum;
