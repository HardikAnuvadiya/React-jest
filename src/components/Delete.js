import React, { useState } from "react";
import "./Delete.css";
const Delete = () => {
  const [openModal, setOpenModal] = useState(false);

  const fireAlert = () => {
    setOpenModal(false);
    // window.alert("you have succesfully deleted");
  };

  return (
    <div className="main-div">
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className="delete-btn"
      >
        Delete
      </button>
      {openModal && (
        <div className="modal-div">
          <div>
            <h1>Are you Sure You Want To Delete it?</h1>
          </div>
          <div className="btn-group">
            <button type="button" onClick={fireAlert}>
              Confirm
            </button>
            <button
              className="action-btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Delete;
