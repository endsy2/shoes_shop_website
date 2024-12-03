import { Link, NavLink } from "react-router-dom";
import { hamburgerBar, logo } from "../assets";
import { nav_icon, nav_link } from "../Constants";
import { menubar } from "../Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../store/cart"; // Import the toggleStatusTab action

const NavBar = () => {
  const [totalQuatity, setTotalQuantity] = useState(0);
  const cart = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    cart.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [cart]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab()); // Dispatch the action to open the cart tab
  };

  return (
    <nav className="flex-col">
      <section className="grid grid-cols-2 py-7">
        <NavLink to="/" className="text-[white] px-10">
          <img src={logo} alt="logo" className="w-40" />
        </NavLink>
        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-5 py-1 w-56 mr-8 h-9"
          />
          <div className="flex gap-7 items-center">
            {nav_icon.map((element) => (
              element.label === "AddToCart" ? (
                <div
                  key={element.label}
                  className="w-12 h-12 rounded-full flex justify-center items-center relative max-xl:hidden"
                  onClick={handleOpenTabCart} // Add onClick event
                >
                  <img src={element.img} alt={element.label} className="w-8" />
                  <span className="absolute bottom-0 font-bold right-0 text-primary text-lg w-5 h-5 rounded-full flex justify-center items-center">
                    {totalQuatity}
                  </span>
                </div>
              ) : (
                <NavLink
                  key={element.label}
                  to={element.href}
                  className="max-xl:hidden"
                >
                  <img src={element.img} alt={element.label} className="w-8" />
                </NavLink>
              )
            ))}
          </div>
          <div className="mt-3 mx-7 flex gap-10">
            {nav_link.map((element) => (
              <NavLink
                key={element.label}
                to={element.href}
                className="text-[white]"
              >
                <label
                  className={`font-bold px-6 py-3 rounded-xl ${element.label === "Login"
                    ? "bg-primary text-[white] hover:bg-[#0A5561]"
                    : "bg-[white] text-[black] hover:text-[#9B9797]"
                    }`}
                >
                  {element.label}
                </label>
              </NavLink>
            ))}
          </div>
        </div>
        <NavLink to="menu">
          <img
            src={hamburgerBar}
            alt="hamburger"
            className="hidden max-xl:block w-10 mr-12"
          />
        </NavLink>
      </section>
      <section className="bg-lightGray w-full h-20">
        <ol className="flex justify-center items-center w-full h-20 gap-36 text-[white] text-xl">
          {menubar.map(({ label, items }) => (
            <li key={label} className="relative text-[white] group">
              {/* Menu Label */}
              <span className="cursor-pointer">{label}</span>
              {/* Dropdown Menu */}
              <div className="z-50 absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[350px] bg-lightGray border border-gray-200 shadow-md opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-200 p-4 rounded-sm">
                {/* Loop through items to display them */}
                <ul>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-3 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                    >
                      <Link to={`category/${item}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </nav>
  );
};

export default NavBar;
