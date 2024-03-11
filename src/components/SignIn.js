import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/img/houses/b.avif'; 
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  });


  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
    });
    result = await result.json();

    if (result.user && result.userType === "user") {
        localStorage.setItem("users", JSON.stringify(result.user));
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "You are Successfully Logged",
            showConfirmButton: false,
            timer: 2500
        });
        navigate('/Property');
    } else if (result.user && result.userType === "admin") {
        localStorage.setItem("admins", JSON.stringify(result.user));
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "You are Successfully Logged as Admin",
            showConfirmButton: false,
            timer: 2500
        });
        navigate('/AdminProperty');
    } else {
        alert("Please fill correct details!");
    }

};


  const styles = {
    container: {
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      backgroundImage: `url(${backgroundImage})`, // Set background image
      backgroundSize: 'cover',
    },
    logo: {
      width: '20%',
      color: '#fff',
      fontSize: '15px',
    },
    header: {
      textAlign: 'center',
      color: '#fff',
      fontSize: '24px',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    text:{
      color: "#fff",
      fontSize: "15px",
     },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '16px',
      color: '#fff',
      fontSize: '15px',
    },
    input: {
      padding: '10px',
      marginBottom: '16px',
      marginLeft: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#000000',
      fontWeight: 'bold',
    },

    input1: {
      padding: '10px',
      marginBottom: '16px',
      marginLeft: '17px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#000000',
      fontWeight: 'bold',
    },

    button: {
      padding: '14px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <img src={require('../assets/img/houses/a.jpeg')} alt="HomeLand." style={styles.logo } />{/* Add your logo */}
      <h2 style={styles.header}>Sign In</h2>
      <form style={styles.form} >
        
        <label style={styles.label}>Username:
          <input
            type="email"
            value={email}
            style={styles.input}
            onChange={(e)=>setEmail(e.target.value)}
            required />
        </label>

        <label style={styles.label}> Password:
          <input
            type="password"
            value={password}
            style={styles.input1}
            onChange={(e)=>setPassword(e.target.value)}
            required/>
        </label>

        <button
          type="submit"
          style={styles.button}
          onClick={handleLogin}
        >
         Sign In
        </button>
        <div className='mt-2 ml-1' style={styles.text}>Not Registered Yet ? <Link to="/SignUp" style={{color: '#007bff'}}>Register Here</Link></div>

      </form>
    </div>
  );
};

export default SignIn;
