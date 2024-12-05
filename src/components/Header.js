import React from 'react';
import './styles/Header.css';
import BrandLogo from './assets/brand-logo.svg';

const Header = () => (
  <>
    <header className='header'>
      <img src={BrandLogo} alt="Brand Logo" />
    </header>

    <div className="header-content">
      <div className="title-section">
        <h1>Cameras</h1>
        <p style={{color:"#828181"}}>Manage your cameras here.</p>
      </div>
      <div className="profile">
        <input type="text" placeholder="search" />
        <i className="fas fa-search"></i> {/* FontAwesome search icon */}
      </div>
    </div>
  </>
);

export default Header;
