import React, { useEffect, useState } from 'react';
import AdminSidebar from "./Admin_Sidebar";

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/feedbacks');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userFeedbacks = await response.json();
        setFeedbacks(userFeedbacks);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error gracefully, such as setting feedbacks to an empty array
        setFeedbacks([]);
      }
    };
  
    fetchData();
  }, [feedbacks]);

  
  const handleRemove = async (feedback) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
        const response = await fetch(`http://localhost:5000/feedback/${feedback}`, {
          method: "DELETE",
        });

    }
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
                <th className="border border-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr key={feedback._id}>
                  <td className="border border-gray-400 text-center">{index + 1}</td>
                  <td className="border border-gray-400">{feedback.feedback}</td>
                  <td className="border border-gray-400">{feedback.rating}</td>
                  <td className="border border-gray-400 flex justify-center items-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleRemove(feedback.feedback)}>
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
