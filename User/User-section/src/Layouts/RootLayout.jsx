import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import AddToCart from "../Pages/AddToCart";
import { useSelector } from "react-redux";
import { useThemeContext } from "../Context/ThemeContext";
import { useEffect } from "react";

const RootLayout = () => {
  const stateTabCart = useSelector((store) => store.cart?.statusTab);
  const { theme } = useThemeContext();

  // Apply the dark class on the html or body element when theme is dark
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark"); // For dark mode
    } else {
      document.documentElement.classList.remove("dark"); // For light mode
    }
  }, [theme]);

  return (
    <div
      className={`min-h-screen flex flex-col ${theme ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <nav>
        <NavBar />
      </nav>
      <main
        className={`flex-1 max-w-full m-auto p-5 ${stateTabCart ? "opacity-50 pointer-events-none" : ""}`}
      >
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      {stateTabCart && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
          <AddToCart />
        </div>
      )}
    </div>
  );
};

export default RootLayout;
