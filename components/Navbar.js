import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mt-5 px-5">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">ZAD</a>
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
