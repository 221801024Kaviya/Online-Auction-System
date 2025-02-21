import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <h1>Online Auction System</h1>
        <p>"Bid your dreams, win your desires!"</p>
        <button className="bid-now-btn" onClick={() => navigate("/auction-details")}>
        Start Bidding
      </button>
      </div>
    </div>
  );
};

export default Home;
