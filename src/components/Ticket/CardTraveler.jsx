import React from "react";

const CardTraveler = () => {
  return (
    <div className="p-3 rounded h-auto cn-trav mt-4">
      <h6 className="px-2 cn-trav-item">Contact Information</h6>
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
      <div className="d-flex mt-2">
        <div>
          <label>Country</label>
          <select className="form-select mt-1">
            <option selected>+62</option>
            <option value="1">+09</option>
            <option value="2">+60</option>
            <option value="3">+77</option>
          </select>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <label>Mobile Number</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="082345678910"
          />
        </div>
      </div>
      <div className="mt-2">
        <label>Email</label>
        <input
          type="text"
          className="form-control mt-1 w-50"
          placeholder="abcdef@gmail.com"
        />
      </div>

      {/* sign */}
      <div className="card-signup-login p-3 bg-white rounded mt-4">
        <div className="d-flex justify-content-between">
          <h6 className="text-white" style={{ fontSize: "12px" }}>
            Sign up or log in now to get a perfect booking experience
          </h6>
          <button
            className="border py-1 px-2 text-white"
            style={{ borderRadius: "4px", fontSize: "12px" }}
          >
            <a href='/login' className="text-white">Login</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTraveler;
