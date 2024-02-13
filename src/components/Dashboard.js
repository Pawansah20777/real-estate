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
  FaEdit, // Added import for the edit icon
} from "react-icons/fa";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen mb-10  ">
      {/* Sidebar */}
      <nav
        className="flex-none w-50 bg-gray-400 p-4 relative"
        style={{ height: "550px" }}
      >
        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src={p}
              alt="Circular Image"
              className="rounded-full w-16 h-16"
            />
          </div>
          <div className="ml-3">
            <p className="text-base font-semibold">Pawan Sah</p>
            <p className="text-sm text-gray-600">psah770@rku.ac.in</p>
            <Link to="your_link_here" className="flex items-center mt-1">
              <FaEdit className="w-5 h-5 mr-0 text-black-500" />{" "}
              {/* Edit icon */}
              <p className="text-base text-black-700">Edit</p>
            </Link>
          </div>
          <FaBars
            className="absolute top-4 right-4 cursor-pointer text-black bg-black-700 rounded-full p-1"
            style={{ fontSize: "24px" }} // Adjust the size as needed
            onClick={toggleMenu}
          />
        </div>
        {isMenuOpen && (
          <ul className="space-y-2">
            <li className="sidebar-button">
              <Link to="/dashboard">
                <FaHome className="w-6 h-6 mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="sidebar-button">
              <Link to="/AdminProperty">
                <FaUser className="w-6 h-6 mr-2" />
                Property
              </Link>
            </li>
            <li className="sidebar-button">
              <Link to="/favourite">
                <FaHeart className="w-6 h-6 mr-2" />
                Favourite
              </Link>
            </li>
            <li className="sidebar-button">
              <Link to="/settings">
                <FaCog className="w-6 h-6 mr-2" />
                Setting
              </Link>
            </li>
            <li className="sidebar-button">
              <Link to="/feedback">
                <FaComments className="w-6 h-6 mr-2" />
                Feedback
              </Link>
            </li>
            <li className="sidebar-button">
              <Link to="/logout">
                <FaSignOutAlt className="w-6 h-6 mr-2" />
                Logout
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-0">
        {/* Property Cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* You can map through your properties here */}
          {/* Example Card */}
          <div
            className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto
                     cursor-pointer hover:shadow-2xl transition "
          >
            <img src={house5} alt="Property" className="mb-8" />
            <div className="flex justify-between mb-2">
              <button className="bg-green-500 rounded-full text-white px-3">
                House
              </button>
              <button className="bg-violet-500 rounded-full text-white px-3">
                Rajkot
              </button>
            </div>
            <p className="text-lg font-semibold max-w-[260px]">
              Gondal Rd, Rajkot, Gujarat 360020
            </p>
            <div className="flex items-center mb-2">
              <i className="fa fa-bed mr-1"></i>6
              <i className="fa fa-bath mx-4"></i>3
              <i className="fa fa-area-chart mx-4"></i>4200 sq ft
            </div>
            <div className="text-lg font-semibold text-violet-600 mb-4">
              Rs 1400000
            </div>
          </div>

          <div
            className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto
                     cursor-pointer hover:shadow-2xl transition "
          >
            <img src={house6} alt="Property" className="mb-8" />
            <div className="flex justify-between mb-2">
              <button className="bg-green-500 rounded-full text-white px-3">
                Appartment
              </button>
              <button className="bg-violet-500 rounded-full text-white px-3">
                Surat
              </button>
            </div>
            <p className="text-lg font-semibold max-w-[260px]">
              Laxminagar Rd, Surat, Gujarat 360020
            </p>
            <div className="flex items-center mb-2">
              <i className="fa fa-bed mr-1"></i>8
              <i className="fa fa-bath mx-4"></i>6
              <i className="fa fa-area-chart mx-4"></i>8200 sq ft
            </div>
            <div className="text-lg font-semibold text-violet-600 mb-4">
              Rs 1900000
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
