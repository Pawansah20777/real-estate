import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding, FaHeart, FaComments, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
    const auth = localStorage.getItem("users");
    const navigate = useNavigate();

    const logout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem("users");
            navigate('/signUp');
        }
    };

    if (!auth) {
        navigate('/'); 
        return null; 
    }

    const userName = JSON.parse(auth).name;
    const userEmail = JSON.parse(auth).email;

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
    };

    return (
        <nav style={styles.customSidebar} className="mb-5">
            <div style={styles.profileSection}>
                <div className="text-lg font-semibold text-black">{userName}</div>
                <div className="text-lg font-semibold text-gray-500">{userEmail}</div>
            </div>
            <br />
            <b>
                <ul className="nav flex-column" style={styles.navBar}>
                    <div
                        style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
                        className="custom-sidebar-button"
                    >
                        <Link to="/Dashboard" style={styles.customSidebarButton}>
                            <FaHome style={styles.icon} />
                            Dashboard
                        </Link>
                    </div>
                    <br />
                    <div
                        style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
                        className="custom-sidebar-button"
                    >
                        <Link to="/Property" style={styles.customSidebarButton}>
                            <FaBuilding style={styles.icon} />
                            Property
                        </Link>
                    </div>
                    <br />
                    <div
                        style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
                        className="custom-sidebar-button"
                    >
                        <Link to="#" style={styles.customSidebarButton}>
                            <FaHeart style={styles.icon} />
                            Favourite
                        </Link>
                    </div>
                    <br />
                    <div
                        style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
                        className="custom-sidebar-button"
                    >
                        <Link to="#" style={styles.customSidebarButton}>
                            <FaCog style={styles.icon} />
                            Setting
                        </Link>
                    </div>
                    <br />
                    <div
                        style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
                        className="custom-sidebar-button"
                    >
                        <Link to="/FeedbackForm" style={styles.customSidebarButton}>
                            <FaComments style={styles.icon} />
                            Feedback
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

export default Sidebar;
