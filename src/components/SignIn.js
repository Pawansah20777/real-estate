import React, { useState } from 'react';
import backgroundImage from '../assets/img/houses/b.avif'; // Import your background image

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Sign In with:', credentials);
    // Add your authentication logic here
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
      <form style={styles.form} onSubmit={handleSignIn}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
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
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
