import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const categories = ["Sneakers", "Boots", "Sandals", "Loafers", "Sports"];

const DropBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dropRef = useRef(null);

    // Handle category selection
    const handleCategorySelect = (category) => {
        navigate(`/category/${category.toLowerCase()}`); // Navigate to category page
        setIsOpen(false); // Close dropdown
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropRef.current && !dropRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={dropRef}>
            {/* Dropdown Button */}
            <button
                className="px-3 py-1 min-w-[100px] text-black flex justify-between items-center border-2 border-black rounded-md hover:bg-gray-100 transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>Sort</span>
                <IoIosArrowDown className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                    <ul className="py-1 text-gray-700 text-sm">
                        {categories.map((category) => (
                            <li
                                key={category}
                                className="px-3 py-2 hover:bg-gray-200 cursor-pointer transition"
                                onClick={() => handleCategorySelect(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropBar;
