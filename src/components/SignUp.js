import React, { useState } from 'react';
import backgroundImage from '../assets/img/houses/b.avif'; // Import your background image
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign Up with:', userData);
    // Add your sign up logic here
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
      marginBottom: '20px',
      color: '#fff',
      fontSize: '15px',
    },
    header: {
      textAlign: 'center',
      color: '#fff',
      fontSize: '24px',
      marginBottom: '20px',
      fontWeight: 'bold',
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
      marginLeft: '45px',
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

    input2: {
        padding: '10px',
        marginBottom: '16px',
        marginLeft: '44px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#000000',
        fontWeight: 'bold',
      },

      input4: {
        padding: '10px',
        marginBottom: '16px',
        marginLeft: '49px',
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
      <img src={require('../assets/img/houses/a.jpeg')} alt="HomeLand." style={styles.logo} />
      <h2 style={styles.header}>Sign Up</h2>
      <form style={styles.form} onSubmit={handleSignUp}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Phone:
          <input
            type="text"
            name="Phone"
            value={userData.Phone}
            onChange={handleInputChange}
            style={styles.input2}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            style={styles.input4}
            required
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            style={styles.input1}
            required
          />
        </label>

        
        <button 
          type="submit"
          style={styles.button}
          onMouseEnter={() => styles.buttonHover}
          onMouseLeave={() => ({})}
        >
         <Link to="/signIn">Sign Up</Link>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
