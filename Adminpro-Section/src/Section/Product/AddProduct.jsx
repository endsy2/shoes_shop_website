import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { addNewProductAPI, OrderTableFetch } from "../../Fetch/FetchAPI";

const AddProduct = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState("New");
  const [selectedSize, setSelectedSize] = useState(43);
  const [selectedColor, setSelectedColor] = useState("yellow");
  const [minPrice, setMinPrice] = useState(1245);
  const [maxPrice, setMaxPrice] = useState(9344);

  const sizes = [40, 41, 42, 43, 44, 45, 46, 47];
  const colors = [
    { name: "yellow", hex: "bg-yellow-400" },
    { name: "red", hex: "bg-red-400" },
    { name: "pink", hex: "bg-pink-400" },
    { name: "teal", hex: "bg-teal-400" },
    { name: "indigo", hex: "bg-indigo-500" },
    { name: "black", hex: "bg-black" },
    { name: "green", hex: "bg-lime-500" },
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await OrderTableFetch();
        setOrders(response ?? []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (selectedImage) {
      // Here you would typically upload the image to your server
      console.log("Saving image:", selectedImage);
      setIsSaved(true);
    }
  };

  const handleUnsave = () => {
    setSelectedImage(null);
    setPreviewImage(null);
    setIsSaved(false);
  };


  return (
    <div className="p-6 max-w-6xl mx-auto border-2 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4" style={{ color: "#168893" }}>
        Add Product
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Panel */}
        <div className="space-y-5 border p-4 rounded-md shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm">Filter search</span>
            <button className="text-xs font-bold bg-black text-white px-3 py-1 rounded-full">×</button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border px-4 py-2 rounded-full text-sm"
            />
            <span className="absolute right-4 top-2.5 text-gray-400 text-lg cursor-pointer">×</span>
          </div>

          {/* Price Range */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Price Range</p>
            <div className="flex justify-between mb-2 text-sm font-bold">
              <span className="text-green-600">${minPrice.toLocaleString()}</span>
              <span className="text-red-600">${maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1245}
              max={9344}
              value={minPrice}
              onChange={(e) => setMinPrice(parseInt(e.target.value))}
              className="w-full mb-2"
            />
            <input
              type="range"
              min={1245}
              max={9344}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Condition */}
          <div className="flex gap-2">
            {["New", "Used", "Not Specified"].map((cond) => (
              <button
                key={cond}
                onClick={() => setSelectedCondition(cond)}
                className={`px-4 py-2 text-sm rounded-md ${
                  selectedCondition === cond
                    ? "bg-black text-white"
                    : "border border-teal-400"
                }`}
              >
                {cond}
              </button>
            ))}
          </div>

          {/* Size */}
          <div>
            <p className="text-sm mb-1">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 text-sm rounded-full flex items-center justify-center ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border border-teal-400 text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <p className="text-sm mb-1">Select Color</p>
            <div className="flex gap-2">
              {colors.map(({ name, hex }) => (
                <button
                  key={name}
                  onClick={() => setSelectedColor(name)}
                  className={`w-8 h-8 rounded-full ${hex} border-2 ${
                    selectedColor === name ? "ring-2 ring-black" : ""
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-gray-100 border p-4 rounded-md space-y-4">
          <h3 className="text-lg font-bold">FS - Nike Air Max 270</h3>

          {/* Image section */}
          <div className="w-full h-64 flex items-center justify-center bg-white rounded-lg">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Uploaded preview"
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <div className="text-center p-4">
                <p className="text-gray-500">IMAGE UNAVAILABLE</p>
                <label className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          <p className="text-xl font-bold text-red-600">
            ${minPrice.toLocaleString()}–${maxPrice.toLocaleString()}
          </p>

          {/* Save/unsave buttons */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleSave}
              disabled={!selectedImage || isSaved}
              className={`px-4 py-2 rounded-md ${
                !selectedImage || isSaved
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              }`}
            >
              {isSaved ? "Saved" : "Save Product"}
            </button>
            <button
              onClick={handleUnsave}
              disabled={!selectedImage}
              className={`px-4 py-2 rounded-md ${
                !selectedImage
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal-800 text-white hover:bg-teal-900"
              }`}
            >
              Unsave Product
            </button>
          </div>

          {/* Picture gallery */}
          <div>
            <p className="mb-1 text-sm font-medium">Detail Shoes</p>
            <div className="flex gap-2">
              <img
                src="/src/Assets/peri-stojnic-r3rbIwZ9DJc-unsplash.jpg"
                className="w-16 h-16 object-cover rounded-md"
                alt="shoe1"
              />
              <img
                src="/src/Assets/peri-stojnic-r3rbIwZ9DJc-unsplash.jpg"
                className="w-16 h-16 object-cover rounded-md"
                alt="shoe2"
              />
              <img
                src="/src/Assets/peri-stojnic-r3rbIwZ9DJc-unsplash.jpg"
                className="w-16 h-16 object-cover rounded-md"
                alt="sole"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;