import AddProductHeader from "../Section/Product/AddProductHeader";
import AddCategory from "../Section/Product/AddCategory";

const AddCategoryPage = () => {
  return (
    <div className="mt-16">
      <AddProductHeader
        btn1="New Product"
        btn2="New brand"
        route1="addProduct"
        route2="addBrand"
      />
      <AddCategory />
    </div>
  );
};

export default AddCategoryPage;
