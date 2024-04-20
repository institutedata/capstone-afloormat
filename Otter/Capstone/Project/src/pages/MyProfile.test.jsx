import { render, screen } from '@testing-library/react';
import MyProfile from './MyProfile';

describe('MyProfile', () => {
    test('renders MyProfile component', () => {
        render(<MyProfile />);
        const myProfileElement = screen.getByText(/About Me/i);
        expect(myProfileElement).toBeInTheDocument();
    });

    test('displays input fields', () => {
        render(<MyProfile />);
        const input1 = screen.getByPlaceholderText(/1/i);
        const input2 = screen.getByPlaceholderText(/2/i);
        const input3 = screen.getByPlaceholderText(/3/i);
        expect(input1).toBeInTheDocument();
        expect(input2).toBeInTheDocument();
        expect(input3).toBeInTheDocument();
    });

    // Add more tests for additional input fields here

    // Add more tests for other components and functionality here
});