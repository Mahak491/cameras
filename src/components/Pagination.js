import React, { useState } from 'react';
import './styles/Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPageValue, setItemsPerPageValue] = useState(itemsPerPage || 10);

  const totalPages = Math.ceil(totalItems / itemsPerPageValue);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      // onPageChange(page, itemsPerPageValue);
    }
  };

  const handleItemsPerPageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setItemsPerPageValue(value);
    setCurrentPage(1); 
    // onPageChange(1, value);
  };

  const startItem = (currentPage - 1) * itemsPerPageValue + 1;
  const endItem = Math.min(startItem + itemsPerPageValue - 1, totalItems);

  return (
    <div className="pagination-container" style={{color:"#828181"}}>
      <div className="pagination-right">
        <div className="pagination-info">
          <select
            value={itemsPerPageValue}
            onChange={handleItemsPerPageChange}
            className="items-per-page-dropdown"
            style={{color:"#828181"}}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <span>
            {1}-{10} of {350}
          </span>
        </div>
        <div className="pagination-buttons" style={{color:"#828181"}}>
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            &laquo;
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            &lsaquo;
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            &rsaquo;
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
