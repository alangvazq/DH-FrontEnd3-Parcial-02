import React from "react";
import styles from "./CharacterCard.module.css";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CharacterCard = ({ character, image, amiiboSeries, tail }) => {
    const { addFavorite } = useFavorites();
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/character/${tail}`);
    };

    const handleAddFavorite = () => {
        addFavorite({ character, image, amiiboSeries, tail });
        Swal.fire({
            title: 'Added to Favorites!',
            text: `${character} has been added to your favorites.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className={styles.card} style={{ cursor: 'pointer' }}>
            <img src={image} alt={character} />
            <h3>{character}</h3>
            <p>{amiiboSeries}</p>
            <button onClick={handleAddFavorite}>Add to Favorites</button>
            <button onClick={handleDetailsClick}>Details</button>
        </div>
    );
};

export default CharacterCard;