// Footer.js
import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    zIndex: '999', // Set a high z-index to ensure it stays above other content
  };

  return (
    <footer style={footerStyle}>
    <p >&copy; 2024 Created By Samaruddhi Rajendra Patil. <span style={{ marginLeft: '30px' }}>All rights reserved.</span></p>
  </footer>
  
  
  );
}

export default Footer;
