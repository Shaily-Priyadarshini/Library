import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Handle Previous and Next buttons
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button 
        disabled={currentPage === 1} 
        onClick={handlePrevious} 
        className="pagination-button"
      >
        Previous
      </button>
      
      {/* Previous Page (if it exists) */}
      {currentPage > 1 && (
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          className="pagination-button"
        >
          {currentPage - 1}
        </button>
      )}

      {/* Current Page */}
      <button className="pagination-button active">
        {currentPage}
      </button>

      {/* Next Page (if it exists) */}
      {currentPage < totalPages && (
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          className="pagination-button"
        >
          {currentPage + 1}
        </button>
      )}

      {/* Next Button */}
      <button 
        disabled={currentPage === totalPages} 
        onClick={handleNext} 
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
