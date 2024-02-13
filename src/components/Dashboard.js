import React, { useState } from "react";
import { Link } from "react-router-dom";
import p from "../assets/img/houses/p.jpg";
import house5 from "../assets/img/houses/house5.png";
import house6 from "../assets/img/houses/house6.png";

import {
  FaCog,
  FaHome,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaComments,
  FaBars,
  FaEdit,
} from "react-icons/fa";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen mb-10">
      <nav
        className="flex-none w-64 bg-gray-900 p-4 relative"
        style={{ height: "100vh" }}
      >
        <div className="flex items-center mb-8">
          <div className="relative">
            <img
              src={p}
              alt="Circular Image"
              className="rounded-full w-16 h-16"
            />
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold text-white">Pawan Sah</p>
            <p className="text-sm text-gray-400">psah770@rku.ac.in</p>
            <Link to="your_link_here" className="flex items-center mt-2 text-white">
              <FaEdit className="w-4 h-4 mr-1" />
              <p className="text-sm">Edit</p>
            </Link>
          </div>
          <FaBars
            className="absolute top-4 right-4 cursor-pointer text-white bg-gray-700 rounded-full p-2"
            style={{ fontSize: "24px" }}
            onClick={toggleMenu}
          />
        </div>
        {isMenuOpen && (
          <ul className="space-y-2">
            <li className="sidebar-button hover:bg-indigo-500 transition duration-300">
              <Link to="/dashboard" className="flex items-center text-white">
                <FaHome className="w-6 h-6 mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="sidebar-button hover:bg-indigo-500 transition duration-300">
              <Link to="/AdminProperty" className="flex items-center text-white">
                <FaUser className="w-6 h-6 mr-2" />
                Property
              </Link>
            </li>
            <li className="sidebar-button hover:bg-indigo-500 transition duration-300">
              <Link to="/favourite" className="flex items-center text-white">
                <FaHeart className="w-6 h-6 mr-2" />
                Favourite
              </Link>
            </li>
            <li className="sidebar-button hover:bg-indigo-500 transition duration-300">
              <Link to="/settings" className="flex items-center text-white">
                <FaCog className="w-6 h-6 mr-2" />
                Setting
              </Link>
            </li>
            <li className="sidebar-button hover:bg-indigo-500 transition duration-300">
              <Link to="/feedback" className="flex items-center text-white">
                <FaComments className="w-6 h-6 mr-2" />
                Feedback
              </Link>
            </li>
            <li className="sidebar-button hover:bg-indigo-500 transition duration-300">
              <Link to="/logout" className="flex items-center text-white">
                <FaSignOutAlt className="w-6 h-6 mr-2" />
                Logout
              </Link>
            </li>
          </ul>
        )}
      </nav>

      <main className="flex-1 p-4 ">
        <div className="grid grid-cols-4 gap-4 ">
          <div className="bg-white shadow-2xl p-6 rounded-lg cursor-pointer hover:shadow-3xl hover:bg-indigo-500 transition duration-300">
            <img src={house5} alt="Property" className="mb-4" />
            <p className="text-lg font-semibold mb-2">Gondal Rd, Rajkot, Gujarat 360020</p>
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white rounded-full px-2 py-1 mr-2">House</span>
              <span className="bg-violet-500 text-white rounded-full px-2 py-1">Rajkot</span>
            </div>
            <div className="flex items-center text-gray-600">
              <i className="fa fa-bed mr-2"></i>6
              <i className="fa fa-bath mx-4"></i>3
              <i className="fa fa-area-chart mx-4"></i>4200 sq ft
            </div>
            <p className="text-lg font-semibold text-violet-600 mt-4">Rs 1,400,000</p>
          </div>

          <div className="bg-white shadow-2xl p-6 rounded-lg cursor-pointer hover:shadow-3xl hover:bg-indigo-500 transition duration-300">
            <img src={house6} alt="Property" className="mb-4" />
            <p className="text-lg font-semibold mb-2">Laxminagar Rd, Surat, Gujarat 360020</p>
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white rounded-full px-2 py-1 mr-2">Apartment</span>
              <span className="bg-violet-500 text-white rounded-full px-2 py-1">Surat</span>
            </div>
            <div className="flex items-center text-gray-600">
              <i className="fa fa-bed mr-2"></i>8
              <i className="fa fa-bath mx-4"></i>6
              <i className="fa fa-area-chart mx-4"></i>8200 sq ft
            </div>
            <p className="text-lg font-semibold text-violet-600 mt-4">Rs 1,900,000</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
