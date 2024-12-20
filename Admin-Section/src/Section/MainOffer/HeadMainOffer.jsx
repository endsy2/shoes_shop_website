
import { useEffect, useState } from "react";
import { offer_header } from "../../Constants";
import { insertPromotion } from "../../Fetch/FetchAPI";

const HeadMainOffer = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState(
        offer_header.reduce((acc, field) => {
            acc[field.dbLabel] = ""; // Initialize each field with an empty string
            return acc;
        }, {})
    );

    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target; // Use id to identify the field
        setFormData((prev) => ({
            ...prev,
            [id]: value, // Update the corresponding field in the state
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await insertPromotion({ formData: formData });
        if (response.length !== 0) {
            window.location.reload();
        }
        console.log("Submitted Data:", response);
        // Add your submission logic here (e.g., API call)
    };

    return (
        <div className="p-6">
            {console.log(formData)}
            <section className="max-w-4xl mx-auto">
                <h1 className="green-title mb-20 green-text font-semibold text-center">
                    Offer Discount
                </h1>
                <form
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    onSubmit={handleSubmit}
                >
                    {offer_header.map((element, index) => (
                        <FormField
                            key={index}
                            id={element.dbLabel} // Use dbLabel as the input ID
                            label={element.label}
                            value={formData[element.dbLabel]} // Bind value to dbLabel
                            onChange={handleInputChange}
                            type={["start_date", "end_date"].includes(element.dbLabel) ? "date" : "text"} // Conditionally set input type
                        />
                    ))}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
                        <input
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition"
                            value="Submit"
                        />
                    </div>
                </form>
            </section>
        </div>
    );
};

const FormField = ({ id, label, value, onChange, type }) => (
    <div className="flex flex-col items-start">
        <label htmlFor={id} className="text-sm font-medium text-primary mb-2">
            {label}
        </label>
        <input
            type={type} // Dynamically set input type
            id={id} // Use dbLabel as the input ID
            value={value} // Bind the input value to the corresponding state
            onChange={onChange} // Call the onChange handler
            className="input-style h-12 w-full px-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-0 transition"
            aria-label={label}
        />
    </div>
);

export default HeadMainOffer;
