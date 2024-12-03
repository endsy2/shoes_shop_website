import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleStatusTab } from '../../store/cart';
import { heart, heartFill } from '../../assets/index.js';
import { addtofavorite, removeFromFavorite } from '../../store/favorite';


const DetailPic = ({ detail }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const favorite = useSelector(store => store.favorite.favorite);

    const handleMinusQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
    const handlePlusQuantity = () => setQuantity((prev) => prev + 1);

    const handleAddToCart = () => {
        if (detail) {
            dispatch(addToCart({ productId: detail.id, quantity }));
            dispatch(toggleStatusTab());
        }
    };

    const handleAddToFavorite = () => {
        if (detail) {
            if (favorite.findIndex((element) => element === detail.id) >= 0) {
                dispatch(removeFromFavorite({ productId: detail.id }));
            } else {
                dispatch(addtofavorite({ productId: detail.id }));
            }
        }
    };

    if (!detail) {
        return <p>Loading...</p>;
    }

    return (
        <section className='flex flex-wrap gap-10'>
            <section className='flex'>
                {console.log(favorite)
                }
                <div className='flex flex-col gap-5 mx-5 mt-2'>
                    {detail.picDetail.map((element, index) => (
                        <div key={index} className='w-20'>
                            <img src={element} alt={`Product image ${index + 1}`} className='rounded-xl' />
                        </div>
                    ))}
                </div>
                <section>
                    <div>
                        <img src={detail?.pic} alt="Main product image" className='rounded-xl' />
                    </div>
                </section>
            </section>
            <div className='flex flex-col'>
                <section>
                    <h1 className='text-main font-bold text-4xl mb-5'>{detail?.name}</h1>
                    <button onClick={handleAddToFavorite}>
                        <img
                            src={favorite.findIndex((element) => element === detail.id) >= 0 ? heartFill : heart}
                            alt="Favorite"
                            className='w-10 my-10'
                        />
                    </button>
                    <p className='text-main mb-5 text-3xl'>${detail?.price}</p>
                    <p className='text-main mb-5 text-2xl'>Color: {detail?.color}</p>
                    <p className='text-main mb-5 text-2xl'>Size: {detail?.size}</p>
                    <p className='text-main mb-5 text-2xl'>Detail: {detail?.description}</p>
                </section>
                <section className='flex gap-5 items-center'>
                    <button className="blue-btn" onClick={handleMinusQuantity}>-</button>
                    <span className='text-[white]'>{quantity}</span>
                    <button className="blue-btn" onClick={handlePlusQuantity}>+</button>
                    <button className='blue-btn' onClick={handleAddToCart}>Add To Cart</button>
                </section>
            </div>
        </section>
    );
};

export default DetailPic;
