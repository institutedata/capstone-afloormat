import React, { createContext, useContext, useState } from 'react';

const FavoriteImageContext = createContext();

export const useFavoriteImage = () => useContext(FavoriteImageContext);

export const FavoriteImageProvider = ({ children }) => {
    const [favoriteImage, setFavoriteImage] = useState(null);

    return (
        <FavoriteImageContext.Provider value={{ favoriteImage, setFavoriteImage }}>
            {children}
        </FavoriteImageContext.Provider>
    );
};
