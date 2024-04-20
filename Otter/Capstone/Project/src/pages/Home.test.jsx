import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Home', () => {
  beforeEach(() => {
    useNavigate.mockClear();
  });

  test('renders Home component', () => {
    render(<Home />);
    const photoAlbumButton = screen.getByText(/Photo Album/i);
    const storyOfUsContainer = screen.getByText(/The Story of Us/i);
    const statisticsWidget = screen.getByText(/Statistics Widget/i);
    const gamesContainer = screen.getByText(/Games/i);

    expect(photoAlbumButton).toBeInTheDocument();
    expect(storyOfUsContainer).toBeInTheDocument();
    expect(statisticsWidget).toBeInTheDocument();
    expect(gamesContainer).toBeInTheDocument();
  });

  test('navigates to Photo Album page on button click', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Home />);
    const photoAlbumButton = screen.getByText(/Photo Album/i);
    fireEvent.click(photoAlbumButton);

    expect(navigate).toHaveBeenCalledWith('/photo-album');
  });

  test('navigates to Milestones page on The Story of Us container click', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Home />);
    const storyOfUsContainer = screen.getByText(/The Story of Us/i);
    fireEvent.click(storyOfUsContainer);

    expect(navigate).toHaveBeenCalledWith('/milestones');
  });

  test('navigates to Games page on Games container click', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Home />);
    const gamesContainer = screen.getByText(/Games/i);
    fireEvent.click(gamesContainer);

    expect(navigate).toHaveBeenCalledWith('/games');
  });
});