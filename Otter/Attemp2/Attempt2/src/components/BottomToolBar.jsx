import React from 'react';

const ToolbarBottom = () => {
    return (
        <div className="toolbar" style={{ width: '100%' }}>
            <button className="toolbar-button" style={{ width: '30%' }}>My Profile</button>
            <button className="toolbar-button" style={{ width: '30%' }}>Messages</button>
            <button className="toolbar-button" style={{ width: '15%' }}>Us</button>
            <button className="toolbar-button" style={{ width: '25%' }}>Settings</button>
        </div>
    );
};

export default ToolbarBottom;