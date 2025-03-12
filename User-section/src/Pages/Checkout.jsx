import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productCart } from "../Constants";
import { checkoutIcon } from "../assets";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { removeFromCart } from "../store/cart";

const Checkout = () => {
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const cart = useSelector((store) => store.cart.items); // Assuming `cart.items` contains an array of product objects
    const token = true; // Replace with dynamic token check if needed
    const dispatch = useDispatch();
    const handleRemove = ({ productId }) => {
        dispatch(removeFromCart({ productId }))
    }
    // Filter products in the cart
    const filteredData = productCart.filter((product) =>
        cart.some((element) => element.productId === product.id)
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!deliveryMethod) {
            alert("Please select a delivery method.");
            return;
        }
        console.log("Purchase successful!", { filteredData, deliveryMethod });
    };

    return (
        <>
            {token ? (
                <div className="mt-7 w-full">
                    <h1 className="text-head mb-10 text-center text-black">Check Out</h1>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mx-10">
                        {/* Contact and Delivery Information */}
                        <section className="border-2 opacity-90 dark:border-white border-black px-14 py-10 rounded-xl">
                            <h1 className="text-simple text-lg font-bold text-black">
                                1. Contact Information
                            </h1>
                            <form
                                className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10"
                                onSubmit={handleSubmit}
                            >
                                <div className="flex flex-col items-start space-y-4">
                                    <label className="text-simple font-OpenSans text-lg dark:text-white text-black">
                                        Your Number
                                    </label>
                                    <input
                                        className="p-3 text-black placeholder:text-black px-6 font-OpenSans border-2 border-primary rounded-xl  focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition-all duration-300 shadow-md"
                                        type="text"
                                        placeholder="Enter your number"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col items-start space-y-4">
                                    <label className="text-simple font-OpenSans text-lg dark:text-white text-black">
                                        Your Address
                                    </label>
                                    <input
                                        className="p-3 px-6 text-black placeholder:text-black font-OpenSans border-2 border-primary rounded-xl  focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition-all duration-300 shadow-md"
                                        type="text"
                                        placeholder="Enter your address"
                                        required
                                    />
                                </div>
                            </form>
                            <div className="flex flex-col mt-5">
                                <label className="text-simple text-lg font-bold text-black">
                                    2. Delivery Method
                                </label>
                                <div className="flex gap-10 justify-between mt-8 ">
                                    {checkoutIcon.map((element) => (

                                        <button
                                            key={element.value}
                                            onClick={() => setDeliveryMethod(element.value)}
                                            className={`flex gap-4 px-6 justify-center items-center w-60 h-14 rounded-xl focus:outline-none transition-all duration-300 ${deliveryMethod === element.value
                                                ? "bg-primary-700 ring-4 dark:ring-white ring-primary"
                                                : "bg-primary hover:bg-primary-600"
                                                }`}
                                        >
                                            <img src={element.icon} alt={element.value} className="w-7" />
                                            <p className="text-white font-bold">{element.value}</p>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="my-10 mt-16 bg-black h-14 rounded-xl font-bold text-white hover:bg-primary-600 hover:text-black transition-all"
                                >
                                    PURCHASE NOW
                                </button>
                            </div>
                        </section>
                        {/* Cart Items */}
                        <section className="flex flex-col border-2 dark:border-white border-black rounded-lg ">
                            <div className="grid grid-cols-4 px-3 border-b-2 border-black dark:border-white p-3 ">
                                <h1 className="col-span-2 dark:text-black">Product Name</h1>
                                <h1 className="text-black">Quantity</h1>
                                <h1 className="text-center text-black pr-16">Price</h1>
                            </div>
                            <div>
                                {filteredData.length > 0 ? (
                                    filteredData.map((product, index) => (
                                        <div
                                            key={product.id}
                                            className="grid grid-cols-4 border-b-2 border-black p-4 mb-4 rounded shadow text-white "
                                        >   <div className=" flex justify-start items-center col-span-2 gap-5">
                                                <img src={product.pic} className="w-10 rounded-lg" />
                                                <span className="text-black">{product.name}</span>
                                            </div>
                                            <div className="flex justify-start pl-6 items-center">
                                                <p className="text-black"> {cart[index].quantity}</p>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <p className=" text-black pr-10">{product.price}$</p>
                                                <MdDeleteForever className="text-black text-xl" onClick={() => handleRemove({ productId: product.id })} />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className=" text-black text-center mt-28">Your cart is empty.</p>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24">
                    <Link to="/login" className="blue-btn text-center">
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="white-btn text-center bg-gray-300 hover:bg-gray-200"
                    >
                        Register
                    </Link>
                </div>
            )}
        </>
    );
};

export default Checkout;
