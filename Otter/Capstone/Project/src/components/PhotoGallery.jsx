import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// Assuming PhotoItem is adjusted or replaced to serve as clickable thumbnails
import PhotoItem from './PhotoItem';

const PhotoGallery = ({ photos }) => {
    const [index, setIndex] = useState(-1); // Index for the current lightbox slide

    // Convert your photos to slides for the lightbox
    const slides = photos.map(photo => ({
        src: photo.src,
        // Add more properties as needed for captions, etc.
        title: photo.caption, // Assuming you want to use the caption as a title
        // description: "optional description", // Uncomment if you have descriptions
    }));

    return (
        <div className="wrappergallery">
            <div className="photo-grid">
                {photos.map((photo, idx) => (
                    <div key={photo.id} onClick={() => setIndex(idx)}>
                        <PhotoItem photo={photo} /> {/* Adjust PhotoItem or replace with suitable thumbnail component */}
                    </div>
                ))}
            </div>
            <Lightbox
                plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
                captions={{
                    showToggle: true,
                    descriptionTextAlign: 'end',
                }}
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
            />
        </div>
    );
};

export default PhotoGallery;
