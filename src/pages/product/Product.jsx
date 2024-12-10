import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../../components/card/CharacterCard";
import { getCharacters } from "../../utils/api";
import styles from "./Product.module.css";

const Product = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/character/${id}`);
    };

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const data = await getCharacters();
            setCharacters(data);
        };

        fetchCharacters();
    }, []);

    return (
        <section className={styles.section}>
            {characters.map(({ tail, character, image, amiiboSeries }) => (
                <CharacterCard
                    key={tail}
                    character={character}
                    image={image}
                    amiiboSeries={amiiboSeries}
                    tail={tail}
                    onClick={() => handleClick(tail)}
                />
            ))}
        </section>
    );
};

export default Product;