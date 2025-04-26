import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="text-white text-center py-3 px-2"
      style={{
        backgroundColor: '#1a237e', // Mild dark blue
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 1000,
        fontSize: '0.9rem',
      }}
    >
      <p className="mb-0">
        Developed by{' '}
        <span
          onClick={() => navigate('/team')}
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: '#90caf9',
            wordBreak: 'break-word',
          }}
        >
          Department of Computer Science and Engineering AITAM
        </span>
      </p>
    </footer>
  );
};

export default Footer;
