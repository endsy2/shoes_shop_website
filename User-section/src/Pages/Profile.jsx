import React, { useState } from 'react';
import { profile } from '../assets';
import { order, tableHeadOffer } from '../Constants';
import { MdDelete } from 'react-icons/md';

const Profile = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedRows([]); // Deselect all rows
        } else {
            setSelectedRows(order.map((item) => item.orderID)); // Select all rows
        }
        setSelectAll((prev) => !prev);
    };

    const handleRowSelect = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    return (
        <div className="m-10 mx-10 flex flex-wrap gap-10">
            <div
                className="bg-primary-600 w-full flex items-center rounded-xl"
                style={{
                    backgroundImage: `url(${profile})`,
                    height: '340px',
                    width: '400px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-head ml-10">HELLO USERNAME</h1>
            </div>
            <div className="flex flex-col border-2 border-primary-600 text-primary-600 rounded-xl px-10 py-6">
                <div className="flex gap-10 justify-between">
                    <h1 className="text-head text-primary ">ORDER</h1>
                    <select
                        name="data"
                        id="data"
                        className="p-2 border w-36 h-10 border-gray-300 border-primary-600  text-primary-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Today">Date: Today</option>
                        <option value="30">Date: 30 AGO</option>
                        <option value="60">Date: 60 AGO</option>
                    </select>
                </div>
                <div className="flex flex-col mt-4">
                    {/* Header */}
                    <div className="grid grid-cols-5 border-b-2 border-primary-600 font-bold">
                        {tableHeadOffer.map((header, index) => (
                            <div
                                key={index}
                                className={`p-2 ${header === "ID" ? "w-32" : 'w-32'} text-center text-primary-600`}
                            >
                                {header === "ID" ? (
                                    <div className='flex justify-center'>
                                        <input
                                            type="checkbox"
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                            className="mr-2"
                                        />
                                        {header}
                                    </div>
                                ) : (
                                    header
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Rows */}
                    <div>
                        {order.map((element, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-5 border-b dark:text-primary-600 border-gray-300 text-center"
                            >
                                <div className="p-2 flex justify-center ">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(element.orderID)}
                                        onChange={() => handleRowSelect(element.orderID)}

                                    />
                                    <div className="p-2 flex items-center justify-center">{element.orderID}</div>
                                </div>

                                <div className="p-2 flex items-center justify-center">{element.created}</div>
                                <div className="p-2 flex items-center justify-center">{element.amount}</div>
                                <div className="p-2 flex items-center justify-center">{element.discount}</div>
                                <div className="p-2 flex gap-2 items-center justify-center ml-7"><p>{element.status} </p> </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
