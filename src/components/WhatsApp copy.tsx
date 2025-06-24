import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hovered, setHovered] = useState(false);

  const phoneNumber = '+4034701687';
  const message = 'Hello, I have a question!';

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Contact us on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '18px 20px',
          borderRadius: '6px',
          minWidth: '300px',
          fontSize: '1rem',
          fontWeight: '900',
          fontFamily: 'var(--font-inter-bold)',
          backgroundColor: hovered ? '#25d366' : 'transparent',
          color: hovered ? 'white' : '#25d366',
          border: '2px solid #25d366',
          textDecoration: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          transition: 'background 0.3s ease, transform 0.3s ease, color 0.3s ease',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <FaWhatsapp size={20} />
        Contact us on WhatsApp
      </button>

      {showPopup && (
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#25d366',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            whiteSpace: 'nowrap',
            opacity: 1,
            transition: 'opacity 0.3s ease',
            fontWeight: 'bold',
          }}
        >
          Message us on WhatsApp 😉
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
