import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { housesData } from '../data';
import { useParams, Link } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Hello, I am interested in [Modern apartment]'
  });

  const [messageChanged, setMessageChanged] = useState(false); // Track if the message has been changed

  const [userData, setUserData] = useState(null); // Define userData state

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      const userData = JSON.parse(auth);
      setFormData({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        message: formData.message // Keep existing message
      });
      setUserData(userData); // Set userData state
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'message') {
      setMessageChanged(true); // Mark the message as changed
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let { name, email, phone, message } = formData;
  
    // Check if message is empty or unchanged, if so, replace it with the default message
    if (!message.trim() || !messageChanged) {
      message = 'Hello, I am interested in [Modern apartment]';
    }
  
    try {
      const response = await fetch("http://localhost:5000/property", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          houseId: house.id, // Include house ID
          houseName: house.name, // Include house name
          houseType: house.type, // Include house type
          houseCountry: house.country, // Include house country
          housePrice: house.price, // Include house price
          houseAddress: house.address // Include house address
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        const result = await response.json();
  
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "You are Successfully Booked",
          showConfirmButton: false,
          timer: 1500
        });
  
        // Update userData state with new data from the database
        setUserData(result);
  
        navigate("/");
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Oops... Something went wrong!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14 ">
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2x1 font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'> {house.type} </div>
            <div className='bg-violet-500 text-white px-3 rounded-full'> {house.country} </div>
          </div>
          <div className='text-3x1 font-semibold text-violet-600'>$ {house.price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt="" />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2x1' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2x1' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2x1' />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-white-100 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt='' />
              </div>
              <div>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link to='' className='text-violet-700 text-sm'>View Listings</Link>
              </div>
            </div>
            {/* Form */}
            <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
              <input
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                type="text"
                placeholder='Name*'
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <input
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                type="email"
                placeholder='Email*'
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <input
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                type="phone"
                placeholder='Phone*'
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <textarea
                className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400'
                placeholder='Message*'
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>

              <div className='flex gap-x-2'>
                <button
                  className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
