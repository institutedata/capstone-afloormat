import { render, screen, fireEvent } from '@testing-library/react';
import PhotoAlbum from './Photo-album';

describe('PhotoAlbum', () => {
    test('renders PhotoAlbum component', () => {
        render(<PhotoAlbum />);
        const photoAlbumElement = screen.getByText(/Photo Album/i);
        expect(photoAlbumElement).toBeInTheDocument();
    });

    test('displays search input and filter select', () => {
        render(<PhotoAlbum />);
        const searchInput = screen.getByPlaceholderText(/Search by caption.../i);
        const filterSelect = screen.getByLabelText(/All Labels/i);
        expect(searchInput).toBeInTheDocument();
        expect(filterSelect).toBeInTheDocument();
    });

    test('updates search term when input value changes', () => {
        render(<PhotoAlbum />);
        const searchInput = screen.getByPlaceholderText(/Search by caption.../i);
        fireEvent.change(searchInput, { target: { value: 'beach' } });
        expect(searchInput.value).toBe('beach');
    });

    test('updates selected label when filter select value changes', () => {
        render(<PhotoAlbum />);
        const filterSelect = screen.getByLabelText(/All Labels/i);
        fireEvent.change(filterSelect, { target: { value: 'vacation' } });
        expect(filterSelect.value).toBe('vacation');
    });

    test('displays photo gallery', () => {
        render(<PhotoAlbum />);
        const photoGalleryElement = screen.getByTestId('photo-gallery');
        expect(photoGalleryElement).toBeInTheDocument();
    });

    test('displays upload button', () => {
        render(<PhotoAlbum />);
        const uploadButtonElement = screen.getByTestId('upload-button');
        expect(uploadButtonElement).toBeInTheDocument();
    });
});