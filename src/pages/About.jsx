import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-images">
        <img src="https://t4.ftcdn.net/jpg/12/35/02/21/240_F_1235022148_VDdsJgrUzvPjEXTjQQdp9EH6BK1XBHko.jpg" alt="Auction" className="image" />
      </div>

  
      <div className="about-content">
        <center><h2>About</h2>
        <h3>
          Welcome to our Online Auction System 
        </h3>
        </center>
          <p>A platform where buyers and sellers meet 
          to bid on unique items. Whether you are looking for rare collectibles, art, 
          electronics, or automobiles, our auction system ensures a transparent and 
          fair bidding process.
        </p>
        <p>
          Our system allows users to create auctions, place bids in real-time, and 
          win exciting deals with competitive pricing. With secure transactions and an 
         intuitive user interface, we bring the thrill of live auctions to your 
          fingertips.
        </p>
        <p>
          Join us today and experience the future of online bidding!
        </p>
      </div>
    </div>
  );
};

export default About;
