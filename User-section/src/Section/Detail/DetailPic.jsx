import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleStatusTab } from "../../store/cart";
import { addToFavorite, removeFromFavorite } from "../../store/favorite";
import { MdFavorite, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineFavoriteBorder } from "react-icons/md";

const DetailPic = ({ detail }) => {
    const url = "http://localhost:3000/uploads/";
    const [descriptionBar, setDescriptionBar] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(detail.productVariants[0].color);
    const [selectedVariant, setSelectedVariant] = useState(detail.productVariants[0]);
    const [selectedImage, setSelectedImage] = useState(
        detail.productVariants[0].productimage?.[0]?.imageUrl || ""
    );

    const dispatch = useDispatch();
    const favorite = useSelector((store) => store.favorite.favorite);

    const handleMinusQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
    const handlePlusQuantity = () => setQuantity((prev) => prev + 1);

    const handleAddToCart = () => {
        if (selectedVariant) {
            dispatch(addToCart({ productName: detail.name, productVariantId: selectedVariant.id, quantity, price: selectedVariant.price, image: selectedImage, size: selectedVariant.size, color: selectedVariant.color }));
            dispatch(toggleStatusTab());
        }
    };

    const handleAddToFavorite = () => {
        const isFavorite = favorite.some((item) => item.productId === detail.id);
        isFavorite
            ? dispatch(removeFromFavorite({ productId: detail.id }))
            : dispatch(addToFavorite({ productId: detail.id, productName: detail.name, productPrice: selectedVariant.price, productImage: selectedImage }));
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
        const variant = detail.productVariants.find((v) => v.color === color);
        if (variant) {
            setSelectedVariant(variant);
            setSelectedImage(variant.productimage?.[0]?.imageUrl || "");
        }
    };

    const handleSizeChange = (variantId) => {
        const variant = detail.productVariants.find((v) => v.id === variantId);
        if (variant) {
            setSelectedVariant(variant);
            setSelectedImage(variant.productimage?.[0]?.imageUrl || "");
        }
    };

    const handleImageChange = (imageUrl) => setSelectedImage(imageUrl);

    return (
        <section className="flex  gap-20 px-8 py-10 w-full bg-gray-50">

            {/* Left Section: Image Thumbnails */}
            <div className="flex gap-5 ml-10">
                <div className="flex flex-col gap-4 ">
                    {selectedVariant.productimage.map((img, index) => (
                        <img
                            key={index}
                            src={`${url}${img.imageUrl}`}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 hover:border-blue-500 transition-all duration-300 ${selectedImage === img.imageUrl ? "border-blue-500" : "border-gray-300"}`}
                            onClick={() => handleImageChange(img.imageUrl)}
                        />
                    ))}
                </div>

                {/* Main Image */}
                <div className="flex justify-center">
                    <img
                        src={`${url}${selectedImage}`}
                        alt="Main Product"
                        className="w-96 h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Right Section: Product Details */}
            <div className="flex flex-col w-1/4">
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">{detail.name}</h1>

                {/* Add to Favorite Button */}



                {/* Product Price */}
                <div>
                    {selectedVariant.discount ? (
                        <div className="flex  items-center gap-5">
                            <s className="text-3xl font-semibold text-gray-500">${selectedVariant.price}</s>
                            <p className="text-3xl font-semibold text-blue-500">
                                ${(selectedVariant.price * (1 - selectedVariant.discount.value / 100)).toFixed(2)}
                            </p>
                            <p className="text-lg text-red-500 ">
                                {selectedVariant.discount.value}% off
                            </p>
                        </div>
                    ) : (
                        <p className="text-3xl font-semibold text-blue-600">${selectedVariant.price}</p>
                    )}
                </div>
                <h1 className="text-lg font-medium text-gray-700  mt-5">Brand: {detail.brand.name}</h1>


                {/* Color Options */}
                <div className="mt-3 flex items-center  gap-4 ">
                    <p className="text-lg font-medium text-gray-700">Color:</p>
                    <div className="flex gap-4 ">
                        {[...new Set(detail.productVariants.map((variant) => variant.color))].map((color, index) => (
                            <button
                                key={index}
                                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-blue-500" : "border-gray-300"}`}
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorChange(color)}
                            />
                        ))}
                    </div>
                </div>

                {/* Size Options */}
                <div className="flex items-center gap-5 mt-6">
                    <p className="text-lg font-medium text-gray-700">Size:</p>
                    <div className="flex gap-3 ">
                        {detail.productVariants
                            .filter((variant) => variant.color === selectedColor)
                            .map((variant) => (
                                <button
                                    key={variant.id}
                                    className={`px-6 py-3 text-md rounded-md ${selectedVariant.id === variant.id ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 border"}`}
                                    onClick={() => handleSizeChange(variant.id)}
                                >
                                    {variant.size}
                                </button>
                            ))}
                    </div>
                </div>

                {/* Product Description */}


                {/* Discount Information */}


                {/* Quantity & Add to Cart */}
                <div className="flex items-center gap-6 mt-8">
                    <button className="px-4 py-2 bg-gray-200 rounded-md" onClick={handleMinusQuantity}>-</button>
                    <span className="text-2xl font-semibold">{quantity}</span>
                    <button className="px-4 py-2 bg-gray-200 rounded-md" onClick={handlePlusQuantity}>+</button>
                </div>

                {/* Add to Cart Button */}

                <button
                    className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </button>
                <button
                    onClick={handleAddToFavorite}
                    className="flex items-center justify-center gap-2 px-1 py-3 my-7 bg-white border border-red-400 text-red-500 font-semibold 
               rounded-full shadow-sm hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
                >
                    {favorite.some((item) => item.productId === detail.id) ? (
                        <MdFavorite size={26} className="transition-all duration-300 ease-in-out" />
                    ) : (
                        <MdOutlineFavoriteBorder size={26} className="transition-all duration-300 ease-in-out" />
                    )}
                    <span className="text-lg">
                        {favorite.some((item) => item.productId === detail.id) ? "Remove from Favorites" : "Add to Favorites"}
                    </span>
                </button>
                <div
                    className="w-full bg-white shadow-sm rounded-lg p-4 transition-all duration-300"
                    onClick={() => setDescriptionBar(!descriptionBar)}
                >
                    {/* Header with Toggle Icon */}
                    <div className="flex items-center justify-between cursor-pointer">
                        <h1 className="text-xl font-semibold text-gray-800">Description</h1>
                        {descriptionBar ? <MdKeyboardArrowUp size={30} className="text-gray-600" /> : <MdKeyboardArrowDown size={30} className="text-gray-600" />}
                    </div>

                    {/* Expandable Description */}
                    <div className={`overflow-hidden transition-all duration-300 ${descriptionBar ? "max-h-40 mt-3" : "max-h-0"}`}>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {detail.Description}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DetailPic;
