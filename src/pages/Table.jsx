import React from "react";

const Table = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Table Selection</h2>
              <button className="btn-close" onClick={closeModal}>
                Close
              </button>
            </div>
            <div className="modal-body">
              <p>Select a table from the list.</p>
              {/* Your table selection logic goes here */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
