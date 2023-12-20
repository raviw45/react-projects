import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartPage } from "../context/Context";

const Header = () => {
  const {cart}=useContext(CartPage);
  return (
    <div>
      <div className="flex w-full h-[80px]  md:px-10 px-2 justify-between items-center  shadow-lg overflow-hidden ">
        <img
          style={{ height: "100px" }}
          src="https://cdn.iconscout.com/icon/free/png-512/free-amazon-1869030-1583154.png?f=webp&w=256"
          alt="hh"
        />
        <ul className="md:flex gap-9 uppercase font-bold hidden">
          <li>
            <NavLink
              to={"/"}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "",
              })}
              className="hover:font-medium"
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link className="hover:text-purple-800" to="#">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-800" to="#">
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-800" to="#">
              Services
            </Link>
          </li>
        </ul>
        <div className="relative py-4">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "orange" : "",
            })}
            to={"/cart"}
          >
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
            <span className="absolute  transform translate-x-1 -translate-y-4 bg-blue-400 p-1 rounded-full text-white text-sm">
              {cart.length}
            </span>
          </NavLink>
        </div>
        <div className="md:hidden block">
          <h3 className="text-3xl cursor-pointer">&#9776;</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
