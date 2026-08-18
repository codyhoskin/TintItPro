import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const TextButtonWithPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Auto hide after 3s
  };

  return (
    <div style={{ position: "relative", display: "inline-block", textAlign: "center" }}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Text us at 403 470 1687"
        style={{
          backgroundColor: hovered ? "var(--primary)" : "transparent",
          border: "2px solid var(--text-button)",
          color: hovered ? "white" : "var(--text-button)",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center content
          gap: "8px",
          borderRadius: "6px",
          cursor: "pointer",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "background 0.3s ease, transform 0.3s ease",
          textDecoration: "none",
          fontWeight: "900",
          fontFamily: "var(--font-inter-bold)",
          minWidth: "250px",
          fontSize: "1rem",
        }}
      >
        <FaPhoneAlt />
        Get Instant Response
      </button>

      {showPopup && (
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#121212",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            whiteSpace: "nowrap",
            opacity: 1,
            transition: "opacity 0.3s ease",
          }}
        >
          Message me at 403 470 1687 😉
        </div>
      )}
    </div>
  );
};

export default TextButtonWithPopup;
