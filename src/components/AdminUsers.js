// AdminUsers.js
import React, { useState, useEffect } from "react";
import AdminSidebar from "./Admin_Sidebar";
import AddUserModal from "./AddUserModal";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleRemove = async (email) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:5000/users/${email}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        // Handle response as needed
        setUsers(prevUsers =>
          prevUsers.filter(user => user.email !== email)
        );
      } catch (error) {
        console.error("Error deleting user:", error.message);
      }
    }
  };

  const handleAddUser = async (newUserData) => {
    try {
      // Send the new user data to the backend
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(newUserData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error("Failed to add user");
      }
      
      // Parse the response to get the added user data
      const addedUserData = await response.json();
      
      // Update the users state in the AdminUsers component
      setUsers(prevUsers => [...prevUsers, addedUserData]);
      
      // Close the AddUserModal
      setShowAddUserForm(false);
    } catch (error) {
      console.error("Error adding user:", error.message);
      // Handle error appropriately (e.g., show error message to user)
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <main className="w-full px-4 overflow-y-auto">
        <div className="container mx-auto mt-8">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowAddUserForm(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-0 rounded focus:outline-none focus:shadow-outline"
            >
              <i className="fas fa-edit mr-2"></i>Add New
            </button>
          </div>
          <h5 className="text-lg font-bold">Properties</h5>
        </div>
        {showAddUserForm && (
          <AddUserModal
            onClose={() => setShowAddUserForm(false)}
            onAddUser={handleAddUser}
          />
        )}
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
