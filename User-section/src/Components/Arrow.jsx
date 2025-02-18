import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-20 top-1 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-10 hover:bg-gray-700 transition"
    >
        <IoIosArrowBack />
    </button>
);

export const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-0 top-1 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-10 hover:bg-gray-700 transition"
    >
        <IoIosArrowForward />
    </button>
);
