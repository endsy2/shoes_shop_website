import React, { useState } from "react";
import { BiSliderAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const categories = ["Sneakers", "Boots", "Sandals", "Loafers", "Sports"];

const Filter = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState(50);
    const [rating, setRating] = useState(4);

    return (
        <div>
            {/* Filter Button */}
            <button
                className="px-3 py-1 min-w-[100px] text-black flex justify-between items-center border-2 border-black rounded-md hover:bg-gray-100 transition"
                onClick={() => setToggleMenu(true)}
            >
                Filter <BiSliderAlt />
            </button>

            {/* Overlay and Sidebar */}
            {toggleMenu && (
                <div
                    className="fixed inset-0 z-40 flex bg-black bg-opacity-50"
                    onClick={() => setToggleMenu(false)}
                >
                    {/* Sidebar */}
                    <div
                        className="w-72 bg-white h-full shadow-lg transition-transform transform translate-x-0 p-5"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {/* Sidebar Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Filter Options</h2>
                            <IoClose
                                className="text-xl cursor-pointer hover:text-red-500"
                                onClick={() => setToggleMenu(false)}
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="mb-4">
                            <h3 className="font-medium mb-2">Category</h3>
                            <select
                                className="w-full border rounded-md p-2"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Price Range Filter */}
                        <div className="mb-4">
                            <h3 className="font-medium mb-2">Price Range: ${priceRange}</h3>
                            <input
                                type="range"
                                min="10"
                                max="500"
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        {/* Rating Filter */}
                        <div className="mb-4">
                            <h3 className="font-medium mb-2">Minimum Rating: {rating}★</h3>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        {/* Apply Button */}
                        <button
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            onClick={() => setToggleMenu(false)}
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter;
