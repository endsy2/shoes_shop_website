import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleStatusTab } from "../store/cart";
import { addToFavorite, removeFromFavorite } from "../store/favorite.js";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"; // Import outlined version

const ShoesCard = ({ productName, productPrice, productImage, productId }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useContext(ThemeContext);

  // Get favorite list from Redux
  const favoriteList = useSelector((state) => state.favorite.favorite);

  // Check if this product is already in favorites
  const isFavorited = favoriteList.some((item) => item.productId === productId); // Ensure correct property

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

  const handleFavoriteToggle = (e) => {
    e.preventDefault(); // Prevents the link from redirecting
    if (isFavorited) {
      dispatch(removeFromFavorite({ productId })); // Ensure correct property
    } else {
      dispatch(addToFavorite({ productId, productName, productImage, productPrice }));
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
    console.log(productId);

    dispatch(removeFromFavorite({ productId })); // Ensure correct property
  };

  return (
    <div className="relative container mt-10 px-1">
      <div className="relative border-2 border-gray-300 dark:border-gray-700 overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 group">
        <Link to={`/product/${productId}`}>
          {/* Only the product content is wrapped inside Link */}
          <div className="w-full bg-gray-50 dark:bg-gray-900">
            {/* Image Section */}
            <div
              style={{ backgroundImage: `url(${productImage})` }}
              className="relative w-full h-60 bg-cover bg-center flex flex-col justify-between rounded-lg shadow-md overflow-hidden group"
            >
              {/* Favorite Button - Toggle on Click */}
              {location.pathname !== "/Add-to-favorite" ? (
                <button
                  onClick={handleFavoriteToggle}
                  className={`absolute top-3 right-3 text-2xl p-2 rounded-full shadow-lg transition-all duration-300 
                bg-white text-lightGray hover:bg-white hover:text-black opacity-0 group-hover:opacity-100`}
                >
                  {isFavorited ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder />}
                </button>
              ) : (
                <div></div>
              )}

              {/* Add To Cart Button - Prevent navigation when clicked */}
              <button
                onClick={(e) => {
                  // Prevent link navigation when button is clicked
                  handleAddToCart();   // Execute the Add To Cart logic
                }}
                className="absolute bottom-0 left-0 w-full bg-primary text-black font-semibold py-2 rounded-md transition-all duration-300 transform translate-y-full group-hover:translate-y-0"
              >
                Add To Cart
              </button>
            </div>

            {/* Content Section */}
            <div className="p-4 text-center bg-white dark:bg-gray-900">

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{productName}</h3>
              <p className="text-md font-bold text-gray-600 dark:text-gray-300 mt-3">${productPrice}</p>
            </div>

          </div>

          {/* Remove Favorite Button - Only if on "Add-to-favorite" Page */}
          {location.pathname === "/Add-to-favorite" && (
            <button
              className="absolute top-3 right-3 bg-red-500 text-white text-sm font-bold rounded-full px-2 py-1 hover:bg-red-600 transition"
              onClick={handleRemove}
            >
              ✖
            </button>
          )}
        </Link>
      </div>
    </div >
  );

};

export default ShoesCard;
