import { Link, useLocation } from "react-router-dom";
import { addToCartBlack } from "../assets"; // Ensure pic1 is your image
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { toggleStatusTab } from "../store/cart"; // Import the toggle action if needed
import { useContext, useEffect } from "react";
import { removeFromFavorite } from "../store/favorite";
import { ThemeContext } from "../Context/ThemeContext";

const ShoesCard = ({ shoesData }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useContext(ThemeContext)
  const handleAddToCart = (product) => {
    // Dispatch the action to add the product to the cart
    dispatch(addToCart({
      productId: product.id,
      quantity: 1,
      price: product.price // Assuming you are adding one item at a time
    }));
    dispatch(toggleStatusTab());
  };
  const handleRemove = (productId) => {
    dispatch(removeFromFavorite({
      productId: productId
    }))
  }
  return (
    <div className="container mx-auto px-4 mt-10 ">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 m-auto">
        {shoesData.map((element) => (
          <div key={element.id} className=" w-[300px] md border-2 overflow-hidden border-lightGray flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl rounded-lg ">
            <Link to={`/product/${element.id}`}>
              <div className="w-full  bg-black dark:text-main-light">
                {/* Image */}
                <div>
                  <img
                    src={element.pic}
                    alt="Shoes"
                    className="w-full h-48 object-cover rounded-t-lg relative"
                  />
                </div>

                {/* Content Section */}
                <div className="dark:bg-white border-none bg-black  px-5 py-1 flex flex-col items-center">
                  {/* Shoe Name */}
                  <div className="flex gap-5">
                    <p className="text-xl font-semibold">Shoes Name:</p>
                    <p className="text-xl">{element.name}</p>
                  </div>

                  {/* Price */}
                  <div className="flex gap-5">
                    <p className="text-xl font-semibold">Price:</p>
                    <p className="text-xl">{element.price}</p>
                  </div>

                  {/* Color */}
                  <div className="flex gap-5">
                    <p className="text-xl font-semibold">Color:</p>
                    <p className="text-xl">{element.color}</p>
                  </div>
                  {/* Buy Now Button */}

                </div>
              </div>
            </Link>
            <div className="w-full flex justify-center">
              <button
                className="mt-4 w-52 py-2 mb-3 bg-[white] dark:text-main-light text-[black] flex justify-center items-center gap-2
                          font-semibold rounded-lg hover:bg-primary-600 dark:hover:text-white border-2 border-black  transition-all duration-200 "
                onClick={() => handleAddToCart(element)} // Pass the current product to the handler
              >
                Add To Cart<img src={addToCartBlack} className="w-6" />
              </button>
              <button>

              </button>
            </div>
            {location.pathname === "/Add-to-favorite" ? <button className="absolute top-0 right-3 font-bold text-primary" onClick={() => handleRemove(element.id)} >X</button>
              : ""}
          </div>

        ))}
      </div>
    </div>
  );
};

export default ShoesCard;