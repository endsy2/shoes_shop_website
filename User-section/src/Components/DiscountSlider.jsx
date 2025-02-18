import React from 'react';
import { sliderDiscount } from '../assets';

const DiscountSlider = () => {
    return (
        <div
            className="relative w-full h-[400px] flex flex-col justify-center  items-start gap-6 bg-cover bg-center rounded-3xl shadow-lg px-6 sm:px-12 lg:px-20 
            hover:scale-105 duration-500 transition-transform
            "
            style={{ backgroundImage: `url(${sliderDiscount})` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

            {/* Text Content */}
            <div className="relative z-10 text-white font-OpenSans space-y-3 max-w-[500px] ">
                <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">Limited Time Offer</p>
                <p className="text-lg sm:text-xl">Get 20% off on every product</p>
                <p className="text-sm sm:text-md opacity-80">
                    Spend a minimum of $100 to get a 30% off <br />
                    voucher code for your next purchase.
                </p>
            </div>

            {/* Buy Now Button - Fixed Alignment */}
            <button className="relative z-10 bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-bold rounded-xl shadow-lg 
                hover:bg-gray-200 transition-transform transform hover:scale-105">
                Buy Now
            </button>
        </div>
    );
};

export default DiscountSlider;
