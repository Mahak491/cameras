import React from 'react';
import './styles/TableRow.css';
import VectorIcon from './assets/Edge.png';
import CloudIcon from './assets/Cloud.png';

const TableRow = ({ _id, name, health, location, recorder, tasks, status, updateStatus }) => {
  const getHealthIcon = (health) => {
    const cloudStatus = health?.cloud;
    const deviceStatus = health?.device;
    
    return (
      <div className="health-icons">
        {cloudStatus && (
          <div
            className="circle-icon-container"
            style={{
              backgroundColor: cloudStatus === "A" ? "green" : "red",
            }}
          >
            <img src={CloudIcon} alt="Cloud Icon" className="vector-icon" />
            <span className="circle-icon">{cloudStatus}</span>
          </div>
        )}
        {deviceStatus && (
          <div
            className="circle-icon-container"
            style={{
              backgroundColor: deviceStatus === "A" ? "green" : "red",
            }}
          >
            <img src={VectorIcon} alt="Device Icon" className="vector-icon" />
            <span className="circle-icon">{deviceStatus}</span>
          </div>
        )}
      </div>
    );
  };

 
  const handleStatusToggle = () => {
    const newStatus = status === 'Active' ? 'Inactive' : 'Active';
    updateStatus(_id, newStatus);
  };

  return (
    <tr className="table-row" style={{ color: "#828181" }}>
      <td>
        <input type="checkbox" className="camera-checkbox" />
        <span className="camera-name-box"></span> {name}
      </td>
      <td className="health-column">
      <div className="circle-icon-container">
            <img src={CloudIcon} alt="Cloud Icon" className="vector-icon" />
            </div>
            
        {getHealthIcon(health)}
        <div className="circle-icon-container">
            <img src={VectorIcon} alt="Vector Icon" className="vector-icon" />
            </div>
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
