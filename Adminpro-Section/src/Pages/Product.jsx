import { useState } from "react";

const Product = () => {
  // Sample product data
  const products = [
    { id: '001', name: 'iPhone 13', category: 'Phone', inventory: 11, price: 10005, checked: false },
    { id: '002', name: 'Samsung Galaxy', category: 'Phone', inventory: 8, price: 8999, checked: false },
    { id: '003', name: 'MacBook Pro', category: 'Laptop', inventory: 5, price: 24999, checked: false },
    { id: '004', name: 'AirPods Pro', category: 'Accessories', inventory: 22, price: 2499, checked: false },
    { id: '005', name: 'iPad Air', category: 'Tablet', inventory: 7, price: 12999, checked: false },
    { id: '006', name: 'Apple Watch', category: 'Wearable', inventory: 14, price: 8999, checked: false },
  ];

  const [productData, setProductData] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortMethod, setSortMethod] = useState('Default');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and sort products
  const filteredProducts = productData
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortMethod === 'Price Low-High') return a.price - b.price;
      if (sortMethod === 'Price High-Low') return b.price - a.price;
      if (sortMethod === 'Inventory') return b.inventory - a.inventory;
      return 0;
    });

  // Toggle product selection
  const toggleCheck = (id) => {
    setProductData(products.map(product => 
      product.id === id ? {...product, checked: !product.checked} : product
    ));
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Product Code', 'Product Name', 'Category', 'Inventory', 'Price'];
    const csvContent = [
      headers.join(','),
      ...filteredProducts.map(product => 
        [product.id, product.name, product.category, product.inventory, product.price].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'product_inventory.csv';
    link.click();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Product Inventory</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-gray-500">Total Product</h3>
          <p className="text-2xl font-bold">80</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-gray-500">Out Of Stock</h3>
          <p className="text-2xl font-bold text-red-500">2</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-gray-500">Total Items</h3>
          <p className="text-2xl font-bold">180</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-gray-500">Categories</h3>
          <p className="text-2xl font-bold">30</p>
        </div>
      </div>

      {/* Category and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold">Category:</h2>
          <select 
            className="border rounded-md px-3 py-1"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="Tablet">Tablet</option>
            <option value="Accessories">Accessories</option>
            <option value="Wearable">Wearable</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold">Sort By:</h2>
          <select 
            className="border rounded-md px-3 py-1"
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
          >
            <option value="Default">Default</option>
            <option value="Price Low-High">Price Low-High</option>
            <option value="Price High-Low">Price High-Low</option>
            <option value="Inventory">Inventory</option>
          </select>
        </div>
      </div>

      {/* Product Inventory Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Product Inventory</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="SEARCH..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
            Export
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inventory</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={product.checked}
                      onChange={() => toggleCheck(product.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3"
                    />
                    {product.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    product.inventory < 5 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {product.inventory}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;