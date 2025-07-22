import React from "react";
import logo from "../assets/logo.png";
import { Outlet, NavLink } from "react-router";
// import "./Header.css";

const Header = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="header flex justify-between items-center px-6 pt-6">
        <img src={logo} alt="" />
        <ul className=" flex gap-4 header-list text-lg ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="h-16 w-16  rounded-full bg-[#C9F31D] flex justify-center items-center text-black">
          #
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
