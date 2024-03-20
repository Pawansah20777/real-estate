import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import S from '../components/S';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const navigate = useNavigate();
  
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [validationErrors, setValidationErrors] = useState({}); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (feedback.trim() === "") {
      setValidationErrors({ feedback: "Feedback is required" });
      return;
    }
    setValidationErrors({});

    // Proceed with form submission
    try {
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        body: JSON.stringify({ feedback, rating }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();

      if (result) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Feedback is Successfully Registered",
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.setItem("feedbacks", JSON.stringify(result));
        navigate("/Property");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };



  return (
    <div className="flex h-screen">
      <nav>
        <S />
      </nav>

      <div className="ml-48 mt-20 w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-violet-500 px-8 pt-6 pb-8">
          <div className="mb-6">
            <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="feedback">
              Share your feedback:
            </label>
            <textarea
              id="feedback"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-black-500 leading-tight focus:outline-none focus:shadow-outline ${validationErrors.feedback ? 'border-red-500' : ''}`}
              placeholder="Enter your feedback here"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{ height: "100px", width: "100%" }}
              required
            />
            {validationErrors.feedback && (
              <p className="text-red-500 text-xs italic">{validationErrors.feedback}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="rating">
              Rate your experience:
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`text-3xl ${value <= rating ? "text-yellow-400" : "text-gray-300"} focus:outline-none`}
                  onClick={() => setRating(value)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
