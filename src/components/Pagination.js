import React, { useState } from 'react';
import './styles/Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange, onItemsPerPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onItemsPerPageChange(value);
  };

  return (
    <div className="pagination-container" style={{ color: "#828181" }}>
      <div className="pagination-right">
        <div className="pagination-info">
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="items-per-page-dropdown"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <span>
            {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}-
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
          </span>
        </div>
        <div className="pagination-buttons">
          <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
            &laquo;
          </button>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            &lsaquo;
          </button>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            &rsaquo;
          </button>
          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
