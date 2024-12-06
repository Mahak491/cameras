import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import Filters from './Filters';
import './styles/Table.css';

const Table = () => {
  const [cameras, setCameras] = useState([]); 
  const [filteredCameras, setFilteredCameras] = useState([]);
  const [filters, setFilters] = useState({ location: '', status: '' }); 

  const token = "4ApVMIn5sTxeW7GQ5VWeWiy"; 

  useEffect(() => {
    const getCameras = async () => {
      try {
        const response = await fetch("https://api-app-staging.wobot.ai/app/v1/fetch/cameras", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch cameras");
        }
  
        const data = await response.json();
        console.log("Fetched cameras:", data);
  
        if (data && data.data && Array.isArray(data.data)) {
          setCameras(data.data);
          setFilteredCameras(data.data)
        } else {
          console.error("Invalid data structure:", data);
          setCameras([]);
          setFilteredCameras([]);
        }
      } catch (error) {
        console.error("Error fetching cameras:", error);
        setCameras([]);
        setFilteredCameras([]);
      }
    };
  
    getCameras();
  }, [token]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  useEffect(() => {
    let filtered = cameras;

    if (filters.location) {
      filtered = filtered.filter((camera) => camera.location === filters.location);
    }

    if (filters.status) {
      filtered = filtered.filter((camera) => camera.status === filters.status);
    }

    setFilteredCameras(filtered);
  }, [filters, cameras]);

  const updateCameraStatus = async (id, status) => {
    try {
      const response = await fetch("https://api-app-staging.wobot.ai/app/v1/update/camera/status", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          status,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update camera status");
      }

      const result = await response.json();
      console.log("Camera status updated:", result);
    } catch (error) {
      console.error("Error updating camera status:", error);
    }
  };

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <table className="camera-table">
        <thead style={{ color: "#828181" }}>
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
          {Array.isArray(filteredCameras) && filteredCameras.length > 0 ? (
            filteredCameras.map((camera) => (
              <TableRow key={camera._id} {...camera} updateStatus={updateCameraStatus} />
            ))
          ) : (
            <tr><td colSpan="7">No cameras available</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
