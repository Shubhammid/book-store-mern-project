import { Link } from "react-router-dom";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const currentUser = false;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-lg shadow-md">
      <nav className="max-w-screen-2xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6 text-gray-700 hover:text-primary transition-colors duration-200" />
          </Link>

          <div className="relative sm:w-72 w-40">
            <IoSearchOutline className="absolute left-3 inset-y-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-gray-100/90 w-full py-2 md:px-10 px-8 rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-200"
            />
          </div>
        </div>

        <div className="relative flex items-center md:space-x-4 space-x-3">
          <div className="relative">
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src={avatarImg}
                    alt="User Avatar"
                    className={`size-8 rounded-full ring-2 ring-primary cursor-pointer hover:scale-105 transition-transform duration-200`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-lg z-40 overflow-hidden">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6 text-gray-700 hover:text-primary transition-colors" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block text-gray-700 hover:text-primary transition-colors">
            <HiOutlineHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary/90 hover:bg-primary text-white px-3 sm:px-6 py-1 flex items-center rounded-lg shadow-sm transition-all"
          >
            <HiOutlineShoppingCart className="size-5" />
            <span className="text-sm font-medium ml-1">
              {cartItems.length > 0 ? cartItems.length : "0"}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
