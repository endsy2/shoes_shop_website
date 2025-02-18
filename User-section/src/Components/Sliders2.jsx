import React from 'react';
import { slider2, sliderLetter2 } from '../assets';
import { trending_pic } from '../Constants';

const Sliders2 = () => {
    return (
        <div className='flex flex-col gap-8 p-5 lg:p-10'>
            {/* Hero Section */}
            <div
                className="relative duration-300 hover:scale-105 transition-transform w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] flex items-center justify-center bg-cover bg-center rounded-3xl shadow-lg"
                style={{ backgroundImage: `url(${slider2})` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-3xl"></div>

                {/* Content */}
                <div className="absolute left-3 sm:left-5 md:left-7 lg:left-14 xl:left-16 z-10 text-white text-center">
                    <img
                        src={sliderLetter2}
                        className="w-[180px] sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto opacity-100 animate-fadeIn"
                        alt="Slider Text"
                    />

                    <button className="mt-6 px-6 md:px-10 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Trending Section */}
            <div>


                <div className="flex gap-4  pb-3 ">
                    {trending_pic.map((element, index) => (
                        <img
                            key={index}
                            src={element}
                            alt={`Trending ${index}`}
                            className="w-[220px] sm:w-[430px] md:w-[500px] lg:w-[600px] h-60 sm:h-72 md:h-80 lg:h-[400px] rounded-3xl shadow-md hover:scale-105 duration-300 transition-transform"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sliders2;
