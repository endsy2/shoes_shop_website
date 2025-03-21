import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleStatusTab } from '../../store/cart';
import { heart, heartFill } from '../../assets/index.js';
import { addToFavorite, removeFromFavorite } from '../../store/favorite';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

const DetailPic = ({ detail }) => {
    const url = 'http:/localhost/3000/upload/'
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const favorite = useSelector(store => store.favorite.favorite);

    const handleMinusQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
    const handlePlusQuantity = () => setQuantity(prev => prev + 1);

    const handleAddToCart = () => {
        if (detail) {
            dispatch(addToCart({ productId: detail.id, quantity, price: detail.productVariants[0].price }));
            dispatch(toggleStatusTab());
        }
    };

    const handleAddToFavorite = () => {
        if (detail) {
            if (favorite.findIndex(element => element.productId === detail.id) >= 0) {
                dispatch(removeFromFavorite({ productId: detail.id }));
            } else {
                dispatch(addToFavorite({ productId: detail.id }));
            }
        }
    };

    if (!detail) {
        return <p>Loading...</p>;
    }

    return (
        <section className='flex flex-wrap gap-10'>
            <section className='flex'>
                <div className='flex flex-col gap-5 mx-5 mt-2'>
                    {/* Product image gallery */}
                    {detail.productVariants.map((variant, index) => (
                        <div key={index} className='w-20'>
                            <img
                                src={variant.productimage[0].imageUrl}
                                alt={`Product image ${index + 1}`}
                                className='rounded-xl'
                            />
                        </div>
                    ))}
                </div>
                <section>
                    {/* Main product image */}
                    <div>
                        <img
                            src={url + detail.productVariants[0].productimage[0].imageUrl}
                            alt='Main product image'
                            className='rounded-xl'
                        />
                    </div>
                </section>
            </section>

            <div className='flex flex-col'>
                <section>
                    <h1 className='text-main dark:text-main-light font-bold text-4xl mb-5'>{detail.name}</h1>
                    <button
                        onClick={handleAddToFavorite}
                        className={`flex justify-center items-center bg-[white] p-3 px-6 gap-3 mb-5 rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${favorite.findIndex(element => element.productId === detail.id) >= 0
                            ? "border-red-500 border-2"
                            : "border-gray-300 border"}`}
                    >
                        <p className='text-2xl'>
                            {favorite.findIndex(element => element.productId === detail.id) >= 0
                                ? <MdFavorite className='text-red-500' />
                                : <MdOutlineFavoriteBorder />}
                        </p>
                        <p className='text-sm font-semibold text-black'>
                            {favorite.findIndex(element => element.productId === detail.id) >= 0
                                ? "Remove From Favorite"
                                : "Add to Favorite"}
                        </p>
                    </button>

                    {/* Product details */}
                    <p className='text-main dark:text-main-light mb-5 text-3xl'>${detail.productVariants[0].price}</p>
                    <p className='text-main dark:text-main-light mb-5 text-2xl'>Color: {detail.productVariants[0].color}</p>
                    <p className='text-main dark:text-main-light mb-5 text-2xl'>Size: {detail.productVariants[0].size}</p>
                    <p className='text-main dark:text-main-light mb-5 text-2xl'>Detail: {detail.Description}</p>

                    {/* Discount if available */}
                    {detail.productVariants[0].discount && (
                        <p className='text-main dark:text-main-light mb-5 text-2xl'>
                            Discount: {detail.productVariants[0].discount.value}% off
                        </p>
                    )}
                </section>

                {/* Quantity and Add to Cart buttons */}
                <section className='flex gap-5 items-center'>
                    <button className="blue-btn" onClick={handleMinusQuantity}>-</button>
                    <span className='text-black dark:text-main-light text-xl'>{quantity}</span>
                    <button className="blue-btn" onClick={handlePlusQuantity}>+</button>
                    <button className='blue-btn' onClick={handleAddToCart}>Add To Cart</button>
                </section>
            </div>
        </section>
    );
};

export default DetailPic;
