import React from 'react';

const PlanningBar = () => {
    return (
        <div className="toolbar toolbar-top"> {/* Added class for top positioning */}
            <button className="toolbar-button">Home</button>
            <button className="toolbar-button">Upcoming</button>
            <button className="toolbar-button">Goals</button>
            <button className="toolbar-button">Notifications</button>
        </div>
    );
};

const ManagementBar = () => {
    return (
        <div className="toolbar toolbar-bottom"> {/* Added class for bottom positioning */}
            <button className="toolbar-button">My Profile</button>
            <button className="toolbar-button">Partner</button>
            <button className="toolbar-button">Leaderboard</button>
            <button className="toolbar-button">Settings</button>
        </div>
    );
}

export { PlanningBar, ManagementBar };


//Home(Home page) - Notifications[Launch side bar to view quick information] - Upcoming(Dates) - Goals (Progress tracking and listing)
//My Profile - Us(Partner profile + management) + Leaderboard(Statistics) + Settings 