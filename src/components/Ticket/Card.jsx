import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import {
  FaAmericanSignLanguageInterpreting,
  FaArrowRight,
  FaCube,
  FaLanguage,
  FaWpforms,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Card = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="p-3 bg-white rounded mt-4 row"
      style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }}
    >
      <div className="col-lg-12 d-flex justify-content-between">
        <p className="px-2 py-1 ">Free 20kg baggage</p>
        <BsFillHeartFill color="red" />
      </div>

      <div className="col-lg-12 p-1">
        <div className="row ">
          <div className="col-md-2 mt-4">
            <div className="mx-3">
              <h6>Air Asia</h6>
              <h6>Indonesia AirAsia</h6>
            </div>
          </div>
          <div className="col-md-6 d-flex mt-4">
            <div className="mx-3">
              <h6>22:15</h6>
              <h6 className="fonts-light">CGK</h6>
            </div>
            <div>
              <FaArrowRight color="gray" />
            </div>
            <div className="mx-3">
              <h6>01:05</h6>
              <h6 className="fonts-light">Air Asia</h6>
            </div>
            <div className="mx-3">
              <h6>1th 50m</h6>
              <h6 className="fonts-light">Direct</h6>
            </div>
            <div className="mx-3">
              <FaCube style={{ marginRight: "10px" }} />
              <span className="d-inline-block">20kg</span>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="mx-3 d-flex justify-content-start items-center">
              <div>
                <h6 className="text-danger my-auto">
                  Rp 816.760 <span style={{ color: "gray" }}>/pax</span>
                </h6>
              </div>
              <div className="ms-3">
                <button className="border px-3 py-1 mx-2 text-left rounded d-flex items-center text-white" style={{backgroundColor: "#F97316"}}>
                  <a href='/ticket/book' className="text-white pe-3">Choose Flight</a>
                  
                </button>
              </div>
              <div>
              {!show && <FiChevronDown onClick={() => setShow(true)} />}
                {show && <FiChevronUp onClick={() => setShow(false)} />}
              </div>
            </div>
        </div>
        </div>
        
      </div>
      {show && (
        <div className="row mx-2 mt-4 border-top pt-4">
        <div className="col-md-3 px-2">
          <h6>Air Asia</h6>
          <p className="font-weight-light">Indonesia AirAsia</p>
          <p className="fonts-light">QZ7518</p>
        </div>

        <div className = 'col-md-9 row px-2'>
          <div className="col-lg-12 row">
            <div className="col-md-4">
              <h6 className="fonts-bold">22:15</h6>
              <p className="font-weight-light fonts-light">6 Dec 2022</p>
            </div>

            <div className = 'col-md-8'>
              <h6 className="fonts-medium"> Jakarta (CGK)</h6>
              <h6 className="fonts-medium">
                {" "}
                Soeharto Hatta International Airport
              </h6>
              <h6 className="fonts-medium"> Terminal 1A</h6>
            </div>
          </div>

          <div className="col-md-12">
          <p className="font-wight-light my-4 fonts-light">1h 50m</p>
          </div>

          <div className="col-lg-12 row mt-4">
            <div className="col-md-4">
              
              <div className="">
                <p className="fonts-bold">01:05</p>
                <p className="fonts-light">6 Dec 2022</p>
              </div>
            </div>

            <div className="col-md-8">
              <h6 className="fonts-medium">Bali Denpasar ( DPS )</h6>
              <h6 className="fonts-medium">
                Ngurah Rai International Airport
              </h6>
              <h6 className="fonts-medium">Terminal Domestic</h6>
            </div>
          </div>

          <div className = 'col-sm-12 row mt-5'>
          <div className="text-secondary col-xs-6 mb-4">
            <FaAmericanSignLanguageInterpreting className="mrs-3" />
            <small className="d-inline-block">Non Refundable</small>
          </div>
          <div className="text-success col-xs-6">
            <FaWpforms className="mrs-3" />
            <small className="d-inline-block ">Reschedule</small>
          </div>
          <div className="col-xs-6 mb-4">
            <FaCube className="mrs-3" />
            <small className="d-inline-block">Cabin baggage</small>
          </div>
          <div className="col-xs-6">
            <FaLanguage className="mrs-3" />
            <small className="d-inline-block">Entertainment</small>
          </div>
        </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Card;
