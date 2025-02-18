import { NavLink, useLocation, Outlet } from "react-router-dom";
import { hambugerBar, logo } from "../../Assets";
import { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { VscSymbolMethod } from "react-icons/vsc";
import { MdAssignmentAdd } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";

// Navigation Items
export const nav_bar = [
  { img: <LuLayoutDashboard className="text-primary text-xl" />, label: "Dashboard", path: "" },
  { img: <FaShoppingCart className="text-primary text-xl" />, label: "Order", path: "order" },
  { img: <VscSymbolMethod className="text-primary text-xl" />, label: "Product", path: "product" },
  { img: <MdAssignmentAdd className="text-primary text-xl" />, label: "Add Product", path: "addProduct" },
  { img: <RiDiscountPercentFill className="text-primary text-xl" />, label: "Promotion", path: "offer" },
];

const RootLayOut = () => {
  // const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="flex max-lg:flex-row max-lg:justify-between flex-col p-6 w-80 bg-white shadow-lg lg:w-72 max-lg:w-full max-lg:border-b-2 lg:border-r-2">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <NavLink to="/">
            <img src={logo} alt="App logo" className="w-40 lg:w-44" />
          </NavLink>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="flex items-center justify-center lg:hidden mb-4"
          onClick={() => setToggleMenu(!toggleMenu)}
          aria-label="Toggle menu"
        >
          <img src={hambugerBar} alt="Menu button" className="w-11 h-14" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-col gap-4">
          {nav_bar.map(({ img, label, path }) => (
            <NavLink
              key={label}
              to={`/dashboard/${path}`}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""
                }`
              }
            >
              {img}
              <span className="green-txt">{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-gray-800 bg-opacity-50 lg:hidden"
          onClick={() => setToggleMenu(false)} // Close menu on overlay click
        >
          <div
            className="w-64 bg-white h-full shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing on content click
          >
            <nav className="flex flex-col gap-4 p-6">
              {nav_bar.map(({ img, label, path }) => (
                <NavLink
                  key={label}
                  to={`/dashboard/${path}`}
                  onClick={() => setToggleMenu(false)} // Close menu on navigation
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""
                    }`
                  }
                >
                  {img}
                  <span className="green-txt">{label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="flex-auto p-6 ml-2">
        <Outlet />
      </section>
    </main>
  );
};

export default RootLayOut;
