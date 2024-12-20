import { useState, useEffect } from "react";
import { productByID, removeOneFetch } from "../Fetch/FetchAPI";
import { useNavigate, useParams } from "react-router-dom";
import { trash } from "../Assets";
import Model from "../Utils/Model/Model";

const Offer = () => {
  const [items, setItems] = useState([]);
  const [arrayImage, setArrayImage] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [open, setOpen] = useState(false);  // Modal open state
  const { id } = useParams();  // Get product id from URL params
  const nav = useNavigate();

  const fetchData = async () => {
    try {
      const response = await productByID(id);
      if (!response || !response.data || response.data.length === 0) {
        console.log("No data received or something went wrong");
        return;
      }

      setItems(response.data);
      const images = response.data[0].images.split(',').map(image => image.replaceAll(" ", ""));
      setArrayImage(images);
      setSelectedImage(images[0]);  // Set the first image as the default large image
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = async ({ deleteid }) => {
    try {
      const response = await removeOneFetch({ deleteid })
      nav(-1);
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container mx-auto bg-white rounded-lg shadow-xl max-w-6xl mt-8 p-8">
      {items.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Gallery */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="w-full">
              <img
                src={`http://localhost:3000/${selectedImage}`}  // Use selectedImage here
                alt="Product Image"
                className="w-96 h-96 object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="flex gap-6 mt-4 overflow-x-auto">
              {arrayImage.map((mapelement, index) => (
                <div
                  key={index}
                  className="w-20 h-20 cursor-pointer"
                  onClick={() => handleImageClick(mapelement)}  // Set large image on click
                >
                  <img
                    src={`http://localhost:3000/${mapelement}`}
                    alt={`Thumbnail Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-md transform transition duration-200 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full space-y-6 px-10">
            <h1 className="text-4xl font-bold text-green-600 mb-6">Product Details</h1>
            <div className="text-3xl font-semibold text-gray-800">Product Code: {items[0].phone_id}</div>
            <div className="text-3xl font-semibold text-gray-800">Product Name: {items[0].name}</div>
            <div className="text-2xl font-bold text-green-600">Price: {items[0].price} USD</div>

            {/* Colors */}
            <div className="mb-4">
              <span className="font-semibold">Available Colors:</span>
              <div className="flex gap-3 mt-2">
                {items.map((element, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full cursor-pointer"
                    style={{ backgroundColor: element.color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="text-lg">
              <span className="font-semibold">Category:</span> {items[0].category_name}
            </div>

            {/* Stock */}
            <div className="text-lg">
              <span className="font-semibold">Stock:</span> {items[0].stock}
            </div>

            {/* Description */}
            <div className="text-lg">
              <span className="font-semibold">Description:</span> {items[0].description}
            </div>

            {/* Specifications */}
            <div className="text-lg">
              <span className="font-semibold">Processor:</span> {items[0].processor}
            </div>
            <div className="text-lg">
              <span className="font-semibold">RAM:</span> {items[0].ram}
            </div>
            <div className="text-lg">
              <span className="font-semibold">Screen Size:</span> {items[0].screen_size}
            </div>
            <div className="text-lg">
              <span className="font-semibold">Storage:</span> {items[0].storage}
            </div>
            <div className="flex gap-10">
              <button
                className="mt-6 bg-green-500 text-white py-4 px-10 rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
                onClick={() => setOpen(true)}
              >
                Update
              </button>
              <button
                className="mt-6 bg-red-500 text-white py-4 px-10 rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
                onClick={() => handleDelete({ deleteid: items[0].phone_id })}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">No data available</div>
      )}

      {/* Modal for Confirmation */}
      <Model open={open} onClose={() => setOpen(false)} id="addProduct" product_id={items[0]?.phone_id || null}>
        {/* <div className="text-center w-56">
          <img src={trash} alt="" />
          <div className="mx-auto my-4 w-96">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-red-500 text-white w-full py-2 rounded-lg">Delete</button>
            <button className="bg-gray-200 text-black w-full py-2 rounded-lg" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </div> */}
      </Model>
    </div>
  );
};

export default Offer;
