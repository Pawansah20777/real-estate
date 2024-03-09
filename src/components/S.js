import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
  FaCog,
  FaHome,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaComments,
  FaBars,
} from "react-icons/fa";

const S = () => {
  const auth = localStorage.getItem("users");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("users");
      navigate('/signUp');
    }
  };

  return (
    <div className="flex h-screen mb-0">
      <nav
        className="flex-none w-64 bg-gray-900 p-4 relative"
        style={{ height: "100vh" }}
      >
        <div className="flex items-center mb-8">
          {/* <div className="relative">
            <img src={p} alt="" className="rounded-full w-16 h-16"/>
          </div> */}
          <div className="ml-4">
            <p className="text-lg font-semibold text-white">{JSON.parse(auth).name}</p>
            <p className="text-sm text-gray-400">{JSON.parse(auth).email}</p>
            {/* <Link to="your_link_here" className="flex items-center mt-2 text-white">
              <FaEdit className="w-4 h-4 mr-1" />
              <p className="text-sm">Edit</p>
            </Link> */}
          </div>
          <FaBars
            className="absolute top-4 right-4 cursor-pointer text-white bg-gray-700 rounded-full p-2"
            style={{ fontSize: "24px" }}
            onClick={toggleMenu}
          />
        </div>
        {isMenuOpen && (
          <ul className="">
            <div className="rounded-full bg-violet-500 p-2 mb-5">
              <li className="sidebar-button hover:bg-indigo-500 transition duration-300 ">
                <Link to="/Dashboard" className="flex items-center text-white">
                  <FaHome className="w-6 h-6 mr-2" />
                  Dashboard
                </Link>
              </li>
            </div>
          
            <div className="rounded-full bg-violet-500 p-2 mb-5">
              <li className="sidebar-button hover:bg-indigo-500 transition duration-300 ">
                <Link to="/Property" className="flex items-center text-white">
                  <FaUser className="w-6 h-6 mr-2" />
                  Property
                </Link>
              </li>
            </div>
          
            <div className="rounded-full bg-violet-500 p-2 mb-5">
              <li className="sidebar-button hover:bg-indigo-500 transition duration-300 ">
                <Link to="#" className="flex items-center text-white">
                  <FaHeart className="w-6 h-6 mr-2" />
                  Favourite
                </Link>
              </li>
            </div>
          
            <div className="rounded-full bg-violet-500 p-2 mb-5">
              <li className="sidebar-button hover:bg-indigo-500 transition duration-300 ">
                <Link to="#" className="flex items-center text-white">
                  <FaCog className="w-6 h-6 mr-2" />
                  Setting
                </Link>
              </li>
            </div>
          
            <div className="rounded-full bg-violet-500 p-2 mb-5">
              <li className="sidebar-button hover:bg-indigo-500 transition duration-300 ">
                <Link to="/FeedbackForm" className="flex items-center text-white">
                  <FaComments className="w-6 h-6 mr-2" />
                  Feedback
                </Link>
              </li>
            </div>
          
            <div className="rounded-full bg-violet-500 p-2 mb-5">
              <li onClick={logout} className="sidebar-button hover:bg-indigo-500 transition duration-300 ">
                <Link className="flex items-center text-white">
                  <FaSignOutAlt className="w-6 h-6 mr-2"  />
                  Logout
                </Link>
              </li>
            </div>
          </ul>
        )}
      </nav>

      <div className="flex-1 overflow-y-auto ">
      </div>
    </div>
  );
};

export default S;
