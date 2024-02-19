import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/img/houses/b.avif'; // Import your background image

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

   useEffect(()=>{
    const auth=localStorage.getItem("users");
    if(auth){
      navigate('/');
    }}
    
   )

  const collectData = async () => {
    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({ name, phone, email, password }),
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    console.log(result);

    if (result) {
      localStorage.setItem("users",JSON.stringify(result));
        navigate('/');
    }
} 

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

      <form style={styles.form}>

        <label style={styles.label}>Name:
          <input
            type="text"
            value={name}
           onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input2}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input4}
            required
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input1}
            required
          />
        </label>

        
        <button 
          type="submit"
          style={styles.button}
          onClick={collectData}
        >
        Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
