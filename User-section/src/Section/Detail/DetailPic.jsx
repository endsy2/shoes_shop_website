import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleStatusTab } from "../../store/cart";
import { addToFavorite, removeFromFavorite } from "../../store/favorite";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const DetailPic = ({ detail }) => {
    const url = "http://localhost:3000/uploads/";
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
            dispatch(addToCart({ productId: detail.id, quantity, price: selectedVariant.price }));
            dispatch(toggleStatusTab());
        }
    };

    const handleAddToFavorite = () => {
        const isFavorite = favorite.some((item) => item.productId === detail.id);
        isFavorite
            ? dispatch(removeFromFavorite({ productId: detail.id }))
            : dispatch(addToFavorite({ productId: detail.id }));
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
        <section className="flex flex-wrap gap-12 p-8 w-full bg-gray-50">
            {/* Left Section: Image Thumbnails */}
            <div className="flex flex-col gap-4 w-1/4">
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
            <div className="w-1/2 flex justify-center">
                <img
                    src={`${url}${selectedImage}`}
                    alt="Main Product"
                    className="w-96 h-96 object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Right Section: Product Details */}
            <div className="flex flex-col w-1/4">
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">{detail.name}</h1>

                {/* Add to Favorite Button */}
                <button
                    onClick={handleAddToFavorite}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 mb-6"
                >
                    {favorite.some((item) => item.productId === detail.id) ? (
                        <MdFavorite size={26} />
                    ) : (
                        <MdOutlineFavoriteBorder size={26} />
                    )}
                    <span className="text-lg">{favorite.some((item) => item.productId === detail.id) ? "Remove from Favorite" : "Add to Favorite"}</span>
                </button>

                {/* Product Price */}
                <p className="text-3xl font-semibold text-blue-600 mb-6">${selectedVariant.price}</p>

                {/* Color Options */}
                <div className="mt-6">
                    <p className="text-lg font-medium text-gray-700">Color:</p>
                    <div className="flex gap-4 mt-3">
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
                <div className="mt-6">
                    <p className="text-lg font-medium text-gray-700">Size:</p>
                    <div className="flex gap-3 mt-3">
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
                <p className="text-lg text-gray-600 mt-4">{detail.Description}</p>

                {/* Discount Information */}
                {selectedVariant.discount && (
                    <p className="text-lg text-red-500 mt-4">
                        Discount: {selectedVariant.discount.value}% off
                    </p>
                )}

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
            </div>
        </section>
    );
};

export default DetailPic;
