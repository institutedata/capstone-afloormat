import React from "react";
import { useNavigate } from "react-router-dom";
import { PlanningBar, ManagementBar } from "../components/Toolbar.jsx";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <PlanningBar />
      <div className="content-area">
        {/* Image Container */}
        <div className="image-container">
          <img
            src="https://pbs.twimg.com/media/B12XNnvCUAE_Z6C.jpg"
            alt="CouplePhoto"
            className="featured-image"
          />
        </div>

        {/* Photo Album Button */}
        <div className="wrapper">
          <button
            onClick={() => navigate("/photo-album")}
            style={{ padding: "10px 20px" }}
          >
            Photo Album
          </button>
        </div>

        {/* The Story of Us Container */}
        <div
          className="wrapper"
          onClick={() => navigate("/milestones")}
          style={{
            cursor: "pointer",
            padding: "20px",
            border: "2px solid black",
            textAlign: "center",
          }}
        >
          The Story of Us
        </div>

        {/* Statistics Widget Placeholder */}
        <div
          className="wrapper"
          style={{
            width: "100%",
            maxWidth: "232px",
            height: "225px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid black",
          }}
        >
          <p>Statistics Widget</p>
          {/* Place your Pie Chart or any other widget inside here */}
        </div>

        {/* Games */}
        <div
          className="wrapper"
          onClick={() => navigate("/games")}
          style={{
            cursor: "pointer",
            padding: "20px",
            border: "2px solid black",
            textAlign: "center",
          }}
        >
          Games
        </div>
        
      </div>
      <ManagementBar />
    </div>
  );
};

export default Home;

//Turn Image Container item into variable so users can update it.
