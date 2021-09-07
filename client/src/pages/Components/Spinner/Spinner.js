import React from "react";

function Spinner() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border  text-primary"
        style={{
          width: "5rem",
          height: "5rem",
          borderWidth: "10px"
        }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
