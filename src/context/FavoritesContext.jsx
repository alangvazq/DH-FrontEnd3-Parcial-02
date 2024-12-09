import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (favorite) => {
        console.log('addFavorite', favorite);
        
        setFavorites([...favorites, favorite]);
    };

    const removeFavorite = (id) => {
        setFavorites((prevState) => prevState.filter((item) => item.id !== id));
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);