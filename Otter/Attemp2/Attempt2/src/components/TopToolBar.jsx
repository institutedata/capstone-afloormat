import React from 'react';

const Toolbar = () => {
    return (
        <div className="toolbar" style={{ width: '100%' }}>
            <button className="toolbar-button" style={{ width: '25%' }}>Home</button>
             <button className="toolbar-button" style={{ width: '30%' }}>Leaderboard</button>
             <button className="toolbar-button" style={{ width: '25%' }}>Things</button>
             <button className="toolbar-button" style={{ width: '20%' }}>Help</button>
        </div>
    );
};

export default Toolbar;