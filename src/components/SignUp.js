import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from "../assets/img/houses/b.avif"; 
import Swal from 'sweetalert2'

const SignUp = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Name validation
    if (!name.trim()) {
      validationErrors.nameError = "Name is required";
    }

    // Phone validation
    if (phone.length < 10) {
      validationErrors.phoneError = "Phone number should be 10 digits";
    }

    // Email validation
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      validationErrors.emailError = "Please enter a valid email address";
    }

    // Password validation
    if (password.length < 8) {
      validationErrors.passwordError = "Password should be at least 8 characters long";
    }

    // Check if passwords match
    if (password !== Cpassword) {
      validationErrors.CpasswordError = "Passwords do not match";
    }

    setErrors(validationErrors);

    // If there are no validation errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify({ name, phone, email, password, Cpassword }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();

      if (result) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "You are Successfully Registered",
          showConfirmButton: false,
          timer: 1500
        });
        // localStorage.setItem("users", JSON.stringify(result));
        navigate("/SignIn");
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      backgroundImage: `url(${backgroundImage})`, // Set background image
      backgroundSize: "cover",
    },
    header: {
      textAlign: "center",
      color: "#fff",
      fontSize: "24px",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    text: {
      color: "#fff",
      fontSize: "15px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      padding: "10px",
      marginBottom: "16px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      color: "#000000",
      fontWeight: "bold",
    },
    button: {
      padding: "14px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      fontSize: "16px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Sign Up</h2>

      <form style={styles.form}>
        <h2 style={styles.text}> Name: </h2>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} required />
        {errors.nameError && <p style={{ color: 'red' }}>{errors.nameError}</p>}
        <h2 style={styles.text}> Phone: </h2>
        <input type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} style={styles.input} required />
        {errors.phoneError && <p style={{ color: 'red' }}>{errors.phoneError}</p>}
        <h2 style={styles.text}> Email: </h2>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
        {errors.emailError && <p style={{ color: 'red' }}>{errors.emailError}</p>}
        <h2 style={styles.text}> Password:</h2>
        <div style={{ position: 'relative' }}>
          <input type={showPassword ? "text" : "password"}  value={password} onChange={(e) => setPassword(e.target.value)} style={{ ...styles.input, width: '355px' }} required />
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={toggleShowPassword} style={{ position: 'absolute', right: '15px', top: '40%', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 1 }} />
        </div>
        {errors.passwordError && <p style={{ color: 'red' }}>{errors.passwordError}</p>}
        <h2 style={styles.text}> Confirm-Password:</h2>
        <div style={{ position: 'relative' }}>
          <input type={showPassword ? "text" : "password"} value={Cpassword} onChange={(e) => setCPassword(e.target.value)} style={{ ...styles.input, width: '355px' }} required />
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={toggleShowPassword} style={{ position: 'absolute', right: '15px', top: '40%', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 1 }} />
        </div>
        {errors.CpasswordError && <p style={{ color: 'red' }}>{errors.CpasswordError}</p>}

        <button type="submit" style={styles.button} onClick={collectData}> Sign Up </button>
        <div className='mt-2 ml-1' style={styles.text}>Already have an Account? <Link to="/SignIn" style={{ color: '#007bff' }}>Sign In</Link></div>
      </form>
    </div>
 

  );
};

export default SignUp;
