import React from "react";
import AddProductHeader from "../Section/Product/AddProductHeader";
import AddBrand from "../Section/Product/AddBrand";

const AddBrandPage = () => {
  return (
    <div className="mt-16">
      <AddProductHeader
        btn1="New Product"
        btn2="New Category"
        route1="addProduct"
        route2="addCategory"
      />
      <AddBrand />
    </div>
  );
};

export default AddBrandPage;
