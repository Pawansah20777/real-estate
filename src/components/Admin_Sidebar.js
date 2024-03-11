import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaHome, FaSignOutAlt, FaComments } from "react-icons/fa";

function AdminSidebar() {
  const navigate = useNavigate();
  const adminAuth = JSON.parse(localStorage.getItem("admins"));
  const name = adminAuth.name; // assuming name is stored within admins object
  const email = adminAuth.email; // assuming email is stored within admins object

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("admins");
      navigate('/signUp');
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <nav className="hidden md:block bg-gradient-to-b from-purple-500 to-indigo-600 w-48 p-4 overflow-y-auto shadow-lg rounded-lg">
        <div className="flex flex-col items-center mb-4">
          <span className="text-sm font-bold text-white mt-2">{name}</span>
          <span className="text-xs text-gray-200">{email}</span>
        </div>
        <ul>
          <li>
            <Link to="/AdminUsers" className="sidebar-button flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300">
              <FaUser className="w-6 h-6 text-white" />
              <span className="text-white">Users</span>
            </Link>
          </li>
          <li>
            <Link to="/AdminProperty" className="sidebar-button flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300">
              <FaHome className="w-10 h-10 text-white" />
              <span className="text-white">Property</span>
            </Link>
          </li>
          <li>
            {/* Add link and icon for Messages */}
            <Link to="/Feedbacks" className="sidebar-button flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300">
              <FaComments className="w-6 h-6 text-white" />
              <span className="text-white">Feedbacks</span>
            </Link>
          </li>

          <li onClick={logout} className="sidebar-button flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300">
            <FaSignOutAlt className="w-6 h-6 text-white" />
            <span className="text-white">Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminSidebar;
