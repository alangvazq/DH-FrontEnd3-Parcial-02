import React from "react";
import styles from "./CharacterCard.module.css";
import Counter from "../counter/Counter";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character, image, amiiboSeries, tail }) => {
    const { addFavorite } = useFavorites();
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/character/${tail}`);
    };

    return (
        <div style={{ cursor: 'pointer' }}>
            <img src={image} alt={character} />
            <h3>{character}</h3>
            <p>{amiiboSeries}</p>
            <button onClick={() => addFavorite({ character, image, amiiboSeries, tail })}>Add to Favorites</button>
            <button onClick={handleDetailsClick}>Detalles</button>
        </div>
    );
};

export default CharacterCard;