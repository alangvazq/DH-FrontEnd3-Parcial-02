import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../../components/card/CharacterCard";
import { getCharacters } from "../../utils/api";

const Product = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/character/${id}`);
    };

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const data = await getCharacters();
            setCharacters(data.amiibo);
        };

        fetchCharacters();
    }, []);

    return (
        <section>
            {characters.map(({ tail, character, image, amiiboSeries, price }) => (
                <CharacterCard
                    key={tail}
                    character={character}
                    price={price}
                    image={image}
                    onClick={() => handleClick(tail)}
                />
            ))}
        </section>
    );
};

export default Product;