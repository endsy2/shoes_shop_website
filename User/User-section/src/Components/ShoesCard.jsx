import { Link } from "react-router-dom";
import { pic1 } from "../assets"; // Ensure pic1 is your image
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { toggleStatusTab } from "../store/cart"; // Import the toggle action if needed

const ShoesCard = ({ shoesData }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the action to add the product to the cart
    dispatch(addToCart({
      productId: product.id,
      quantity: 1, // Assuming you are adding one item at a time
    }));

    // Optionally, open the cart tab when an item is added
    dispatch(toggleStatusTab());
  };

  return (
    <div className="container mx-auto px-4 mt-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-auto">
        {shoesData.map((element) => (
          <div key={element.id} className="border-2 overflow-hidden rounded-lg border-lightGray flex flex-col items-center">
            <Link to={`/product/${element.id}`}>
              <div className="w-80 transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl rounded-lg  bg-black ">
                {/* Image */}
                <img
                  src={element.pic}
                  alt="Shoes"
                  className="w-full h-48 object-cover rounded-t-lg"
                />

                {/* Content Section */}
                <div className="bg-[black] text-[white] px-5 py-1 flex flex-col items-center">
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
            <button
              className="mt-4 w-52 px-2 py-2 mb-3 bg-[white] text-[black] 
                    font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-200"
              onClick={() => handleAddToCart(element)} // Pass the current product to the handler
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesCard;
