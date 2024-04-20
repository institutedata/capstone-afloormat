import React, { useEffect, useState } from 'react';
import { PlanningBar, ManagementBar } from "../components/Toolbar.jsx";
import PhotoGallery from '../components/PhotoGallery';
import UploadButton from '../components/UploadButton';

const PhotoAlbum = () => {
    // Initialize photos state with static images
    const [photos, setPhotos] = useState([
        { id: '1', src: 'https://picsum.photos/200/300?random=1', caption: 'Photo 1', labels: [] },
        { id: '2', src: 'https://picsum.photos/200/300?random=2', caption: 'Photo 2', labels: [] },
        { id: '3', src: 'https://picsum.photos/200/300?random=3', caption: 'Photo 3', labels: [] },
        { id: '4', src: 'https://picsum.photos/200/300?random=4', caption: 'Photo 4', labels: [] },
        { id: '5', src: 'https://picsum.photos/200/300?random=5', caption: 'Photo 5', labels: [] },
        { id: '6', src: 'https://picsum.photos/200/300?random=6', caption: 'Photo 6', labels: [] },
        { id: '7', src: 'https://picsum.photos/200/300?random=7', caption: 'Photo 7', labels: [] },
        { id: '8', src: 'https://picsum.photos/200/300?random=8', caption: 'Photo 8', labels: [] },
        { id: '9', src: 'https://picsum.photos/200/300?random=9', caption: 'Photo 9', labels: [] },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLabel, setSelectedLabel] = useState('');

    // Fetch photos from the backend and add them to the state
    const fetchPhotos = async () => {
        try {
            const response = await fetch('http://localhost:3000/photos');
            if (!response.ok) throw new Error('Failed to fetch photos');
            const data = await response.json();
            setPhotos(currentPhotos => [
                ...currentPhotos,
                ...data.map(photo => ({
                    id: photo._id, // Use MongoDB _id as the unique id
                    src: `http://localhost:3000${photo.src}`, // Construct the full URL
                    caption: photo.caption,
                    labels: photo.labels,
                }))
            ]);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    // Handle file upload
    const handleUpload = (file) => {
        const formData = new FormData();
        formData.append('photo', file);
        fetch('http://localhost:3000/photos/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            const newPhoto = {
                id: Date.now().toString(),
                src: `http://localhost:3000${data.src}`,
                caption: data.caption || '',
                labels: data.labels || [],
            };
            setPhotos(currentPhotos => [...currentPhotos, newPhoto]);
        })
        .catch(error => console.error('Error uploading photo:', error));
    };

    const updatePhoto = (id, newValue, field) => {
        setPhotos(photos.map(photo => {
            if (photo.id === id) {
                return { ...photo, [field]: newValue };
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
            <h3>Browse and manage photos some of your special moments</h3>
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
            <UploadButton onUpload={handleUpload} />
            <ManagementBar />
        </div>
    );
};

export default PhotoAlbum;
