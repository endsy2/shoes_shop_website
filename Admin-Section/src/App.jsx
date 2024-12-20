import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./Pages/Root/RootLayOut";
import DashBorad from "./Pages/DashBorad";
import Order from "./Pages/Order/Order";
import Product from "./Pages/Product";
import Offer from "./Pages/Offer";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import AuthLayOut from "./Pages/Root/AuthLayOut";
import Order_By_ID from "./Pages/Order/Order_By_ID";
import AddProductPage from "./Pages/AddProductPage";
import AddBrandPage from "./Pages/AddBrandPage";
import AddCategoryPage from "./Pages/AddCategoryPage";
import MainOffer from "./Pages/MainOffer";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthLayOut />} >
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<RootLayOut />}>
        <Route index element={<DashBorad />} />
        <Route path="order" element={<Order />} />
        <Route path="order/:id" element={<Order_By_ID />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<Offer />} />
        <Route path="addProduct" element={<AddProductPage />} />
        <Route path="addBrand" element={<AddBrandPage />} />
        <Route path="addCategory" element={<AddCategoryPage />} />
        <Route path="offer" element={<MainOffer />} />
        <Route path="offer/:id" element={<Offer />} />
      </Route>

    </>
  ),
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
