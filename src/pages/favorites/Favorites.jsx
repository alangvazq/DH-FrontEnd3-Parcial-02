import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import styles from './Favorites.module.css';

const Favorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    if (favorites.length === 0) {
        return <div className="text-center text-gray-500"><h1>No favorites selected.</h1></div>;
    }

    return (
        <div className={styles.container}>
            {favorites.map((favorite, index) => (
                <div key={favorite.tail || index} className={styles.card}>
                    <h2>{favorite.character}</h2>
                    <img src={favorite.image} alt={favorite.character} />
                    <button 
                        onClick={() => removeFavorite(favorite.tail)}
                    >
                        Remove from Favorites
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Favorites;