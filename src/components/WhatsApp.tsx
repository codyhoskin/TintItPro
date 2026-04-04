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
    <div style={{ position: 'relative', display: 'inline-block', padding: '10px'}}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Text us on WhatsApp"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 12px',
          borderRadius: 0,
          fontSize: '14px',
          fontWeight: 'bold',
          backgroundColor: hovered ? '#25d366' : 'transparent',
          color: hovered ? 'white' : '#25d366',
          border: '1px solid #25d366',
          boxShadow: 'var(--glass-edge-light)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <FaWhatsapp size={18} />
        <span
          style={{
            display: 'inline-block',
            maxWidth: hovered ? '500px' : '200px',
            overflow: 'hidden',
            transition: 'max-width 0.3s ease',
          }}
        >
          {hovered ? 'Click to text us on WhatsApp!' : 'Have a quick question?'}
        </span>
      </button>

      {showPopup && (
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#25d366',
            color: 'white',
            padding: '2px 14px',
            borderRadius: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            fontSize: '13px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          Message sent!
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
