import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { productCart } from '../Constants';

const Checkout = () => {
    const [data, setData] = useState([]);
    // Get the cart items from the Redux store
    const cart = useSelector((store) => store.cart.items); // Assuming `cart.items` contains an array of product objects

    // Filter the products that are in the cart
    useEffect(() => {
        const items = productCart.filter((product) =>
            cart.some((element) => element.productId === product.id)
        );
        console.log(items);

        setData(items); // Set the entire array at once
    }, [cart]);

    return (
        <div>
            {data.map((product) => (
                <div key={product.id} className="border p-4 mb-4 rounded shadow">
                    <h3 className="text-lg font-semibold text[white]">{product.name}</h3>
                    <p>Price: ${product.id}</p>
                    <p>Color: {product.color}</p>
                    <p>Color: {product.color}</p>
                </div>
            ))}
        </div>
    );
};

export default Checkout;
