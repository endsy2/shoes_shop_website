import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';

const DetailPic = ({ props }) => {
    const { detail } = props;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    };

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (detail) {
            dispatch(addToCart({
                productId: detail.id,
                quantity: quantity
            }));
        }
    };

    if (!detail) {
        return <p>Loading...</p>; // Loading state if `detail` is null or undefined
    }

    return (
        <section className='flex gap-20'>
            <section className='flex'>
                {/* Display images from `detail.picDetail` array */}
                <div className='flex flex-col gap-5 mx-5 mt-2'>
                    {detail.picDetail && detail.picDetail.map((element, index) => (
                        <div key={index} className='w-20'>
                            <img src={element} alt={`Product image ${index + 1}`} className='rounded-xl' />
                        </div>
                    ))}
                </div>

                {/* Optional section for the main product image */}
                <section>
                    <div>
                        <img src={detail.pic} alt="Main product image" className='rounded-xl' />
                    </div>
                </section>
            </section>
            <div className='flex flex-col'>
                <section>
                    <h1 className='text-main font-bold text-4xl mb-5'>{detail.name}</h1>
                    <p className='text-main mb-5 text-3xl'>${detail.price}</p>
                    <p className='text-main mb-5 text-2xl'>Color: {detail.color}</p>
                    <p className='text-main mb-5 text-2xl'>Size: {detail.size}</p>
                    <p className='text-main mb-5 text-2xl'>Detail: {detail.description}</p>
                </section>
                <section className='flex gap-16'>
                    <button className='blue-btn' onClick={handleAddToCart}>Add To Cart</button>
                    <button className='white-btn w-40'>Favorite</button>
                </section>
            </div>
        </section>
    );
};

export default DetailPic;
