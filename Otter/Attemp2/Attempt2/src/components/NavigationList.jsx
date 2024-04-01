import React from 'react';
import { Link } from 'react-router-dom';

const NavigationList = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/favorites">Favorites</Link>
            </li>
            <li>
                <Link to="/signin">SignIn</Link>
            </li>
            <li>
                <Link to="/signup">SignUp</Link>
            </li>
        </ul>
    );
};

export default NavigationList;