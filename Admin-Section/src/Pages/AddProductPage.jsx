import AddProduct from "../Section/Product/AddProduct";
import AddProductHeader from "../Section/Product/AddProductHeader";

const AddProductPage = () => {
  return (
    <div className="mt-10">
      <section>
        <AddProductHeader
          btn1="New brand"
          btn2="New Category"
          btn3="New Color"
          btn4="New Detail"
          route1="addBrand"
          route2="addCategory"
          route3="addColor"
          route4="addDetail"
        />
      </section>
      <section>
        <AddProduct />
      </section>
    </div>
  );
};

export default AddProductPage;
