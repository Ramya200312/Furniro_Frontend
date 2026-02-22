import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/cartContext";

import logo from "../../assets/images/furnirologoImg.png";
import signupIcon from "../../assets/images/signupImg.png";
import searchIcon from "../../assets/images/searchImg.png";
import likeIcon from "../../assets/images/likeImg.png";
import cartIcon from "../../assets/images/cartImg.png";
import menuImg from "../../assets/images/menuImg.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          <span className="text-2xl font-bold tracking-wide">Furniro</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-700"
              }
              end
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-700"
              }
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-700"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-700"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            <img src={menuImg} className="W-5 h-5" alt="Menu Image" />
          </button>

          <Link to="/signup">
            <img src={signupIcon} alt="signup" className="w-5 h-5 hover:scale-110 transition" />
          </Link>

          <Link to="/search">
            <img src={searchIcon} alt="search" className="w-5 h-5 hover:scale-110 transition" />
          </Link>

          <Link to="/wishlist">
            <img src={likeIcon} alt="like" className="w-5 h-5 hover:scale-110 transition" />
          </Link>

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative">
            <img
              src={cartIcon}
              alt="cart"
              className="w-5 h-5 hover:scale-110 transition"
            />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-4 font-medium bg-white shadow-lg border-t">

          <li>
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-l-4 border-black pl-2"
                  : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-l-4 border-black pl-2"
                  : "text-gray-700"
              }
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-l-4 border-black pl-2"
                  : "text-gray-700"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-l-4 border-black pl-2"
                  : "text-gray-700"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      )}
    </nav>
  );
}