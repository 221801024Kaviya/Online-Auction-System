import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostAuction.css";

const PostAuction = ({ setAuctions, auctions }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startingPrice: "",
    endTime: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing auctions from localStorage
    const storedAuctions = JSON.parse(localStorage.getItem("auctions")) || [];

    // Create new auction
    const newAuction = { ...formData, id: storedAuctions.length + 1, bids: [] };

    // Update localStorage
    const updatedAuctions = [...storedAuctions, newAuction];
    localStorage.setItem("auctions", JSON.stringify(updatedAuctions));

    // Update state
    setAuctions(updatedAuctions);

    alert("Auction posted successfully!");
    navigate("/dashboard");
  };

  return (
    <div>
      <center>
      <h2>Post a New Auction</h2></center>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Item Name" required onChange={handleChange} />
        <textarea name="description" placeholder="Description" required onChange={handleChange}></textarea>
        <input type="number" name="startingPrice" placeholder="Starting Price" required onChange={handleChange} />
        <input type="datetime-local" name="endTime" required onChange={handleChange} />
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <button type="submit">Post Auction</button>
      </form>
    </div>
  );
};

export default PostAuction;
