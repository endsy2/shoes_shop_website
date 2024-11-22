
import { pic1 } from "../assets"; // Ensure pic1 is your image

const ShoesCard = () => {
  return (
    <div className="w-72 max-w-sm m-5 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg rounded-md overflow-hidden">
      {/* Image Section */}
      <img
        src={pic1}
        alt="Shoes"
        className="w-full h-48 object-cover rounded-t-md"
      />

      {/* Content Section */}
      <div className="bg-lightBlack text-white px-5 py-4">
        <p className="text-xl font-bold pb-3">Shoes Name</p>
        <p className="text-sm opacity-70 pb-1">For Who</p>
        <p className="text-lg pb-1">Color</p>
        <p className="text-lg font-semibold">$Price</p>
      </div>
    </div>
  );
};

export default ShoesCard;
