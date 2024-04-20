import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Login', () => {
    beforeEach(() => {
        useNavigate.mockClear();
    });

    test('renders Login component', () => {
        render(<Login />);
        const loginElement = screen.getByText(/Login/i);
        expect(loginElement).toBeInTheDocument();
    });

    test('updates email state when input value changes', () => {
        render(<Login />);
        const emailInput = screen.getByPlaceholderText(/Email/i);
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        expect(emailInput.value).toBe('test@example.com');
    });

    test('updates password state when input value changes', () => {
        render(<Login />);
        const passwordInput = screen.getByPlaceholderText(/Password/i);
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput.value).toBe('password123');
    });

    test('navigates to Home page on form submission with valid inputs', () => {
        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);

        render(<Login />);
        const emailInput = screen.getByPlaceholderText(/Email/i);
        const passwordInput = screen.getByPlaceholderText(/Password/i);
        const loginButton = screen.getByText(/Login/i);

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(loginButton);

        expect(navigate).toHaveBeenCalledWith('/home');
    });

    test('shows error message for invalid inputs', () => {
        render(<Login />);
        const emailInput = screen.getByPlaceholderText(/Email/i);
        const passwordInput = screen.getByPlaceholderText(/Password/i);
        const loginButton = screen.getByText(/Login/i);

        fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
        fireEvent.change(passwordInput, { target: { value: 'short' } });
        fireEvent.click(loginButton);

        const errorMessage = screen.getByText(/Invalid email or password/i);
        expect(errorMessage).toBeInTheDocument();
    });
});