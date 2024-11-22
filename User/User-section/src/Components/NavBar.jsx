import { NavLink } from "react-router-dom";
import { hamburgerBar, logo } from "../assets";
import { nav_icon, nav_link } from "../Constants";
import { menubar } from "../Constants";

const NavBar = () => {
  return (
    <>
      <nav className="flex-col">
        <section className="flex justify-between items-center px-14 py-10">
          <NavLink to="/" className="text-white">
            <img src={logo} alt="logo" />
          </NavLink>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-5 py-1 w-[650px] h-12"
          />
          <div className="flex gap-10">
            {nav_icon.map((element) => (
              <NavLink
                key={element.label}
                to={element.href}
                className="max-xl:hidden"
              >
                <img src={element.img} alt={element.label} className="w-12" />
              </NavLink>
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
                  className={`font-bold px-7 py-4 rounded-xl ${
                    element.label === "Login"
                      ? "bg-primary text-[white] hover:bg-[#0A5561]"
                      : "bg-[white] text-[black] hover:text-[#9B9797]"
                  }`}
                >
                  {element.label}
                </label>
              </NavLink>
            ))}
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
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[350px] bg-lightGray border border-gray-200 shadow-md opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-200 p-4 rounded-sm">
                  {/* Loop through items to display them */}
                  <ul>
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                      >
                        <a href={item}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
