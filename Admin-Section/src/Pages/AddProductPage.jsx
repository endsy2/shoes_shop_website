import AddProduct from "../Section/Product/AddProduct";
import AddProductHeader from "../Section/Product/AddProductHeader";

const AddProductPage = () => {
  return (
    <div className="mt-[70px]">
      <section>
        <AddProductHeader
          btn1="New brand"
          btn2="New Category"
          route1="addBrand"
          route2="addCategory"
        />
      </section>
      <section>
        <AddProduct />
      </section>
    </div>
  );
};

export default AddProductPage;
