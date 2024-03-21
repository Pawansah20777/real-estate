import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "./S";

const Dashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isProfileEdited, setIsProfileEdited] = useState(false);
  const [userData, setUserData] = useState({}); // State variable to store user data

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      const userData = JSON.parse(auth);
      setUserData(userData); // Set user data to state variables
      setName(userData.name);
      setEmail(userData.email);
      setPhone(userData.phone);
    }
  }, []);

  const enableEditMode = () => {
    setIsEditing(true);
  };

  const saveChanges = async () => {
    // Check if any of the fields are empty
    if (!name || !email || !phone) {
      alert("All fields are required");
      return;
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Check phone number length
    if (phone.length < 10) {
      alert("Phone number must be at least 10 digits");
      return;
    }

    setIsEditing(false);
    setIsProfileEdited(true);

    // Check if the entered name matches the name in the database
    const auth = localStorage.getItem("users");
    if (auth) {
      const userData = JSON.parse(auth);
      if (userData.name !== name) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Entered name does not match the name in the database. Update failed.",
        });
        setIsEditing(true);
        return;
      }
    }

    const response = await fetch(`http://localhost:5000/update/${name}`, {
      method: "PUT",
      body: JSON.stringify({ email, phone }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();

    if (result) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Profile Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/Property");
    }
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setIsProfileEdited(false);
    // Reset input values
    setName(userData.name);
    setEmail(userData.email);
    setPhone(userData.phone);
    // Enable editing mode
    setIsEditing(true);
  };

  const styles = {
    dashboardContainer: {
      display: "flex",
    },
    contentContainer: {
      flex: 1,
      padding: "20px",
    },
    profileSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    editProfileBtn: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    tabsSection: {
      backgroundColor: "#e0e0e0",
      padding: "20px",
      borderRadius: "10px",
    },
    navTabs: {
      marginBottom: "20px",
    },
    navLink: {
      color: "#333",
      fontWeight: "bold",
    },
    tabContent: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
    },
    button: {
      common: {
        justifyContent: "flex-end",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      },
      reset: {
        backgroundColor: "#f44336",
        color: "white",
        marginRight: "12px",
      },
      enabled: {
        backgroundColor: "#4CAF50",
        color: "white",
      },
      disabled: {
        backgroundColor: "#cccccc",
        color: "#666666",
        cursor: "not-allowed",
      },
    },
    input: {
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      color: "#000000",
      fontWeight: "bold",
      backgroundColor: "#ffffff", // Set background color to white
    },
    label: {
      marginRight: "10px",
      width: "80px",
      padding: "10px",
      paddingRight: "400px", // Adjust the width of the label for proper alignment
    },
    row: {
      display: "flex",
      alignItems: "center",
    },
    text: {
      color: "black",
      fontSize: "15px",
      marginTop: "10px",
      marginLeft: "10px",
      fontWeight: "bold",
    },
    button: {
      common:
        "font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline",
      disabled: "text-gray-500 bg-blue-200",
      enabled: "bg-blue-500 hover:bg-blue-700 text-white",
      reset: "bg-red-500 hover:bg-red-700 text-white",
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <Sidebar />

      <div style={styles.contentContainer}>
        <div className=" mt-2  mb-5">
          <button
            className={`${styles.button.common} ${
              isEditing ? styles.button.disabled : styles.button.enabled
            }`}
            onClick={enableEditMode}
            disabled={isEditing}
          >
            <i className="fas fa-edit mr-2"></i>Edit Profile
          </button>
        </div>

        <div style={styles.tabsSection}>
          <ul className="nav nav-tabs" style={styles.navTabs}>
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                role="tab"
                href="#home"
                style={styles.navLink}
              >
                User Profile
              </a>
            </li>
          </ul>

          <div className="tab-content" style={styles.tabContent}>
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row mt-3" style={styles.row}>
                <div className="col-md-6" style={styles.row}>
                  <label style={styles.label}>Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={styles.input}
                    />
                  ) : (
                    <p>{name}</p>
                  )}
                </div>
              </div>

              <div className="row mt-3" style={styles.row}>
                <div className="col-md-6" style={styles.row}>
                  <label style={styles.label}>Email</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={styles.input}
                    />
                  ) : (
                    <p>{email}</p>
                  )}
                </div>
              </div>

              <div className="row mt-3" style={styles.row}>
                <div className="col-md-6" style={styles.row}>
                  <label style={styles.label}>Phone</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={styles.input}
                    />
                  ) : (
                    <p>{phone}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            className={`${styles.button.common} ${
              isEditing ? styles.button.reset : styles.button.disabled
            }`}
            onClick={cancelEditing}
            disabled={!isEditing && !isProfileEdited}
          >
            Reset
          </button>
          <button
            className={`${styles.button.common} ${
              isEditing ? styles.button.enabled : styles.button.disabled
            } ml-12`}
            onClick={saveChanges}
            disabled={!isEditing}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
