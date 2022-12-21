import React from "react";
import { FiAirplay, FiChevronDown } from "react-icons/fi";
import Card from "../../components/Ticket/Card";
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar';

const TicketPage = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="bg-white">
        <TopNavbar />
      </div>

      <div className="container pt-28 pb-3">
        <div className="row">
          <div className="col-lg-12 px-4 bg-white">
            <div className="d-flex py-4 rounded items-center justify-content-start">
              <FiAirplay className="icon-select-departure my-auto" />
              <div>
                <h5>Select Departure Flight</h5>
                <p className="font-weight-light my-auto">JKTA - DPS Mon, 5 Dec</p>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>

        {/* departure */}
        <div className="p-3 bg-white rounded mt-2 row">
          <div className="col-lg-12 row mb-3">
            <div className="col-md-9">
              <h4> Departure flight to Bali Denpasar</h4>
              <p className="font-weight">Mon, 5 Dec 2022 1 Traveler</p>
            </div>
            <div className="col-md-3 p-0">
              <button className="mx-2 border px-3 py-1 w-full"><a href='/landing' className="text-black">Change Search</a></button>
            </div>
          </div>
          <hr />
          <div className="col-lg-12">
            <div className="d-flex justify-content-end items-center">
              <h6 className="my-auto pe-3">Sort: </h6>
              <button className="border px-3 py-1 mx-2 d-flex items-center">
                Lowest Price <FiChevronDown className="ms-2" />
              </button>
            </div>
          </div>
        </div>
        {/* free */}
        <Card />
        <Card />
        <Card />
        {/* sign up */}
        <div className='row'>
          <div className="card-signup-login p-3 rounded mt-4">
            <div className="d-flex justify-content-between">
              <h6 className="text-white">
                Sign up or log in now to get a perfect booking experience
              </h6>
              <div>
                <button
                  className="border px-3 py-1 mx-2"
                  style={{ borderRadius: "4px" }}
                >
                  <a href='/login' className="text-white">Login</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
