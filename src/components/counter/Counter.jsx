import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAddCart = () => {
        setCount(count + 1);
    };

    const handleRemoveCart = () => {
        setCount(count - 1);
    };

    return (
        <>
        <button onClick={handleAddCart}>+</button>
        <span>{count}</span>
        <button onClick={handleRemoveCart}>-</button>
        </>
    );
};

export default Counter;
