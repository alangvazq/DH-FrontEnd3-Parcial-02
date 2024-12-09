import React from "react";
import styles from "./CharacterCard.module.css";
import Counter from "../counter/Counter";
import { useEffect } from "react";

const CharacterCard = ({character, image, amiiboSeries, price}) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.titleCard}>{character}</h2>
            <img src={image} alt={amiiboSeries} />
            <p>Precio {price}</p>
            <Counter />
        </div>
    );
};

export default CharacterCard;
