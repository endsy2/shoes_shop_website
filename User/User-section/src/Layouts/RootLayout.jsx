import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import AddToCart from "../Pages/AddToCart";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const stateTabCart = useSelector(store => store.cart.statusTab)
  return (
    <div className="bg-[black] min-h-screen w-full">
      <nav>
        <NavBar />
      </nav>
      <main className={`w-[1400px] max-w-full m-auto p-5 transform 
      transition-transform duration-500 ${stateTabCart === false ? "" : "-translate-x-2 opacity-55"}
      `}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <AddToCart />

    </div>
  );
};


export default RootLayout;
