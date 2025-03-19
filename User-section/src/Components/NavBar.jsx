import { NavLink, useNavigate } from "react-router-dom";
import { addToCartIconBlack, addToFavoriteWhiteIcon, darkMode, hamburgerBar, heartBlack, heartFill, heartFillBlack, lightMode, logo } from "../assets";
import { nav_icon, nav_link } from "../Constants";
import { menubar } from "../Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../store/cart"; // Import the toggleStatusTab action
import { useThemeContext } from "../Context/ThemeContext";
import { IoPersonOutline, IoPersonSharp } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [totalQuatity, setTotalQuantity] = useState(0);
  const cart = useSelector(store => store.cart.items);
  const favorite = useSelector(store => store.favorite.favorite);
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleHeart, setToggleHeart] = useState(false);
  const { theme, setTheme } = useThemeContext();
  const [searchData, setSearchData] = useState('');
  const navigate = useNavigate();

  const handleToggleHeart = () => {
    if (favorite.length > 0) {
      setToggleHeart(true);
    } else {
      setToggleHeart(false);
    }
  };

  useEffect(() => {
    let total = 0;
    cart.forEach(item => total += item.quantity);
    setTotalQuantity(total);
    handleToggleHeart();
  }, [cart, favorite]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab()); // Dispatch the action to open the cart tab
  };

  const handleSearchNav = (e) => {
    if (e.key === "Enter" && searchData.trim !== "") {
      navigate(`/search?search=${searchData}`)
    }
  }

  return (
    <nav className={`flex-col w-full  `}>
      <section className="flex justify-around md:justify-between items-center py-7 w-full ">
        <div className="flex md:justify-start justify-end max-md:w-1/2">
          <NavLink to="/" className="text-[white] ">
            <img src={logo} alt="logo" className="w-40" />
          </NavLink>


        </div>
        <div className="flex justify-end items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-black rounded-md px-5 py-1 w-56 mr-8 h-9 max-md:hidden"
            onChange={(e) => {
              e.preventDefault()
              setSearchData(e.target.value);
            }}
            onKeyDown={handleSearchNav}
          />
          <div className="gap-7 items-center hidden lg:flex">
            {nav_icon.map((element) => (
              element.label === "AddToCart" ? (
                <div
                  key={element.label}
                  className="w-12 h-12 rounded-full flex justify-center items-center relative"
                  onClick={handleOpenTabCart} // Add onClick event
                >
                  {/* <img src={theme ? addToCartIconBlack : element.img} alt={element.label} className="w-8" /> */}
                  <p className="text-2xl">{element.img}</p>
                  <span className="absolute bottom-0 font-bold right-0 text-black text-lg w-5 h-5 rounded-full flex justify-center items-center">
                    {totalQuatity}
                  </span>
                </div>
              ) : (
                <NavLink
                  key={element.label}
                  to={element.href}
                >
                  {favorite.length > 0 ?
                    // <img src={theme ? heartFillBlack : addToFavoriteWhiteIcon} alt="" className="w-8" />
                    <p className="text-2xl"><FaHeart /></p>
                    :
                    // <img src={theme ? heartBlack : element.img} className="w-8" />
                    <p><FaRegHeart /></p>
                  }
                </NavLink>
              )
            ))}
            {/* <button onClick={() => setTheme((prev) => !prev)} className="w-8">
              <img src={theme ? darkMode : lightMode} alt="Theme Toggle" />
            </button> */}
            <NavLink to='/Profile'>{theme ? <IoPersonSharp className="text-primary text-2xl" /> : <IoPersonOutline className="text-2xl " />}</NavLink>
          </div>
          <div className="mt-3 mx-7 flex gap-10">
            {nav_link.map((element) => (
              <NavLink
                key={element.label}
                to={element.href}
                className="text-[white] "
              >
                <label
                  className={`font-bold max-lg:hidden px-6 py-3 rounded-xl ${element.label === "Login"
                    ? "bg-primary text-black hover:bg-black hover:text-white"
                    : "dark:bg-[white] dark:text-[black]  bg-black text-white hover:bg-primary hover:text-black"}`
                  }
                >
                  {element.label}
                </label>
              </NavLink>
            ))}
          </div>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <p className="block lg:hidden w-8 ml-3"> <RxHamburgerMenu /></p>
          </button>
        </div>
        <div
          className={`fixed inset-0 z-40 flex bg-gray-800 bg-opacity-50 lg:hidden transition-transform transform ${toggleMenu ? "translate-x-0" : "-translate-x-full"}`}
          onClick={() => setToggleMenu(false)}
        >
          <div
            className="w-64 bg-white h-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="p-4">hi</nav>
          </div>
        </div>
      </section>
      <section className="dark:bg-lightGray bg-primary w-full h-20">
        <ol className="flex justify-start md:justify-center items-center w-full h-full gap-16 px-4  text-xl overflow-x-scroll md:overflow-x-hidden overflow-y-hidden whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 snap-x snap-mandatory">
          {menubar.map(({ label, items }) => (
            <li key={label} className="relative text-black text-main-light font-bold group flex-shrink-0 snap-center">
              <span className="cursor-pointer">{label}</span>
              {/* <div className="z-50  absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[350px] bg-lightGray border border-gray-200 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 p-4 rounded-sm"> */}
              {/* <ul>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-3 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                    >
                      <a href={`category/${item}`}>{item}</a>
                    </li>
                  ))}
                </ul> */}
              {/* </div> */}
            </li>
          ))}
        </ol>
      </section>
    </nav>
  );
};

export default NavBar;
