import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding, FaHeart, FaSignOutAlt } from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const adminAuth = JSON.parse(localStorage.getItem("admins"));
  
  if (!adminAuth) {
    navigate('/');
    return null;
  }

  const name = adminAuth.name;
  const email = adminAuth.email;

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("admins");
      navigate('/signUp');
    }
  };

  const styles = {
    customSidebar: {
      width: '240px',
      backgroundColor: 'white',
      minHeight: '80vh',
      borderRight: '2px solid #ccc',
      borderRadius: '0 15px 15px 0',
      padding: '15px',
    },
    customSidebarButton: {
      display: 'flex',
      alignItems: 'center',
      padding: '5px',
      borderRadius: '50px',
      transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
      marginBottom: 'auto',
      color: 'black',
      textDecoration: 'none',
      border: '2px solid transparent',
      background: 'transparent',
    },
    customSidebarButtonHover: {
      backgroundColor: 'transparent',
      color: 'blue',
      border: '2px solid blue',
    },
    icon: {
      marginRight: '10px',
      fontSize: '20px',
    },
    profileSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      textAlign: 'center',
    },
    profileImg: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '10px',
    },
    navBar: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
  };

  return (
    <nav style={styles.customSidebar} className="mb-5">
      <div style={styles.profileSection}>
        <div className="text-lg font-semibold text-black">{name}</div>
        <div className="text-lg font-semibold text-gray-500">{email}</div>
      </div>
      <br />
      <b>
        <ul className="nav flex-column" style={styles.navBar}>
          <div
            style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            className="custom-sidebar-button"
          >
            <Link to="/AdminUsers" style={styles.customSidebarButton}>
              <FaHome style={styles.icon} />
              Users
            </Link>
          </div>
          <br />
          <div
            style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            className="custom-sidebar-button"
          >
            <Link to="/AdminProperty" style={styles.customSidebarButton}>
              <FaBuilding style={styles.icon} />
              Properties
            </Link>
          </div>
          <br />
          <div
            style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            className="custom-sidebar-button"
          >
            <Link to="/Feedbacks" style={styles.customSidebarButton}>
              <FaHeart style={styles.icon} />
              Feedbacks
            </Link>
          </div>
          <br />
          <div
            style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            className="custom-sidebar-button"
          >
            <Link to="#" onClick={logout} style={styles.customSidebarButton}>
              <FaSignOutAlt style={styles.icon} />
              Logout
            </Link>
          </div>
        </ul>
      </b>
    </nav>
  );
};

export default AdminSidebar;
