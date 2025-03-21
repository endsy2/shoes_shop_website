import { useContext, useState } from "react";
import { arrowdown, arrowup } from "../assets";
import { category_menu } from "../Constants";
import { ThemeContext } from "../Context/ThemeContext";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const Category = () => {
    const [open, setOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState({}); // Track checked state for each item
    const { theme } = useContext(ThemeContext)
    const handleCheckboxChange = (index) => {
        setCheckedItems((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle checked state for the specific item
        }));
    };

    return (
        <>
            <aside className="w-44 flex-col justify-end m-7 h-full xl:block hidden text-black">
                <button
                    className="font-AntonSC text-primary  dark:text-white border-b-2 dark:border-[white] border-primary-600 flex justify-between text-xl w-full mb-2"
                    onClick={() => setOpen(!open)}
                >
                    Collection

                    {!open ? theme ? <div><MdOutlineKeyboardArrowUp className="text-primary" /></div>
                        : <div><MdOutlineKeyboardArrowUp /></div>
                        : theme ?
                            <div><MdKeyboardArrowDown className="text-primary" /></div> :
                            <div><MdKeyboardArrowDown /></div>
                    }
                </button>
                {open && ( // Only display categories when `open` is true
                    <div >
                        {category_menu.map((value, index) => (
                            <form key={index} className="flex  justify-between items-center mb-4">
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
                                    className="flex items-center cursor-pointer text-primary dark:text-[white] font-AntonSC text-sm"
                                >
                                    {/* Custom styled checkbox with peer-checked */}
                                    <span className="w-6 h-6 border-2  border-primary-600 dark:border-white rounded-sm flex justify-center items-center mr-2 peer-checked:bg-black peer-checked:text-white">
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
            <div className="mt-5">
                <form action="" className="max-w-sm mx-auto xl:hidden block">
                    <select
                        className="xl:hidden border mx-5 border-gray-300 border-primary-600 dark:text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-primary block w-full p-2.5   dark:placeholder-primary dark:text-primary dark:focus:ring-primary-600 dark:focus:border-primary"
                        onMouseOver={(e) => e.currentTarget.classList.add('hover:bg-gray-200')}
                        onMouseOut={(e) => e.currentTarget.classList.remove('hover:bg-gray-200')}
                    >
                        <option>Choose Category</option>
                        {category_menu.map((element, index) => (
                            <option
                                value={element.name}
                                key={index}
                                className="text-black"
                            >
                                {element.name}
                            </option>
                        ))}
                    </select>
                </form>
            </div>

        </>
    );
};

export default Category;