import React, { useEffect, useState } from "react";
import AdminSidebar from "./Admin_Sidebar";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("http://localhost:5000/users");
        const userData = await response.json();
        setUsers(userData);
    };

    fetchData();
  }, [users]);

  const handleRemove = async (email) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
        const response = await fetch(`http://localhost:5000/users/${email}`, {
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
                <th className="border border-gray-400">#</th>
                <th className="border border-gray-400">Name</th>
                <th className="border border-gray-400">Email</th>
                <th className="border border-gray-400">Phone</th>
                <th className="border border-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-400">{user.name}</td>
                  <td className="border border-gray-400">{user.email}</td>
                  <td className="border border-gray-400">{user.phone}</td>
                  <td className="border border-gray-400 flex justify-center items-center">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleRemove(user.email)}
                    >
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

export default AdminUsers;
