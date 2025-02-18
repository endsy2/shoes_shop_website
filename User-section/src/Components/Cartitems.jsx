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
        <div className='relative flex flex-col sm:flex-row items-start sm:items-center dark:bg-gray-800 bg-gray-50 border-2  text-white p-4 border-b border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
            <img src={detail.pic} alt={detail.name} className='w-20 h-32 sm:w-24 sm:h-36 object-contain ' />
            <div className='flex-1 ml-4 flex flex-col justify-between'>
                <div className='flex flex-col '>
                    <h3 className='text-lg font-semibold text-primary-600 hover:underline'>{detail.name}</h3>
                    <p className='text-lg font-semibold text-primary-600 '>Color:{detail.color}</p>
                    <p className='text-lg font-semibold text-primary-600 '>Size:{detail.size}</p>
                </div>
                <div className='flex gap-5 mt-3'>
                    <div className='grid grid-cols-3 w-36 items-center justify-center border-2 border-lightGray gap-3'>
                        <button
                            className='bg-gray-700 text-white  p-1 hover:bg-gray-600 transition-colors duration-200'
                            onClick={handleMinusQuantity}
                        >
                            <span className='text-lg'>-</span>
                        </button>
                        <span className='text-lg font-medium text-primary-600 text-center'>{quantity}</span>
                        <button
                            className='bg-gray-700 text-white  p-1 hover:bg-gray-600 transition-colors duration-200'
                            onClick={handlePlusQuantity}
                        >
                            <span className='text-lg'>+</span>
                        </button>

                    </div>
                    <div>
                        <p className='text-xl font-bold dark:text-green-500 text-primary-600'>${(detail.price * quantity).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <button
                className="absolute top-2 right-2 flex justify-center items-center text-white w-10 h-10  dark:hover:bg-red-500 hover:bg-primary-600 rounded-full transition-colors duration-200"
                onClick={handleRemoveItem}
            >
                <span className="text-xl text-black font-bold">×</span>
            </button>
        </div>
    );
};

export default CartItem;
