import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlanningBar, ManagementBar } from '../components/Toolbar.jsx';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <PlanningBar />
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
                {/* Image Container */}
                <div style={{ width: '232px', maxWidth: '100%', height: '225px', border: '2px solid black', marginBottom: '20px' }}>
                    <img src="../images/cody and chicken joe.jpg" alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                {/* Photo Album Button */}
                <div className="wrapper">
                    <button onClick={() => navigate('/photo-album')} style={{ padding: '10px 20px' }}>Photo Album</button>
                </div>
                
                {/* The Story of Us Container */}
                <div className="wrapper" onClick={() => navigate('/milestones')} style={{ cursor: 'pointer', padding: '20px', border: '2px solid black', textAlign: 'center' }}>
                    The Story of Us
                </div>

                {/* Games */}
                <div className="wrapper" onClick={() => navigate('/games')} style={{ cursor: 'pointer', padding: '20px', border: '2px solid black', textAlign: 'center' }}>
                    Games
                </div>
                
                {/* Statistics Widget Placeholder */}
                <div className="wrapper" style={{ width: '100%', maxWidth: '232px', height: '225px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid black' }}>
                    <p>Statistics Widget</p>
                    {/* Place your Pie Chart or any other widget inside here */}
                </div>
            </div>
            <ManagementBar />
        </div>
    );
};

export default Home;


//Turn Image Container item into variable so users can update it.