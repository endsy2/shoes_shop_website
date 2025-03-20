import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ShoesCard from "../Components/ShoesCard";
import DropBar from "../Components/DropBar";
import { productCart } from "../Constants";
import Filter from "../Components/Filter";

const ShopNow = () => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const searchData = queryParam.get("search"); // Get search query

    const [products, setProducts] = useState(productCart); // Store fetched products
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch products based on search query
    useEffect(() => {
        const handleSearch = async () => {
            if (!searchData) return; // Stop if no search query

            setLoading(true);
            setError(null); // Reset error

            try {
                const response = await axios.get(`https://your-api.com/products?search=${searchData}`);
                setProducts(response.data.length > 0 ? response.data : productCart); // Use API data or fallback to productCart
            } catch (error) {
                console.error("Error fetching search results:", error);
                setError("Failed to load search results.");
            } finally {
                setLoading(false);
            }
        };

        handleSearch();
    }, [searchData]); // Run when searchData changes

    return (
        <div className="p-4">
            <div className="flex flex-col gap-6">
                {/* Left Sidebar */}
                <div className="flex gap-10  items-center">
                    <div>
                        <Filter />
                    </div>
                    <div>
                        <DropBar />
                    </div>
                </div>
                {console.log(loading)
                }

                {/* Product Grid */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {loading ? (
                        <p className="text-gray-500 col-span-full text-center">Loading...</p>
                    ) : error ? (
                        <p className="text-red-500 col-span-full text-center">{error}</p>
                    ) : products.length > 0 ? (
                        products.map((element) => (
                            <div key={element.id} className="">
                                <ShoesCard
                                    productId={element.id}
                                    productName={element.name}
                                    productPrice={element.price}
                                    productImage={element.pic}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full text-center">No results found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopNow;
