import { ThemeContext } from "./Context/ThemeContext.jsx";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout.jsx";
import Home from "./Pages/Home.jsx";
import AddToFavorite from "./Pages/AddToFavorite.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Detail from "./Pages/Detail.jsx";
import Bycategory from "./Pages/Bycategory.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Profile from "./Pages/Profile.jsx";
import Search from "./Pages/Search.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="add-to-favorite" element={<AddToFavorite />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="product/:param" element={<Detail />} />
        <Route path="category/:category" element={<Bycategory />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route>
        <Route path="/" />
      </Route>
    </Route>
  )
);

export default function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}
