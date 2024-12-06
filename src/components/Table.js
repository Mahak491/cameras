import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import Filters from './Filters';
import Pagination from './Pagination';
import './styles/Table.css';

const Table = ({ searchTerm }) => {
  const [cameras, setCameras] = useState([]);
  const [filteredCameras, setFilteredCameras] = useState([]);
  const [filters, setFilters] = useState({ location: '', status: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
        console.log(data);
        if (data && data.data && Array.isArray(data.data)) {
          setCameras(data.data);
          setFilteredCameras(data.data);
        } else {
          setCameras([]);
          setFilteredCameras([]);
        }
      } catch (error) {
        console.error("Error fetching cameras:", error);
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
      filtered = filtered.filter((camera) =>
        camera.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    if (filters.status) {
      filtered = filtered.filter((camera) => camera.status === filters.status);
    }

    if (searchTerm) {
      filtered = filtered.filter((camera) =>
        camera.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCameras(filtered);
    setCurrentPage(1); 
  }, [filters, cameras, searchTerm]);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCameras = filteredCameras.slice(startIndex, startIndex + itemsPerPage);


  const updateStatus = (id, newStatus) => {
    setCameras((prevCameras) =>
      prevCameras.map((camera) =>
        camera._id === id ? { ...camera, status: newStatus } : camera
      )
    );
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
          {paginatedCameras.length > 0 ? (
            paginatedCameras.map((camera) => (
              <TableRow key={camera._id} {...camera} updateStatus={updateStatus} />
            ))
          ) : (
            <tr><td colSpan="7">No cameras available</td></tr>
          )}
        </tbody>
      </table>
      <Pagination
        totalItems={filteredCameras.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
};

export default Table;
