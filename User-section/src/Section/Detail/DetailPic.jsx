import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleStatusTab } from "../../store/cart";
import { addToFavorite, removeFromFavorite } from "../../store/favorite";
import { MdFavorite, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { productCart } from "../../Constants";
import api from "../../api/api";
import Slider from "react-slick";
import ShoesCard from "../../Components/ShoesCard";
import { CustomNextArrow, CustomPrevArrow } from "../../Components/Arrow";

const DetailPic = ({ detail }) => {
    const url = "http://localhost:3000/uploads/";
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(detail.productVariants[0].color);
    const [selectedVariant, setSelectedVariant] = useState(detail.productVariants[0]);
    const [selectedImage, setSelectedImage] = useState(
        detail.productVariants[0].productimage?.[0]?.imageUrl || ""
    );
    const [productData, setProductData] = useState([]);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1400, // Tablets & small laptops
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                    arrows: true, // Optional: hide arrows on small screens
                }
            },
            {
                breakpoint: 1024, // Tablets & small laptops
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                    // arrows: true, // Optional: hide arrows on small screens
                }
            },
            {
                breakpoint: 768, // Small tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                    // arrows: true
                }
            },
            {
                breakpoint: 600, // Large phones
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                    // arrows: true
                }
            }
        ]
    };

    useEffect(() => {
        fetchDataProduct();
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    }, [])

    const fetchDataProduct = async () => {
        try {
            const data = await api.get("/displayProductAll")
            setProductData(data);
            console.log("data product fetch success");
            console.log(data);


        } catch (error) {
            console.error("fetch data error", error);
            return [];
        }
    }

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
        <section>
            <section className="flex  gap-8 px-8 py-10 w-full">

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
                <div className="flex flex-col w-1/3">
                    <h1 className="text-xl font-semibold text-gray-900 mb-4">{detail.name}</h1>

                    {/* Add to Favorite Button */}



                    {/* Product Price */}
                    <div className="flex gap-28 ">
                        {selectedVariant.discount ? (
                            <div className="flex  items-center gap-3">
                                <p className="text-lg font-semibold text-gray-400">price:</p>
                                <p className="text-lg font-bold text-slate-900">
                                    ${(selectedVariant.price * (1 - selectedVariant.discount.value / 100)).toFixed(2)}
                                </p>
                                <s className="text-lg font-semibold text-gray-500">${selectedVariant.price}</s>
                                <p className="text-lg text-red-500 ">
                                    {selectedVariant.discount.value}% off
                                </p>
                            </div>
                        ) : (
                            <p className="text-lg font-bold text-slate-900 ">${selectedVariant.price}</p>
                        )}
                        <button
                            onClick={handleAddToFavorite}
                            className="flex items-center justify-center gap-2   text-red-500 font-semibold 
               "
                        >
                            {favorite.some((item) => item.productId === detail.id) ? (
                                <MdFavorite size={15} className="transition-all duration-300 ease-in-out" />
                            ) : (
                                <MdOutlineFavoriteBorder size={15} className="transition-all duration-300 ease-in-out" />
                            )}
                            <span className="text-md">
                                {favorite.some((item) => item.productId === detail.id) ? "Remove from Favorites" : "Add to Favorites"}
                            </span>
                        </button>
                    </div>
                    <h1 className="text-lg font-medium text-slate-900  mt-5"><span className="text-gray-400">Brand:</span> {detail.brand.name}</h1>


                    {/* Color Options */}
                    <div className="mt-3 flex items-center  gap-4 ">
                        <p className="text-lg font-medium text-gray-400">Color:</p>
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
                    <div className="flex items-center gap-4  mt-6">
                        <p className="text-lg font-semibold text-gray-600">Select Size:</p>
                        <div className="flex gap-4 ">
                            {detail.productVariants
                                .filter((variant) => variant.color === selectedColor)
                                .map((variant) => (
                                    <button
                                        key={variant.id}
                                        className={`px-5 py-2 rounded-lg font-medium border-2 transition-all duration-300 
                        ${selectedVariant.id === variant.id
                                                ? "bg-black text-white border-black shadow-md scale-105"
                                                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 hover:border-gray-500"}`
                                        }
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
                    <div className="flex gap-10 mb-5">
                        <button
                            className="flex justify-center items-center gap-1 mt-6 w-full px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
                            onClick={handleAddToCart}
                        >
                            <p className="text-white text-lg"><MdOutlineShoppingBag /></p>Add To Cart
                        </button>
                        <button
                            className="flex justify-center items-center gap-1 mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                        // onClick={handleAddToCart}
                        >
                            <p className="text-white text-lg"><IoCartOutline /></p> Buy Now
                        </button>
                    </div>

                    {/* Header with Toggle Icon */}


                    {/* Expandable Description */}


                </div>

            </section>
            <section className="pt-16 w-full px-6">
                <div className="grid grid-col-1 md:grid-col-3 gap-8">
                    {/* Left Section: Top Selling Products (Trend) */}
                    <div className="border border-gray-200 rounded-lg shadow-md bg-white px-6 py-5 w-full max-w-[450px] md:max-w-full order-first md:order-first">
                        <h2 className="text-lg font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mb-4">
                            🔥 Top Selling Products
                        </h2>

                        <div className="flex flex-col gap-5">
                            {productCart.length > 0 ? (
                                productCart.map((element, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 border-b pb-4 last:border-none transition-all hover:bg-gray-100 rounded-md p-2"
                                    >
                                        <img
                                            src={element.picDetail[0]}
                                            className="w-16 h-16 object-cover rounded-md shadow-sm"
                                            alt={element.name}
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-700">{element.name}</p>
                                            {selectedVariant.discount ? (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <p className="font-semibold text-gray-400">Price:</p>
                                                    <p className="font-bold text-slate-900">
                                                        ${(selectedVariant.price * (1 - selectedVariant.discount.value / 100)).toFixed(2)}
                                                    </p>
                                                    <s className="text-gray-500">${selectedVariant.price}</s>
                                                    <p className="text-red-500">{selectedVariant.discount.value}% off</p>
                                                </div>
                                            ) : (
                                                <p className="text-sm font-bold text-slate-900">${selectedVariant.price}</p>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center">No top-selling products available.</p>
                            )}
                        </div>
                    </div>

                    {/* Right Section: Description & Related Products */}
                    <div className="flex flex-col gap-6 w-full order-last md:order-last">
                        {/* Product Description */}
                        <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-all hover:shadow-lg">
                            <h2 className="text-lg inline-block font-semibold text-gray-900 border-b-2 border-blue-500 pb-2">
                                📜 Description
                            </h2>
                            <p className="text-md text-gray-700 leading-relaxed mt-4">
                                {detail.Description}
                            </p>
                        </div>

                        {/* Related Products */}
                        <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-all hover:shadow-lg">
                            <h2 className="text-lg inline-block font-semibold text-gray-900 border-b-2 border-blue-500 pb-2">
                                🛍 Related Products
                            </h2>
                            <div className="slider-container w-1/2 max-w-full overflow-hidden relative">
                                <section className="py-8">
                                    <Slider key={windowWidth} {...settings}>
                                        {productData.map((element, index) => (
                                            <div key={index} className="py-3">
                                                <ShoesCard
                                                    productId={element.id}
                                                    productName={element.name}
                                                    productPrice={element?.productVariants[0]?.price}
                                                    productImage={element?.productVariants[0]?.productimage[0]?.imageUrl || 'fallback-image-url.jpg'}
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </section>
    );
};

export default DetailPic;
