import Image from "next/image";
import React from "react";
import Logo from "../assets/logo-dark.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mt-5 px-5 w-full">
        <div className="navbar-start ">
          <div className="w-1/5 btn btn-ghost">
            <Image src={Logo} />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end space-x-5">
          <a className="btn">Register</a>
          <a className="btn">Connect Wallet</a>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
