import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

// Layouts
import RootLayout from "./Layouts/RootLayout.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import AddToCart from "./Pages/AddToCart.jsx";
import AddToFavorite from "./Pages/AddToFavorite.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Detail from "./Pages/Detail.jsx";
import Bycategory from "./Pages/Bycategory.jsx";

// Create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="add-to-cart" element={<AddToCart />} />
      <Route path="add-to-favorite" element={<AddToFavorite />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="product/:param" element={<Detail />} />
      <Route path="category/:category" element={<Bycategory />} />
    </Route>
  )
);

// App component
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
