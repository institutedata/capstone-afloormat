import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';
import { FavoriteImageProvider } from './context/FavouriteImageContext.jsx';
import PhotoAlbum from './pages/Photo-album';
import MyProfile from './pages/MyProfile.jsx';

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
          {/* Add additional routes as needed */}
        </Routes>
      </Router>
    </FavoriteImageProvider>
  );
}

export default App;
