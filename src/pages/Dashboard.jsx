import React, { useEffect, useState } from "react";
import "./Dashboard.css";
const Dashboard = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    // Load auctions from localStorage
    const storedAuctions = JSON.parse(localStorage.getItem("auctions")) || [];
    setAuctions(storedAuctions);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {auctions.length === 0 ? (
        <p>No auctions available</p>
      ) : (
        <ul>
          {auctions.map((auction) => (
            <li key={auction.id}>
              <h3>{auction.name}</h3>
              <p>{auction.description}</p>
              <p>Starting Price: ${auction.startingPrice}</p>
              <p>Ends on: {new Date(auction.endTime).toLocaleString()}</p>
              <img src={auction.image} alt={auction.name} width="100" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
