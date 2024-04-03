import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PhotoAlbum from './pages/Photo-album';
import MyProfile from './pages/MyProfile';
//import Upcoming from './pages/Upcoming';
//import Goals from './pages/Goals';
//import Notifications from './pages/Notifications';
//import Partner from './pages/Partner';
//import Leaderboard from './pages/Leaderboard';
//import Settings from './pages/Settings';
import './App.css';
import { FavoriteImageProvider } from './context/FavouriteImageContext';

function App() {
  return (
    <FavoriteImageProvider> {/* Wrap Routes with FavoriteImageProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/photo-album" element={<PhotoAlbum />} />
          <Route path="/my-profile" element={<MyProfile />} />
        {/*<Route path="/upcoming" element={<Upcoming />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/settings" element={<Settings />} />
          */}
        </Routes>
      </Router>
    </FavoriteImageProvider>
  );
}

export default App;
