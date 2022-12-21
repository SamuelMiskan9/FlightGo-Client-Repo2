import React from "react";
import { FaUser } from "react-icons/fa";

const CardTraveler1 = () => {
  return (
    <div className="p-3 rounded h-auto mt-3 cn-trav">
      <h6 className="px-2 cn-trav-item">Traveler Information</h6>
      <div className="d-flex justify-content-between mb-3">
        <div>
          <FaUser className="d-inline-block" style={{ marginRight: "10px" }} />
          <span>Traveler 1 Adult</span>
        </div>
        <div>
          <input type="checkbox" style={{ marginRight: "10px" }} />
          <span>Same with Contact</span>
        </div>
      </div>
      <div className="d-flex mt-2">
        <div>
          <label>Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Rangga Abdul"
          />
        </div>
      </div>
      <div className="mt-2">
        <label>Doc Type</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="ID Card"
        />
      </div>
      <div className="mt-2">
        <label>ID Card Number</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="1234567890"
        />
      </div>
    </div>
  );
};

export default CardTraveler1;
