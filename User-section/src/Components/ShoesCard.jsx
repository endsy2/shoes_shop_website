import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, toggleStatusTab } from "../store/cart";
import { removeFromFavorite } from "../store/favorite";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { addToCartIcon, addToCartIconBlack } from "../assets";

const ShoesCard = ({ productName, productPrice, productImage, productId }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useContext(ThemeContext);
  const [hover, setHover] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId,
        quantity: 1,
        price: productPrice,
      })
    );
    dispatch(toggleStatusTab());
  };

  const handleRemove = () => {
    dispatch(removeFromFavorite({ productId }));
  };

  return (
    <div className="container mt-10 px-1">
      <div className="relative border-2 border-gray-300 dark:border-gray-700 overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
        <Link to={`/product/${productId}`}>
          <div className="w-full bg-gray-50 dark:bg-gray-900">
            {/* Image Section */}
            <div className="relative w-full h-60">
              <img
                src={productImage}
                alt={productName}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 text-center bg-white dark:bg-gray-900">
              {/* Shoe Name */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{productName}</h3>

              {/* Price */}
              <p className="text-md font-bold text-gray-600 dark:text-gray-300 mt-3">${productPrice}</p>
            </div>
          </div>
        </Link>

        {/* Buttons Section */}
        {/* <div className="flex justify-center p-4">
          <button
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700"
            onClick={handleAddToCart}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Add To Cart
            <img src={hover ? addToCartIcon : addToCartIconBlack} className="w-6" alt="Cart Icon" />
          </button>
        </div> */}

        {/* Remove Favorite Button */}
        {location.pathname === "/Add-to-favorite" && (
          <button
            className="absolute top-3 right-3 bg-red-500 text-white text-sm font-bold rounded-full px-2 py-1 hover:bg-red-600 transition"
            onClick={handleRemove}
          >
            ✖
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoesCard;
