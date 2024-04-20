import React from 'react';
import Toolbar from '../components/TopToolBar';
import NavigationList from '../components/NavigationList';
import PartnerProfileImg from '../components/PartnerProfileImg';
import ToolbarBottom from '../components/BottomToolBar';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Toolbar position="top" />
            <PartnerProfileImg />
            <NavigationList />
            <ToolbarBottom position="bottom" />
        </div>
    );
};

export default Home;