import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, removeFromCart } from '../store/cart';
import { productCart } from '../Constants';

const CartItem = ({ product }) => {
    const cart = useSelector(store => store.cart.items);
    const { productId, quantity, price } = product;
    const [detail, setDetail] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const foundDetail = productCart.find(product => product.id === productId);
        setDetail(foundDetail || null);
    }, [productId]);

    const handleMinusQuantity = () => {
        if (quantity > 1) {
            dispatch(changeQuantity({ productId, quantity: quantity - 1, price }));
        } else {
            dispatch(removeFromCart({ productId }));
        }
    };

    const handlePlusQuantity = () => {
        dispatch(changeQuantity({ productId, quantity: quantity + 1, price }));
    };

    const handleRemoveItem = () => {
        dispatch(removeFromCart({ productId }));
    };

    if (!detail) {
        return <div className='p-2 text-white'>Product not found</div>;
    }

    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center bg-gray-800 text-white p-4 border-b border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
            <img src={detail.pic} alt={detail.name} className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg' />
            <div className='flex-1 ml-4 flex flex-col justify-between'>
                <div className='flex justify-between items-center mb-2'>
                    {console.log(console.log(cart)
                    )
                    }
                    <h3 className='text-lg font-semibold'>{detail.name}</h3>
                    <p className='text-xl font-bold text-green-500'>${(detail.price * quantity).toFixed(2)}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <button
                        className='bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition-colors duration-200'
                        onClick={handleMinusQuantity}
                    >
                        <span className='text-lg'>-</span>
                    </button>
                    <span className='text-lg font-medium'>{quantity}</span>
                    <button
                        className='bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition-colors duration-200'
                        onClick={handlePlusQuantity}
                    >
                        <span className='text-lg'>+</span>
                    </button>
                    <button
                        className='bg-red-600 text-white rounded-full p-2 hover:bg-red-500 transition-colors duration-200'
                        onClick={handleRemoveItem}
                    >
                        <span className='text-lg'>×</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
