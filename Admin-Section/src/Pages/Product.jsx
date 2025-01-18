import { useEffect, useState } from "react";
import TableProduct from "../Component/TableProduct";
import ProductCaterogy from "../Section/Product-Conponent/ProductCaterogy";
import ProductHeader from "../Section/Product-Conponent/ProductHeader";
import ProductNumber from "../Section/Product-Conponent/ProductNumber";
// import { productData } from "../Fetch/FetchAPI.js";

const Product = () => {



  return (
    <main className="mt-32 ">
      <ProductHeader />
      <ProductNumber />
      <ProductCaterogy />

    </main>
  );
};

export default Product;
