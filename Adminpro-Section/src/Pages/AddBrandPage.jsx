import React from "react";
import AddProductHeader from "../Section/Product/AddProductHeader";
import AddBrand from "../Section/Product/AddBrand";

const AddBrandPage = () => {

  return (
    <div className="mt-10">
      <AddProductHeader
        btn1="New Product"
        btn2="New Category"
        btn3="New Color"
        btn4="New Detail"
        route1="addProduct"
        route2="addCategory"
        route3="addColor"
        route4="addDetail"

      />
      <AddBrand />
    </div>
  );
};

export default AddBrandPage;
