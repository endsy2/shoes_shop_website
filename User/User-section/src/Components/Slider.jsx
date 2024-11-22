import React, { useState } from 'react';
import { img_slider } from '../Constants';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % img_slider.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + img_slider.length) % img_slider.length);
    };

    return (
        <div className="relative w-full h-full mx-auto overflow-hidden">
            {/* Image Slider */}
            <div className="flex transition-transform duration-500 ease-in-out">
                <img
                    src={img_slider[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Previous and Next Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-10"
            >
                {"<"}
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-10"
            >
                {">"}
            </button>

            {/* Dot Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {img_slider.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex
                            ? 'bg-white opacity-100'
                            : 'bg-white opacity-50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
