import React from 'react';
import './styles/TableRow.css';
import VectorIcon from './assets/Edge.png';
import CloudIcon from './assets/Cloud.png';

const TableRow = ({ id, name, health, location, recorder, tasks, status, updateStatus }) => {
  const getHealthIcon = (health) => {
    switch (health) {
      case 'Good':
        return <i className="fas fa-circle good-status-icon"></i>; 
      case 'Warning':
        return <i className="fas fa-exclamation-circle warning-status-icon"></i>; 
      case 'Critical':
        return <i className="fas fa-times-circle critical-status-icon"></i>; 
      default:
        return null;
    }
  };

  // Handle status toggle
  const handleStatusToggle = () => {
    const newStatus = status === 'Active' ? 'Inactive' : 'Active';
    updateStatus(id, newStatus); 
  };

  return (
    <tr className="table-row" style={{ color: "#828181" }}>
      <td>
        <input type="checkbox" className="camera-checkbox" />
        <span className="camera-name-box"></span> {name}
      </td>
      <td className="health-column">
        <span className="health-icons">
          <div className="circle-icon-container">
            <img src={CloudIcon} alt="Cloud Icon" className="vector-icon" />
            <span className="circle-icon">A</span>
          </div>
          <div className="circle-icon-container">
            <img src={VectorIcon} alt="Vector Icon" className="vector-icon" />
            <span className="circle-icon">B</span>
          </div>
        </span>
      </td>
      <td>{location}</td>
      <td>{recorder}</td>
      <td>{tasks ? `${tasks} Tasks` : 'N/A'}</td>
      <td>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </td>
      <td>
        <button onClick={handleStatusToggle}>
          {status === 'Active' ? 'Deactivate' : 'Activate'}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
