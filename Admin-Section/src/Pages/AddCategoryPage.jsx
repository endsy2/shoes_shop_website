import AddProductHeader from "../Section/Product/AddProductHeader";
import AddCategory from "../Section/Product/AddCategory";

const AddCategoryPage = () => {
  return (
    <div className="mt-10">
      <AddProductHeader
        btn1="New Product"
        btn2="New brand"
        btn4="New Detail"
        btn3="New Color"
        route1="addProduct"
        route2="addBrand"
        route3="addColor"
        route4="addDetail"
      />
      <AddCategory />
    </div>
  );
};

export default AddCategoryPage;
