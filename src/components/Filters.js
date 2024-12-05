import React from 'react';
import './styles/Filters.css';
import status from './assets/status.png';
import Location from './assets/Location icon.png'
const Filters = () => {
  return (
    <div className="filters">
      <div className="filter-item">
        <div className="custom-select">
        <img src={Location} alt="status Icon" className='filter-icon' />
          <select>
            <option value="">Location</option>
          </select>
        </div>
      </div>

      <div className="filter-item">
        <div className="custom-select">
        <img src={status} alt="status Icon" className='filter-icon' />
          <select>
            <option value=""> Status</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
