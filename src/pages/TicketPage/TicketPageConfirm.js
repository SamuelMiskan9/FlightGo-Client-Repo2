import React, { useState } from "react";
import {
  FaAmericanSignLanguageInterpreting,
  FaArrowRight,
  FaCube,
  FaLanguage,
  FaWpforms,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar';

const TicketPageConfirm = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="bg-[#f6f6f6] lg:h-screen sm:h-auto mt-lg-4">
        <div className="bg-white">
          {/* Navbar */}
          <TopNavbar />
        </div>

        <div className="container pt-16 pb-5">
          <div className="row">
            {/* Departure Flight */}
            <div className="col-lg-7 mt-5">
              <div className="col-lg-12 bg-white rounded ">
                <h6 className="pt-4 px-3">Departure Flight</h6>
                <div className="row">
                  <div className="col-md-8 col-sm-12 mt-4 d-flex">
                    <div className="mx-3">
                      <h6>Jakarta (CGK)</h6>
                      <h6 style={{ fontSize: "12px", color: "gray" }}>
                        1 Pax Direct
                      </h6>
                    </div>
                    <div>
                      <FaArrowRight color="gray" />
                    </div>
                    <div className="mx-3">
                      <h6>Bali Denpasar (DPS)</h6>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 px-4">
                    <button className="border px-3 py-1 rounded text-white w-full" style={{ backgroundColor: "#F97316" }}>
                      <a href='/ticket' className="text-white">Choose Flight</a>
                    </button>
                  </div>
                </div>
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
              </div>
            </div>

            {/* Detail Harga  */}
            <div
              className="col-lg-5 mt-5"
              style={{
                height: `${show ? "40vh" : "25vh"}`,
              }}
            >

              <div className='p-3 col-lg-12 bg-white rounded'>
                <h6 className="font-bold">Price detail</h6>
                <div className="">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6
                        className="d-inline-block"
                        style={{ fontWeight: "500", fontSize: "14px" }}
                      >
                        Depart (CGK =&gt; DPS)
                      </h6>
                      {!show && <FiChevronDown onClick={() => setShow(true)} />}
                      {show && <FiChevronUp onClick={() => setShow(false)} />}
                    </div>
                    <div>
                      <h6>Rp 849.044</h6>
                    </div>
                  </div>
                  {show && (
                    <>
                      <div className="d-flex justify-content-between">
                        <h6 className="d-inline-block text-secondary">
                          Adult x 1
                        </h6>
                        <h6 className="text-secondary">Rp 849.044</h6>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h6 className="d-inline-block text-secondary">Tax</h6>
                        <h6 className="text-secondary">Rp 423.044</h6>
                      </div>
                    </>
                  )}

                  <div className="mt-4">
                    <div className="d-flex justify-between">
                      <h6 className="fonts-normal mb-3">Total Price</h6>
                      <h6 className="">Rp 849.044</h6>
                    </div>
                    
                    <button className="btn w-full" style={{ backgroundColor: "#F97316" }}>
                      <a href='/payment' className="text-white">Continue Booking</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPageConfirm;
