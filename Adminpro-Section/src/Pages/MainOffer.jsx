import { useEffect, useState } from "react";

const MainOffer = () => {
    // State management
    const [discount, setDiscount] = useState(50);
    const [basePrice, setBasePrice] = useState(500);
    const [savedProducts, setSavedProducts] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const [startDate, setStartDate] = useState("2025-04-01");
    const [endDate, setEndDate] = useState("2025-04-30");
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [searchTerm, setSearchTerm] = useState("");
    
    // Sample shoe data with image placeholders
    const allShoes = Array(15).fill(0).map((_, i) => ({
        id: i + 1,
        name: `Shoe Model ${i + 1}`,
        price: `${Math.floor(Math.random() * 900) + 100}$`,
        brand: ["Nike", "Adidas", "Puma", "Reebok"][Math.floor(Math.random() * 4)],
        start: `01.0${(i % 3) + 1}.2025`,
        end: `01.0${(i % 3) + 2}.2025`,
        image: `https://source.unsplash.com/random/100x100/?shoe,${i + 1}`
    }));

    // Filter shoes based on search term
    const filteredShoes = allShoes.filter(shoe => 
        shoe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shoe.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredShoes.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredShoes.length / itemsPerPage);

    // Image upload handler with drag and drop support
    const handleImageUpload = (e) => {
        const file = e.target.files?.[0] || e.dataTransfer?.files?.[0];
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Drag and drop handlers
    const handleDragOver = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('border-blue-500');
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove('border-blue-500');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove('border-blue-500');
        handleImageUpload(e);
    };

    // Save/unsave product handlers
    const handleSaveProduct = () => {
        if (!savedProducts.includes(1)) {
            setSavedProducts([...savedProducts, 1]);
        }
    };

    const handleUnsaveProduct = () => {
        setSavedProducts(savedProducts.filter(id => id !== 1));
    };

    const isProductSaved = savedProducts.includes(1);

    // Calculate discounted price
    const discountedPrice = basePrice * (1 - discount / 100);

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                {/* Sidebar Filters - Collapsible on mobile */}
                <div className="bg-white p-6 rounded-3xl shadow-lg lg:col-span-1 flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Filter Options</h3>
                    
                    <div>
                        <label className="font-semibold block mb-1">Add Price ($)</label>
                        <input
                            type="number"
                            value={basePrice}
                            onChange={(e) => setBasePrice(Number(e.target.value))}
                            className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            min="0"
                            step="1"
                        />
                    </div>
                    
                    <div>
                        <label className="font-semibold block mb-1">Product Discount: {discount}%</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={discount}
                            onChange={e => setDiscount(Number(e.target.value))}
                            className="w-full accent-blue-500"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>0%</span>
                            <span>50%</span>
                            <span>100%</span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="font-semibold block mb-1">Start Date</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={e => setStartDate(e.target.value)}
                                className="p-2 border rounded-xl w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="font-semibold block mb-1">End Date</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={e => setEndDate(e.target.value)}
                                className="p-2 border rounded-xl w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Card - Responsive layout */}
                <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/3 flex flex-col items-center gap-4 mb-6 md:mb-0">
                        {imagePreview ? (
                            <div className="relative group">
                                <img
                                    src={imagePreview}
                                    alt="Uploaded preview"
                                    className="rounded-xl w-48 h-48 object-contain border-2 border-dashed border-gray-300"
                                />
                                <button 
                                    onClick={() => setImagePreview(null)}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                    aria-label="Remove image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <div 
                                className="relative w-48 h-48 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-blue-500 transition-colors"
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <div className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="text-gray-400 text-sm">Drag & drop or click to upload</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>
                        )}
                        <p className="text-red-500 font-medium flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            UNAVAILABLE
                        </p>
                    </div>
                    <div className="w-full md:w-2/3 md:pl-6">
                        <h2 className="text-2xl font-bold mb-1">FS - Nike Air Max 270</h2>
                        <p className="text-gray-600 mb-4">Premium running shoes with Max Air cushioning for maximum comfort and style.</p>
                        
                        <div className="flex items-center gap-4 mb-4 flex-wrap">
                            <p className="text-xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</p>
                            <p className="text-lg text-gray-500 line-through">${basePrice}</p>
                            <p className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                                {discount}% Off
                            </p>
                        </div>
                        
                        <div className="mb-4">
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span>Restocking soon - limited quantities available</span>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 flex-wrap">
                            <button 
                                onClick={handleSaveProduct}
                                className={`px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2 ${
                                    isProductSaved 
                                        ? "bg-gray-400 text-white cursor-not-allowed" 
                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}
                                disabled={isProductSaved}
                            >
                                {isProductSaved ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Saved
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                        </svg>
                                        Save Product
                                    </>
                                )}
                            </button>
                            <button 
                                onClick={handleUnsaveProduct}
                                className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Unsave Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product History Table with Pagination */}
            <div className="bg-white p-6 rounded-3xl shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Product History
                    </h2>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                        <div className="relative w-full sm:w-64">
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                className="p-2 pl-10 border rounded-xl w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 w-full sm:w-auto justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Export
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3 font-semibold">Product</th>
                                <th className="p-3 font-semibold">ID</th>
                                <th className="p-3 font-semibold">Price</th>
                                <th className="p-3 font-semibold">Brand</th>
                                <th className="p-3 font-semibold">Start</th>
                                <th className="p-3 font-semibold">End</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.length > 0 ? (
                                currentItems.map((shoe) => (
                                    <tr key={shoe.id} className="border-t hover:bg-gray-50">
                                        <td className="p-3 flex items-center gap-3">
                                            <div className="relative">
                                                <img 
                                                    src={shoe.image} 
                                                    alt={shoe.name}
                                                    className="w-12 h-12 object-cover rounded"
                                                    onError={(e) => {
                                                        e.target.onerror = null; 
                                                        e.target.src = "/src/Assets/download.png";
                                                    }}
                                                />
                                                {shoe.brand === "Nike" && (
                                                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1 rounded-full">N</span>
                                                )}
                                            </div>
                                            <span className="font-medium">{shoe.name}</span>
                                        </td>
                                        <td className="p-3 text-gray-600">#{shoe.id}</td>
                                        <td className="p-3 text-green-600 font-semibold">{shoe.price}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                shoe.brand === "Nike" ? "bg-blue-100 text-blue-800" :
                                                shoe.brand === "Adidas" ? "bg-black text-white" :
                                                shoe.brand === "Puma" ? "bg-red-100 text-red-800" :
                                                "bg-gray-100 text-gray-800"
                                            }`}>
                                                {shoe.brand}
                                            </span>
                                        </td>
                                        <td className="p-3 text-gray-600">{shoe.start}</td>
                                        <td className="p-3 text-gray-600">{shoe.end}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center text-gray-500">
                                        No products found matching your search
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {filteredShoes.length > 0 && (
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
                        <div className="text-sm text-gray-600 mb-2 sm:mb-0">
                            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredShoes.length)} of {filteredShoes.length} shoes
                        </div>
                        <div className="flex items-center space-x-1">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-3 py-1 rounded flex items-center ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">Previous</span>
                            </button>
                            
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                // Show limited page numbers with ellipsis for many pages
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = currentPage - 2 + i;
                                }

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`px-3 py-1 rounded ${currentPage === pageNum ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}

                            {totalPages > 5 && currentPage < totalPages - 2 && (
                                <span className="px-2">...</span>
                            )}

                            {totalPages > 5 && currentPage < totalPages - 2 && (
                                <button
                                    onClick={() => setCurrentPage(totalPages)}
                                    className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                >
                                    {totalPages}
                                </button>
                            )}
                            
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-1 rounded flex items-center ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                            >
                                <span className="mr-1">Next</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainOffer;