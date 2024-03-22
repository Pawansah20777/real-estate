import React, { useEffect, useState } from 'react';
import AdminSidebar from "./Admin_Sidebar";
import { useNavigate } from "react-router-dom";

function AdminProperty() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/properties');
        const userProperties = await response.json();
        setProperties(userProperties);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [properties]);


  const handleRemove = async (email) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
        const response = await fetch(`http://localhost:5000/property/${email}`, {
          method: "DELETE",
        });

    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <main className="w-full px-4 overflow-y-auto">
        <div className="container mx-auto mt-8">
          {/* <div className="flex justify-between items-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-0 rounded focus:outline-none focus:shadow-outline">
              <i className="fas fa-edit mr-2"></i>Add New
            </button>
          </div> */}
          <h5 className="text-lg font-bold">Properties</h5>
        </div>
        <div className="container mx-auto mt-4">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400">S.N</th>
                <th className="border border-gray-400">Name</th>
                <th className="border border-gray-400">Email</th>
                <th className="border border-gray-400">House Name</th>
                <th className="border border-gray-400">House Country</th>
                <th className="border border-gray-400">House Address</th>
                <th className="border border-gray-400">Message</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 text-center">{index + 1}</td>
                  <td className="border border-gray-400">{property.name}</td>
                  <td className="border border-gray-400">{property.email}</td>
                  <td className="border border-gray-400">{property.houseName}</td>
                  <td className="border border-gray-400">{property.houseCountry}</td>
                  <td className="border border-gray-400">{property.houseAddress}</td>
                  <td className="border border-gray-400">{property.message}</td>
                  <td className="border border-gray-400 flex justify-center items-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleRemove(property.email)}>
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

export default AdminProperty;
