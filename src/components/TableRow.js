import React from 'react';
import './styles/TableRow.css';
import VectorIcon from './assets/Edge.png' 
import CloudIcon  from './assets/Cloud.png'

const TableRow = ({ name, health, location, recorder, tasks, status }) => {
  const getHealthIcon = (health) => {
    switch (health) {
      case 'Good':
        return <i className="fas fa-circle good-status-icon"></i>; // Green circle
      case 'Warning':
        return <i className="fas fa-exclamation-circle warning-status-icon"></i>; // Yellow warning
      case 'Critical':
        return <i className="fas fa-times-circle critical-status-icon"></i>; // Red cross
      default:
        return null;
    }
  };

  return (
    <tr className="table-row" style={{color:"#828181"}}>
      <td>
        <input type="checkbox" className="camera-checkbox" />
        <span className="camera-name-box"></span> {name}
      </td>
      <td className="health-column">
        <span className="health-icons">
          <div className="circle-icon-container">
          <img src={CloudIcon} alt="Vector Icon" className="vector-icon" />
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
        <i className="fas fa-ban"></i>
      </td>
    </tr>
  );
};

export default TableRow;
