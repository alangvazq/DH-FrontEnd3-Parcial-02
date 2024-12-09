import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';

const Favorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    if (favorites.length === 0) {
        return <div className="text-center text-gray-500">No favorites selected.</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Favorites</h1>
            {favorites.map((favorite, index) => (
                <div key={favorite.id || index} className="mb-4 p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">{favorite.tail}</h2>
                    <img src={favorite.image} alt={favorite.name} className="w-full h-auto mt-2 mb-4" />
                    <button 
                        onClick={() => removeFavorite(favorite.id)} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Remove from Favorites
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Favorites;