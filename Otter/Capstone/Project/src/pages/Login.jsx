import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.

        // Simple validation for email and password.
        if (email.includes('@') && password.length >= 8) {
            // Navigate to the Home page upon successful validation.
            navigate('/home');
        } else {
            // Alert or show an error message for invalid inputs.
            alert('Invalid email or password');
        }
    };

    return (
        <>
            <div className="blob"></div> {/* The blob at the top */}
            <h2>Login</h2> {/* The "Login" text */}
            <form onSubmit={handleSubmit} className="wrapper">
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="input-field" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="input-field" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;
