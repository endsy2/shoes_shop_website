import React from 'react';
import { slider2, sliderLetter2 } from '../assets';
import { trending_pic } from '../Constants';

const Sliders2 = () => {
    return (
        <div className='flex flex-col gap-10 p-5 lg:p-12'>
            {/* Hero Section */}
            <div
                className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] flex items-center justify-center bg-cover bg-center rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${slider2})` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-3xl"></div>

                {/* Content */}
                <div className="absolute left-5 sm:left-10 md:left-14 lg:left-20 xl:left-24 z-10 text-white text-center">
                    <img
                        src={sliderLetter2}
                        className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] mx-auto opacity-100 animate-fadeIn"
                        alt="Slider Text"
                    />

                    <button className="mt-6 px-8 md:px-12 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-300 transition-all transform hover:scale-110">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Trending Section */}
            {/* <div className="w-full flex flex-wrap justify-center gap-6">
                {trending_pic.map((element, index) => (
                    <div key={index} className="relative group max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <img
                            src={element}
                            alt={`Trending ${index}`}
                            className="w-full h-60 sm:h-72 md:h-80 lg:h-[400px] rounded-3xl shadow-lg object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div> */}

        </div>
    );
};

export default Sliders2;
