import React, { useState } from 'react';
import './styles/Header.css';
import BrandLogo from './assets/brand-logo.svg';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };

  return (
    <>
      <header className="header">
        <img src={BrandLogo} alt="Brand Logo" />
      </header>

      <div className="header-content">
        <div className="title-section">
          <h1>Cameras</h1>
          <p style={{ color: "#828181" }}>Manage your cameras here.</p>
        </div>
        <div className="profile">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <i className="fas fa-search" style={{ cursor: 'pointer' }}></i>
        </div>
      </div>
    </>
  );
};

export default Header;
