import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Character.module.css';

const Character = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?tail=${id}`);
                const data = await response.json();
                setProducts(data.amiibo);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [id]);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h1>Amiibo Characters</h1>
            {products.map((product) => (
                <div key={product.tail} className={styles.card}>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} />
                    <p>{product.amiiboSeries}</p>
                </div>
            ))}
        </div>
    );
};

export default Character;