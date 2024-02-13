import React, { useState } from "react";
import { Link } from "react-router-dom";
import p from "../assets/img/houses/p.jpg";

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

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { feedback, rating });
    setFeedback("");
    setRating(0);
  };

  const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
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
            <Link
              to="your_link_here"
              className="flex items-center mt-2 text-white"
            >
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
              <Link
                to="/AdminProperty"
                className="flex items-center text-white"
              >
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
              <Link
                to="/FeedbackForm"
                className="flex items-center text-white"
              >
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
    );
  };

  return (
    <div className="flex items-center justify-center h-screen mb-0" style={{ background: "linear-gradient(to bottom, #4a148c, #7b1fa2)" }}>
      <Sidebar />
      <div className="max-w-md mx-auto mt-8 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="feedback"
            >
              Share your feedback:
            </label>
            <textarea
              id="feedback"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your feedback here"
              value={feedback} // Assuming `feedback` is coming from the component's state
              onChange={(e) => setFeedback(e.target.value)} // Assuming `setFeedback` is a function from useState hook
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Rate your experience:
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`text-3xl ${
                    value <= rating ? "text-yellow-400" : "text-gray-300"
                  } focus:outline-none`}
                  onClick={() => setRating(value)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
