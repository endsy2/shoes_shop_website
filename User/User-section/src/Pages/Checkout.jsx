import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { productCart } from '../Constants';
import { checkoutIcon } from '../assets';

const Checkout = () => {
    const [data, setData] = useState([]);
    const [deliveryMethod, setDeliveryMethod] = useState('');

    // Get the cart items from the Redux store
    const cart = useSelector((store) => store.cart.items); // Assuming `cart.items` contains an array of product objects

    // Filter the products that are in the cart
    useEffect(() => {
        setData(cart); // Set the entire array at once
    }, [cart]);

    const handleSubmit = () => {

    }
    return (
        <div className='mt-7'>
            <h1 className='text-head mb-10'>Check Out</h1>
            <div className='flex flex-wrap w-full justify-between  '>
                <section className='border-2 opacity-90 border-[white] px-14 py-10 rounded-xl '>
                    <h1 className='text-simple text-lg font-bold '>1.Contact Information</h1>

                    <form className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10' action="" onSubmit={handleSubmit}>
                        <div className="flex flex-col items-start space-y-4 ">
                            <label className="text-simple font-OpenSans text-lg text-gray-700">Your Number</label>
                            <input
                                className="p-3 px-6 font-OpenSans border-2 border-primary rounded-xl w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-blue-500 transition-all duration-300 shadow-md"
                                type="text"
                                placeholder="Enter your number"
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-4 ">
                            <label className="text-simple font-OpenSans text-lg text-gray-700">Your Address</label>
                            <input
                                className="p-3 px-6 font-OpenSans border-2 border-primary rounded-xl w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-blue-500 transition-all duration-300 shadow-md"
                                type="text"
                                placeholder="Enter your number"
                            />
                        </div>
                    </form>
                    <div className='flex flex-col mt-5'>
                        <label className='text-simple text-lg font-bold'>2.Delivery Method</label>
                        <div className='flex justify-between mt-8 w-1/2 '>
                            {checkoutIcon.map((element) => (
                                <button
                                    key={element.value}
                                    onClick={() => setDeliveryMethod(element.value)} // Set the active button
                                    className={`flex justify-center items-center w-28 h-14 rounded-xl focus:outline-none transition-all duration-300 ${deliveryMethod === element.value
                                        ? 'bg-primary-700 ring-4 ring-[white]' // Active state styles
                                        : 'bg-primary hover:bg-primary-600'
                                        }`}
                                >
                                    <img src={element.icon} alt="" className="w-10" />
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
                <section className=''>
                    {data.map((product) => (
                        <div key={product.id} className="border p-4 mb-4 rounded shadow text-[white]">
                            <h3 className="text-lg font-semibold text[white]">{product.name}</h3>
                            <p>ProductID: {product.productId}</p>
                            <p>Quatity: {product.quantity}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Checkout;
