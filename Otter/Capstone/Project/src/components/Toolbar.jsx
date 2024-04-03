import React from 'react';
import { useNavigate } from 'react-router-dom';

// Planning Bar
const PlanningBar = () => {
    const navigate = useNavigate();
    
    return (
        <div className="toolbar toolbar-top">
            <button className="toolbar-button" onClick={() => navigate('/home')}>Home</button>
            <button className="toolbar-button" onClick={() => navigate('/upcoming')}>Upcoming</button>
            <button className="toolbar-button" onClick={() => navigate('/goals')}>Goals</button>
            <button className="toolbar-button" onClick={() => navigate('/notifications')}>Notifications</button>
        </div>
    );
};

// Management Bar
const ManagementBar = () => {
    const navigate = useNavigate();
    
    return (
        <div className="toolbar toolbar-bottom">
            <button className="toolbar-button" onClick={() => navigate('/my-profile')}>My Profile</button>
            <button className="toolbar-button" onClick={() => navigate('/partner')}>Partner</button>
            <button className="toolbar-button" onClick={() => navigate('/leaderboard')}>Leaderboard</button>
            <button className="toolbar-button" onClick={() => navigate('/settings')}>Settings</button>
        </div>
    );
}

export { PlanningBar, ManagementBar };
