import { Link } from "react-router-dom";
import { pic1 } from "../assets"; // Ensure pic1 is your image

const ShoesCard = ({ shoesData }) => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoesData.map((element, index) => (
          <Link key={index} to={`Detail/${element.id || index}`}>
            <div className="w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl rounded-lg overflow-hidden bg-black border-2 border-lightGray">
              {/* Image */}
              <img
                src={element.pic}
                alt="Shoes"
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Content Section */}
              <div className="bg-[black] text-[white] px-5 py-4 flex flex-col items-center">
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
                <button className="mt-4 px-4 py-2 bg-[white] text-[black] font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-200">
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShoesCard;
