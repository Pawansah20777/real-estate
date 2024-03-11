import React, { useEffect, useState } from 'react';
import AdminSidebar from "./Admin_Sidebar";
import { useNavigate } from "react-router-dom";

function Feedbacks() {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/feedbacks');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userfeedbacks = await response.json();
        setFeedbacks(userfeedbacks);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error gracefully, such as setting feedbacks to an empty array
        setFeedbacks([]);
      }
    };
  
    fetchData();
  }, []);

  const handleRemove = async () => {
    
  };
  

  

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <main className="w-full px-4 overflow-y-auto">
        <div className="container mx-auto mt-8">
          <div className="flex justify-between items-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-0 rounded focus:outline-none focus:shadow-outline">
              <i className="fas fa-edit mr-2"></i>Add New
            </button>
          </div>
          <h5 className="text-lg font-bold">Properties</h5>
        </div>
        <div className="container mx-auto mt-4">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400">S.N</th>
                <th className="border border-gray-400">Feedback</th>
                <th className="border border-gray-400">Rating</th>
              </tr>
            </thead>
            <tbody>
  {feedbacks.map((feedback, index) => (
    <tr key={index}>
      <td className="border border-gray-400 text-center">{index + 1}</td>
      <td className="border border-gray-400">{feedback.feedback}</td>
      <td className="border border-gray-400">{feedback.rating}</td>
      <td className="border border-gray-400 flex justify-center items-center">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleRemove()}>
          Remove
        </button>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Feedbacks;
