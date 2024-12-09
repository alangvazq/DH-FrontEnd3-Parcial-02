import React from "react";
import styles from "./CharacterCard.module.css";
import Counter from "../counter/Counter";
import { useEffect } from "react";

const CharacterCard = ({ character, price, image, onClick }) => {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={image} alt={character} />
            <h3>{character}</h3>
            <p>{price}</p>
        </div>
    );
};

export default CharacterCard;
