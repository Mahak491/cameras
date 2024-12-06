import React, { useState } from 'react';
import './styles/Filters.css';
import status from './assets/status.png';
import Location from './assets/Location icon.png';

const Filters = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');
  const [statusFilter, setStatusFilter] = useState('');


  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilterChange('location', e.target.value); 
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    onFilterChange('status', e.target.value); 
  };

  return (
    <div className="filters">
      <div className="filter-item">
        <div className="custom-select">
          <img src={Location} alt="Location Icon" className="filter-icon" />
          <select value={location} onChange={handleLocationChange}>
            <option value="">Location</option>
            <option value="Denver, CO">Denver, CO</option>
            <option value="New York, NY">New York, NY</option>
            <option value="Los Angeles, CA">Los Angeles, CA</option>
          </select>
        </div>
      </div>

      <div className="filter-item">
        <div className="custom-select">
          <img src={status} alt="Status Icon" className="filter-icon" />
          <select value={statusFilter} onChange={handleStatusChange}>
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
