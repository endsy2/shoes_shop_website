import { useState } from "react";

const Product = () => {
  // Sample shoe data organized by brand categories
  const allShoes = [
    { id: 'NK001', name: 'Air Jordan 1', brand: 'Nike', size: 'US 9', color: 'Black/Red', inventory: 15, price: 180, checked: false },
    { id: 'NK002', name: 'Air Force 1', brand: 'Nike', size: 'US 10', color: 'White', inventory: 8, price: 110, checked: false },
    { id: 'AD001', name: 'Superstar', brand: 'Adidas', size: 'US 8', color: 'White/Black', inventory: 22, price: 90, checked: false },
    { id: 'AD002', name: 'Ultraboost', brand: 'Adidas', size: 'US 9', color: 'Black', inventory: 5, price: 180, checked: false },
    { id: 'PM001', name: 'RS-X', brand: 'Puma', size: 'US 10', color: 'Blue/Red', inventory: 12, price: 120, checked: false },
    { id: 'PM002', name: 'Suede Classic', brand: 'Puma', size: 'US 9', color: 'Black', inventory: 7, price: 85, checked: false },
    { id: 'NB001', name: '550', brand: 'New Balance', size: 'US 8', color: 'White/Green', inventory: 9, price: 130, checked: false },
    { id: 'NB002', name: '990v5', brand: 'New Balance', size: 'US 10', color: 'Grey', inventory: 4, price: 175, checked: false },
    { id: 'CV001', name: 'Chuck Taylor', brand: 'Converse', size: 'US 9', color: 'Black', inventory: 18, price: 65, checked: false },
    { id: 'CV002', name: 'One Star', brand: 'Converse', size: 'US 8', color: 'Yellow', inventory: 3, price: 80, checked: false },
    { id: 'VN001', name: 'Old Skool', brand: 'Vans', size: 'US 9', color: 'Black/White', inventory: 14, price: 70, checked: false },
    { id: 'VN002', name: 'Sk8-Hi', brand: 'Vans', size: 'US 10', color: 'Red', inventory: 6, price: 75, checked: false },
  ];

  const [productData, setProductData] = useState(allShoes);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortMethod, setSortMethod] = useState('Default');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter and sort shoes
  const filteredShoes = allShoes
    .filter(shoe => 
      (selectedBrand === 'All' || shoe.brand === selectedBrand) &&
      (shoe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shoe.id.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortMethod === 'Price Low-High') return a.price - b.price;
      if (sortMethod === 'Price High-Low') return b.price - a.price;
      if (sortMethod === 'Inventory') return b.inventory - a.inventory;
      if (sortMethod === 'Name A-Z') return a.name.localeCompare(b.name);
      if (sortMethod === 'Name Z-A') return b.name.localeCompare(a.name);
      return 0;
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredShoes.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredShoes.slice(indexOfFirstItem, indexOfLastItem);

  // Toggle shoe selection
  const toggleCheck = (id) => {
    setProductData(allShoes.map(shoe => 
      shoe.id === id ? {...shoe, checked: !shoe.checked} : shoe
    ));
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Brand', 'Size', 'Color', 'Inventory', 'Price'];
    const csvContent = [
      headers.join(','),
      ...filteredShoes.map(shoe => 
        [shoe.id, shoe.name, shoe.brand, shoe.size, shoe.color, shoe.inventory, shoe.price].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'shoe_inventory.csv';
    link.click();
  };

  // Calculate summary numbers
  const totalProducts = allShoes.length;
  const outOfStock = allShoes.filter(shoe => shoe.inventory === 0).length;
  const totalItems = allShoes.reduce((sum, shoe) => sum + shoe.inventory, 0);
  const brands = [...new Set(allShoes.map(shoe => shoe.brand))].length;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Shoe Inventory Management</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-gray-500">Total Models</h3>
          <p className="text-2xl font-bold">{totalProducts}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-gray-500">Out Of Stock</h3>
          <p className="text-2xl font-bold text-red-500">{outOfStock}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-gray-500">Total Pairs</h3>
          <p className="text-2xl font-bold">{totalItems}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-gray-500">Brands</h3>
          <p className="text-2xl font-bold">{brands}</p>
        </div>
      </div>

      {/* Brand and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold">Brand:</h2>
          <select 
            className="border rounded-md px-3 py-1"
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">All Brands</option>
            {[...new Set(allShoes.map(shoe => shoe.brand))].map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold">Sort By:</h2>
          <select 
            className="border rounded-md px-3 py-1"
            value={sortMethod}
            onChange={(e) => {
              setSortMethod(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="Default">Default</option>
            <option value="Price Low-High">Price: Low to High</option>
            <option value="Price High-Low">Price: High to Low</option>
            <option value="Inventory">Inventory Level</option>
            <option value="Name A-Z">Name: A to Z</option>
            <option value="Name Z-A">Name: Z to A</option>
          </select>
        </div>
      </div>

      {/* Shoe Inventory Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Shoe Inventory</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="SEARCH BY NAME OR ID..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <svg
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            onClick={exportToCSV}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium ml-4 whitespace-nowrap"
          >
            Export to CSV
          </button>
        </div>
      </div>

      {/* Shoe Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shoe Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Color</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price ($)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((shoe) => (
              <tr key={shoe.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={shoe.checked}
                    onChange={() => toggleCheck(shoe.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shoe.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shoe.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    shoe.brand === 'Nike' ? 'bg-blue-100 text-blue-800' :
                    shoe.brand === 'Adidas' ? 'bg-black-100 text-black-800' :
                    shoe.brand === 'Puma' ? 'bg-red-100 text-red-800' :
                    shoe.brand === 'New Balance' ? 'bg-gray-100 text-gray-800' :
                    shoe.brand === 'Converse' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {shoe.brand}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shoe.size}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shoe.color}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    shoe.inventory === 0 ? 'bg-red-100 text-red-800' :
                    shoe.inventory < 5 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {shoe.inventory} {shoe.inventory === 1 ? 'pair' : 'pairs'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">${shoe.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 mb-2 sm:mb-0">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredShoes.length)} of {filteredShoes.length} shoes
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;