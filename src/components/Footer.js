import React from 'react';
import { FaCode, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>
        <FaCode style={{ color: '#6366f1' }} /> with{' '}
        <FaHeart className="heart-icon" /> by <strong>Savvydon</strong> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;