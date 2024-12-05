import React from 'react';
import TableRow from './TableRow';
import './styles/Table.css';

const Table = () => {
  const rows = [
    { name: 'Camera 1', health: ' ', location: 'New York City, NY', recorder: 'New York Recorder', tasks: 3, status: 'Active' },
    { name: 'Camera 2', health: ' ', location: 'New York City, NY', recorder: 'New York Recorder', tasks: 5, status: 'Active' },
    { name: 'Camera 3', health: ' ', location:'Los Angeles, CA', recorder:'Los Angeles Recorder', tasks:5, status: 'Active' },
    { name: 'Camera 4', health: ' ', location:'San Franciso, CA', recorder:'San Franciso Recorder', tasks:'N/A', status: 'Inactive' },
    { name: 'Camera 5', health: ' ', location:'Chicago, IL', recorder:'N/A', tasks:2, status: 'Active' },
    { name: 'Camera 6', health: ' ', location:'Miami, FL', recorder:'Miami Recorder', tasks:'N/A', status: 'Active' },
    { name: 'Camera 7', health: ' ', location:'Miami, FL', recorder:'Miami Recorder', tasks:2, status: 'Active' },
    { name: 'Camera 8', health: ' ', location:'Seattle, WA', recorder:'Seattle Recorder', tasks:'N/A', status: 'Inactive' },
    { name: 'Camera 9', health: ' ', location:'San Diego, CA', recorder:'N/A', tasks:4, status: 'Active' },
    { name: 'Camera 10', health: ' ', location:'Boston, MA', recorder:'N/A', tasks:2, status: 'Active' },
  ];

  return (
    <table className="camera-table">
      <thead style={{color:"#828181"}}>
        <tr>
          <th>
            <input type="checkbox" className="select-all-checkbox" />
            <span className="name-heading">NAME</span> 
          </th>
          <th>HEALTH</th>
          <th>LOCATION</th>
          <th>RECORDER</th>
          <th>TASKS</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index} {...row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
