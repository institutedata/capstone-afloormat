import React from 'react';
import Toolbar from '../components/TopToolBar';
import ToolbarBottom from '../components/BottomToolBar';
import FavouritesDD from '../components/FavouritesDD';
import FavCard from '../components/FavCard';

const FavouritesPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between' }}>
      <Toolbar position="top" />
      <FavouritesDD style={{ marginTop: '20px' }} position="top" />
      <FavCard />
      <ToolbarBottom position="bottom" />
    </div>
  );
};

export default FavouritesPage;