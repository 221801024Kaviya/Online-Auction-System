import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PostAuction from "./pages/PostAuction";
import AuctionDetails from "./pages/AuctionDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post-auction" element={<PostAuction />} />
        <Route path="/auction-details/:id" element={<AuctionDetails />} />
        
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </>
  );
}

export default App;
