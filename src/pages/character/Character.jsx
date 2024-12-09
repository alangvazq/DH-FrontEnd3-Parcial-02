import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            <h1>Amiibo Characters</h1>
            {products.map((product) => (
                <div key={product.tail}>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} />
                </div>
            ))}
        </div>
    );
};

export default Character;