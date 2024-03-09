import React, { useEffect, useState } from 'react';
import S from '../components/S';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isProfileEdited, setIsProfileEdited] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem("users");
        if (auth) {
            const userData = JSON.parse(auth);
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
        setName("");
        setEmail("");
        setPhone("");
        // Enable editing mode
        setIsEditing(true);
    };

    const styles = {
        input: {
            padding: "10px",
            marginLeft: "10px",
            marginTop: "5px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "14px",
            color: "#000000",
            fontWeight: "bold",
            backgroundColor: "#ffffff", // Set background color to white
        },
        text: {
            color: "black",
            fontSize: "15px",
            marginTop: "10px",
            marginLeft: "10px",
            fontWeight: "bold",
        },
        button: {
            common: "font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline",
            disabled: "text-gray-500 bg-blue-200",
            enabled: "bg-blue-500 hover:bg-blue-700 text-white",
            reset: "bg-red-500 hover:bg-red-700 text-white",
        }
    };

    return (
        <div className="flex h-screen mb-0">
            <nav>
                <S />
            </nav>
            <div className=" mt-2 ml-10">
                <button
                    className={`${styles.button.common} ${isEditing ? styles.button.disabled : styles.button.enabled}`}
                    onClick={enableEditMode}
                    disabled={isEditing}>
                    <i className="fas fa-edit mr-2"></i>Edit Profile
                </button>
            </div>
            <div className="mt-10 ml-10 bg-violet-500" style={{ border: '1px solid gray', width: '350px', height: '350px' }}>
                <h2 style={styles.text}> Name: </h2>
                <input
                    type="text"  
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                    disabled={!isEditing}
                    required
                />
                <h2 style={styles.text}> Email: </h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    disabled={!isEditing}
                    required
                />
                <h2 style={styles.text}> Phone: </h2>
                <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={styles.input}
                    disabled={!isEditing}
                    required
                />
                <div className=' mt-5'>
                    <button
                        className={`${styles.button.common} ${isEditing ? styles.button.reset : styles.button.disabled}`}
                        onClick={cancelEditing}
                        disabled={!isEditing && !isProfileEdited}>
                        Reset
                    </button>
                    <button
                        className={`${styles.button.common} ${isEditing ? styles.button.enabled : styles.button.disabled} ml-12`}
                        onClick={saveChanges}
                        disabled={!isEditing}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
