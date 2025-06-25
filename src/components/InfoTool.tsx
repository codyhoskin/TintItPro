"use client";

import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const InfoTooltip: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      style={{
        position: "absolute", // keeps it static on screen
        right: "40%",
        top: "140px",
        zIndex: 1000,
        padding: "10px",
        boxSizing: "border-box",
        color: "red",
        fontSize: "20px"
      }}
    >
      {/* Info Icon */}
      <FaInfoCircle
        style={{
          color: "#E3000A",
          fontSize: "35px",
          cursor: "pointer",
          marginBottom: "-8px"
        }}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onClick={() => setShowInfo(!showInfo)}
      /> More Info

      {/* Tooltip Bubble */}
      <div
        style={{
          position: "absolute",
          bottom: "-600px",
          left: "-180px", // slight tweak for spacing
          backgroundColor: "#E3000A",
          color: "#fff",
          padding: "30px",
          borderRadius: "8px",
          maxWidth: "680px",
          width: "540px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          opacity: showInfo ? 1 : 0,
          transform: showInfo ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: showInfo ? "auto" : "none",
          zIndex: 1001, // one level above
        }}
      >
        *TRIPLE-PANE WINDOWS ARE ONLY COMPATIBLE WITH EXTERIOR WINDOW FILM*<br></br><br></br>
        1. Enter the number of windows or stone counters tops to be tinted or protected.<br /><br></br>
        2. Add the length and width dimensions in inches.<br /><br></br>
        3. Choose the film type you want.<br /><br></br>
        4. Select if equipment is required to reach your windows.<br /><br></br>
        5. Press schedule a visit to choose a date and time for an in person assessment.<br></br><br></br>

        * Estimations may vary especially if the windows are not easily accessible or they are tripple pane glass. <br></br><br></br>
      </div>
    </div>
  );
};

export default InfoTooltip;
