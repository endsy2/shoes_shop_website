import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg bg-black">
            {/* Previous Button */}
            <button
                className="z-40 absolute top-1/2 h-full transform -translate-y-1/2 p-3 bg-[#128B9E] text-white  hover:bg-[#0f7787] shadow-lg focus:outline-none transition duration-300 ease-in-out"
                onClick={prevSlide}
            >
                <span className="text-2xl">&lt;</span>
            </button>

            {/* Next Button */}
            <button
                className="z-40 absolute top-1/2 right-0 h-full transform -translate-y-1/2 p-3 bg-[#128B9E] text-white hover:bg-[#0f7787] shadow-lg focus:outline-none transition duration-300 ease-in-out"
                onClick={nextSlide}
            >
                <span className="text-2xl">&gt;</span>
            </button>

            {/* Slide container */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-[250px] bg-[white]">
                        <img
                            src={image.pic}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Dots for navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`h-3 w-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-[#128B9E]' : 'bg-gray-600'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
