import { useEffect, useState } from "react";
import { trash } from "../Assets";
import { tableHeadProduct } from "../Constants";
import { Link, useLocation } from "react-router-dom";
import { productByID, removeOneFetch, searchFetchByCategory, } from "../Fetch/FetchAPI.js";

const TableProduct = ({ title, items, category }) => {
  const [datatable, setDataTable] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]); // Track selected row IDs
  const [searchData, setSearchData] = useState("");
  const [Category, setCategory] = useState('');
  const location = useLocation();

  useEffect(() => {
    setDataTable(items);
    setCategory(category);
  }, [items]);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    if (newSelectAll) {
      const allIds = datatable?.data?.map((item) => item.phone_id) || [];
      setSelectedRows(allIds);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleRemove = async (id) => {
    try {
      await removeOneFetch({ deleteid: id });
      setDataTable((prev) => ({
        ...prev,
        data: prev.data.filter((item) => item.phone_id !== id),
      }));
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  };

  const handleSelectRemove = async (e) => {
    e.preventDefault();
    try {
      // Loop through each selected row ID and remove it using the removeOneFetch function
      for (const id of selectedRows) {
        await removeOneFetch({ deleteid: id });
      }

      // Update the data table to remove the deleted rows
      setDataTable((prev) => ({
        ...prev,
        data: prev.data.filter((item) => !selectedRows.includes(item.phone_id)),
      }));

      // Reset selection states
      setSelectedRows([]);
      setSelectAll(false);
    } catch (error) {
      console.error("Error deleting selected rows:", error);
    }
  };


  const searchDataFetchByCategory = async () => {
    try {
      const data = await searchFetchByCategory({ searchData, Category });
      // console.log(Category);
      setSearchData('');
      setDataTable(data);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  const searchDataFetchByName = async () => {
    try {
      const data = await productByID(searchData);
      setSearchData('')
      setDataTable(data);
    } catch (error) {
      console.log(error);

    }
  }
  const handleSearchByCategory = (e) => {
    e.preventDefault();
    searchDataFetchByCategory();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchDataFetchByName();
  }
  const handleExport = () => {
    console.log("Exporting rows:", selectedRows);
    // Add export logic here
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };


  return (
    <section className="mt-16 bg-white rounded-lg p-6 sm:p-10 shadow-lg border border-gray-400">
      <section className="flex flex-col sm:flex-row justify-between mx-4 sm:mx-10 mb-5 sm:mb-10">
        {console.log(items)
        }
        <h1 className="green-text mt-4 sm:mt-10 font-semibold text-lg lg:text-3xl">
          {title}
        </h1>

        <form className="flex gap-2 sm:gap-10 items-center mt-3 sm:mt-10">
          <input
            type="text"
            placeholder="Search..."
            className="input-style text-sm sm:text-base"
            onChange={(e) => setSearchData(e.target.value)}
            value={searchData}
          />
          <button
            className="green-btn h-10 sm:h-12 w-[100px] sm:w-[150px] text-sm sm:text-base"
            onClick={location.pathname === '/dashboard' ? handleSearch : handleSearchByCategory}

          >
            Search
          </button>
          <button
            className="green-btn h-10 sm:h-12 w-[100px] sm:w-[150px] text-sm sm:text-base"
            onClick={handleExport}
          >
            Export
          </button>
        </form>
      </section>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-DarkLightGray text-white border-b-2 border-gray-300">
              {tableHeadProduct.map((header, index) => (
                <th
                  key={index}
                  className={`table-data text-sm sm:text-xl px-4 sm:px-6 py-3 sm:py-4 ${index === 0 ? "rounded-l-lg" : ""
                    } border-r border-gray-200`}
                >
                  {header === "ID" ? (
                    <>
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 border-2 border-white rounded"
                      />
                      {header}
                    </>
                  ) : (
                    header
                  )}
                </th>
              ))}
              <th className="rounded-r-lg text-sm sm:text-lg px-4 sm:px-6 py-3 sm:py-4 border-l border-gray-200">
                <p><button onClick={(e) => handleSelectRemove(e)}><img
                  src={trash}
                  alt="Delete"
                  className="cursor-pointer max-w-[25px] max-h-[25px] sm:max-w-[30px] sm:max-h-[30px]"
                /></button></p>
              </th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(datatable?.data) && datatable.data.length > 0 ? (
              datatable.data.map((element) => (
                <tr
                  key={element.phone_id}
                  className="hover:bg-gray-50 transition duration-200 border-b border-gray-200"
                >
                  <td className="table-data px-4 sm:px-6 py-3 sm:py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(element.phone_id)}
                      onChange={() => handleRowSelect(element.phone_id)}
                      className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5"
                    />
                    <Link
                      to={`/dashboard/productByName?phone_name=${element.name}`}
                      className="hover:underline text-sm sm:text-base"
                    >
                      {element.phone_id}
                    </Link>
                  </td>
                  <td className="table-data px-4 sm:px-6 py-3 sm:py-4">
                    <Link
                      to={`/dashboard/productByName?phone_name=${element.name}`}
                      className="hover:underline text-sm sm:text-base"
                    >
                      {element.name}
                    </Link>
                  </td>
                  <td className="table-data px-4 sm:px-6 py-3 sm:py-4">
                    <Link
                      to={`/dashboard/productByName?phone_name=${element.name}`}
                      className="hover:underline text-sm sm:text-base"
                    >
                      {element.category_name}
                    </Link>
                  </td>
                  <td className="table-data px-4 sm:px-6 py-3 sm:py-4">
                    <Link
                      to={`/dashboard/productByName?phone_name=${element.name}`}
                      className="hover:underline text-sm sm:text-base"
                    >
                      {element.price}
                    </Link>
                  </td>
                  <td className="table-data px-4 sm:px-6 py-3 sm:py-4">
                    <Link
                      to={`/dashboard/productByName?phone_name=${element.name}`}
                      className="hover:underline text-sm sm:text-base"
                    >
                      {element.stock}
                    </Link>
                  </td>
                  <td className="table-data px-4 sm:px-6 py-3 sm:py-4">
                    <Link
                      to={`/dashboard/productByName?phone_name=${element.name}`}
                      className="hover:underline text-sm sm:text-base"
                    >
                      {formatDate(element.release_date)}
                    </Link>
                  </td>
                  <td className="table-data flex justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
                    <button
                      onClick={() => handleRemove(element.phone_id)}
                      className="flex"
                    >
                      <img
                        src={trash}
                        alt="Remove"
                        className="w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 object-contain"
                      />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center text-sm sm:text-base py-6">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableProduct;