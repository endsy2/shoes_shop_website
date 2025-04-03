import { useEffect, useState } from "react";
import { dashboardHeaderAll, dashboardHeaderData, logoutFetch } from "../../Fetch/FetchAPI";
import { dashBoradMain_item } from "../../Constants";
import Cookies from "js-cookie";

const DashBoardHeader = () => {
  const [selectDate, setSelectDate] = useState("ALL");
  const [mergedData, setMergedData] = useState([]);

  const fetchDate = async () => {
    try {
      const response = await dashboardHeaderData(selectDate);
      const data = response.data || [];
      const merged = data.data.map((value, index) => ({
        ...(value || {}),
        ...(dashBoradMain_item[index] || {}),
        date: selectDate,
      }));
      setMergedData(merged);
    } catch (error) {
      console.error("Error fetching date data:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await logoutFetch();
      Cookies.remove("token");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAll = async () => {
    try {
      const response = await dashboardHeaderAll();
      const data = response.data || [];
      const merged = data.data.map((value, index) => ({
        ...(value || {}),
        ...(dashBoradMain_item[index] || {}),
        date: "ALL",
      }));
      setMergedData(merged);
    } catch (error) {
      console.error("Error fetching all data:", error);
    }
  };

  useEffect(() => {
    if (selectDate === "ALL") {
      fetchAll();
    } else {
      fetchDate();
    }
  }, [selectDate]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="flex justify-between items-center p-2 bg-white shadow rounded-md mb-4">
        <div className="flex items-center w-1/2">
          <div className="flex items-center border p-2 rounded-md w-full">
            <span className="mr-2">🔍</span>
            <input type="text" placeholder="Search" className="w-full outline-none text-sm" />
          </div>
        </div>
        <button className="p-2 text-xl">🔔</button>
      </div>

      {/* Listing Overview Title */}
      <h2 className="text-3xl font-bold mb-4" style={{ color: "#168893" }}>
        📊 Listing Overview
      </h2>

      {/* Listing Overview Section */}
      <div className="p-4 bg-gray-200 shadow-md rounded-md mt-[-10px] flex">
        {/* Left: Sales Data (3 Rows, 2 Columns) */}
        <div className="w-2/3 grid grid-cols-2 gap-4">
          {[
            { label: "Today's Sales", value: "$37,541.00", percent: "+1.02%", up: true },
            { label: "Today's Earning", value: "$37,541.00", percent: "-1.02%", up: false },
            { label: "Average Order Value", value: "$37,541.00", percent: "+1.02%", up: true },
            { label: "Total Sales", value: "$37,541.00", percent: "-1.02%", up: false },
            { label: "Net Profit", value: "$12,345.00", percent: "+2.50%", up: true },
            { label: "Refunds", value: "$541.00", percent: "-0.80%", up: false },
          ].map((item, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-md text-center">
              <p className="text-sm text-gray-500 font-semibold">{item.label}</p>
              <h3 className="text-2xl font-bold text-black">{item.value}</h3>
              <p className={`${item.up ? "text-green-600" : "text-red-600"} font-bold`}>
                {item.up ? "▲" : "▼"} {item.percent}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Fake Sales Graph */}
        <div className="w-1/3 p-4 bg-white shadow rounded-md ml-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Overall Sales</h3>
            <select 
                  className="px-3 py-1 text-sm bg-white border rounded-md"
                  value={selectDate}
                  onChange={(e) => setSelectDate(e.target.value)}
                >
                  <option value="ALL">All Time</option>
                  <option value="TODAY">Today</option>
                  <option value="WEEK">This Week</option>
                  <option value="MONTH">This Month</option>
                </select>
          </div>
          <div className="h-80 bg-gray-200 flex justify-center items-center text-gray-500">
            📊 Fake Graph Here
          </div>
        </div>
      </div>

      {/* Best Selling Products Table */}
      <div className="mt-4 p-4 bg-white shadow rounded-md">
        <h3 className="text-xl font-semibold">Best Selling Product</h3>
        
        <table className="w-full border-collapse mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Product Name</th>
              <th className="p-2 text-left">Color</th>
              <th className="p-2 text-left">Size</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Brand</th>
              <th className="p-2 text-left">Sold Out</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 flex items-center pl-6">
                  <img src="/path/to/shoe.png" alt="Shoe" className="w-10 mr-2" /> Shoes Name
                </td>
                <td className="p-2 pl-12">Red/Black</td>
                <td className="p-2 pl-12">45/46</td>
                <td className="p-2 text-green-600 font-bold pl-12">$99.99</td>
                <td className="p-2 pl-12">Jordan</td>
                <td className="p-2 font-semibold pl-12">999,999</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Filters */}
        <div className="p-4 border-t flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-3 sm:mb-0">
            <span className="text-sm text-gray-600">
              Showing <span className="font-semibold">1-5</span> of <span className="font-semibold">24</span> products
            </span>
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border rounded-md text-sm bg-gray-100">Previous</button>
            {[1, 2, 3, 4, 5].map((num) => (
              <button 
                key={num}
                className={`px-3 py-1 border rounded-md text-sm ${num === 1 ? "bg-blue-100 border-blue-200" : "bg-white"}`}
              >
                {num}
              </button>
            ))}
            <button className="px-3 py-1 border rounded-md text-sm bg-gray-100">Next</button>
          </div>
        </div>
    </div>
  );
};

export default DashBoardHeader;
