import { useState } from "react";
import { arrowdown, arrowup } from "../assets";
import { category_menu } from "../Constants";

const Category = () => {
    const [open, setOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState({}); // Track checked state for each item

    const handleCheckboxChange = (index) => {
        setCheckedItems((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle checked state for the specific item
        }));
    };

    return (
        <aside className="w-44 flex-col justify-end m-7 h-full  border-r-2 border-[white]">
            <button
                className="font-AntonSC text-[white] border-b-2 border-[white] flex justify-between text-xl w-full mb-2"
                onClick={() => setOpen(!open)}
            >
                Collection
                {!open ? (
                    <img src={arrowup} alt="Arrow Up" className="h-5 ml-4" />
                ) : (
                    <img src={arrowdown} alt="Arrow Down" className="h-5 ml-4" />
                )}
            </button>
            {open && ( // Only display categories when `open` is true
                <div>
                    {category_menu.map((value, index) => (
                        <form key={index} className="flex justify-between items-center mb-4">
                            {/* Custom checkbox with peer class */}
                            <input
                                type="checkbox"
                                id={`category-${index}`}
                                className="hidden peer"
                                checked={checkedItems[index] || false} // Use state to track checked status
                                onChange={() => handleCheckboxChange(index)} // Handle checkbox state change
                            />
                            <label
                                htmlFor={`category-${index}`}
                                className="flex items-center cursor-pointer text-[white] font-AntonSC text-sm"
                            >
                                {/* Custom styled checkbox with peer-checked */}
                                <span className="w-6 h-6 border-2 border-[white] rounded-sm flex justify-center items-center mr-2 peer-checked:bg-black peer-checked:text-white">
                                    {/* Show checkmark when the box is checked */}
                                    {checkedItems[index] ? (
                                        <span className="block">✓</span>
                                    ) : (
                                        <span className="hidden">✓</span>
                                    )}
                                </span>
                                {value.name}
                            </label>
                        </form>
                    ))}
                </div>
            )}
        </aside>
    );
};

export default Category;
