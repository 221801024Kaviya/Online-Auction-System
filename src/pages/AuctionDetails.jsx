import React, { useEffect, useState } from "react";

const AuctionDetails = () => {
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    // Retrieve auction from localStorage (temporary storage)
    const storedAuctions = JSON.parse(localStorage.getItem("auctions")) || [];
    
    // Get the first auction as an example
    if (storedAuctions.length > 0) {
      setAuction(storedAuctions[0]); // Display first auction
    }
  }, []);

  if (!auction) {
    return <h2>No auction available</h2>;
  }

  return (
    <div>
      <h2>{auction.name}</h2>
      <p>{auction.description}</p>
      <p>Starting Price: ${auction.startingPrice}</p>
      <img src={auction.image} alt={auction.name} width="200" />
    </div>
  );
};

export default AuctionDetails;
