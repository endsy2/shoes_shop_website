import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { updateProductVariants } from "../../Fetch/FetchAPI";


const UpdateProductVariants = ({ product_id }) => {
    const location = useLocation();
    const [id, setID] = useState('');
    const [images, setImages] = useState([]);

    const [colors, setColors] = useState("#000000"); // Default to one color


    useEffect(() => {
        setID(product_id)
    }, [product_id])
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); // Convert FileList to Array
        setImages([...images, ...files]); // Append new files to the existing ones
    };

    const handleRemoveImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formdata = {
    //         images,
    //         price,
    //         colors,
    //         stock
    //     }
    //     try {
    //         const result = await addNewProductAPI(formdata, id);
    //         // console.log(formdata.colors);

    //         // console.log(formdata.images);

    //         // handleClear(); // Clear form after successful submission
    //         console.log(result);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const handleUpdate = async (e) => {

        e.preventDefault();
        const formdata = {
            images,

            colors,

        }
        try {
            const result = await updateProductVariants(formdata, id);
            window.location.reload();
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }


    const handleClear = () => {
        setImages([]);

        setColors(['']);


    }
    return (
        <div className="bg-white border-gray-300 border p-12 rounded-lg w-full max-w-9xl mx-auto mt-12 shadow-lg">
            <h1 className="text-center text-3xl text-primary font-bold mb-8">
                <h1>Update Product</h1>
            </h1>
            <form
                onSubmit={handleUpdate}
                className="grid grid-cols-1   xl:grid-cols-2 md:items-center gap-10 py-10 "
            >


                {/* Colors Section */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-primary mb-2">Colors</label>
                    <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
                        <div className="flex items-center gap-6">
                            {/* Color Picker */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={colors}
                                    onChange={(e) => setColors(e.target.value)}
                                    className="h-6 w-56 rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-primary mb-2">
                        Product Images
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple // This allows multiple files selection
                        onChange={handleImageChange}
                        className="h-10 w-full rounded-lg border border-gray-300 p-1 mb-2"
                    />
                    <div className="flex flex-wrap gap-4 mt-2">
                        {images.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Product Image ${index + 1}`}
                                    className="h-16 w-16 object-cover rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-0 right-0 text-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                </div>


                <div className=" w-full gap-4 mt-4 grid grid-cols-2 justify-center items-center">
                    <input
                        type="submit"
                        value="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
                    />
                    <button
                        type="button"
                        onClick={(e) => handleClear(e)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition"
                    >
                        Clear
                    </button>
                </div>
            </form >
        </div >
    );
};

export default UpdateProductVariants;
