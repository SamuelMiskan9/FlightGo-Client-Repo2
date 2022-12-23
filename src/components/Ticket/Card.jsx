import React, { useState, useEffect } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import {
  FaAmericanSignLanguageInterpreting,
  FaArrowRight,
  FaCube,
  FaLanguage,
  FaWpforms,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
const Card = () => {
  const [show, setShow] = useState(false);
  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    getTicket();
  }, []);
  const getTicket = async () => {
    const response = await axios.get("https://flightgo-be-server.up.railway.app/v1/api/ticket");
    console.log(response.data)
    setTicket(response.data);
  };
  return (
    <>
      {ticket.map((ticket, i) => (
        <div
        key={i}
          className="p-3 bg-white rounded mt-4 row"
          style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }}
        >
          <div className="col-lg-12 d-flex justify-content-between">
            <p className="px-2 py-1 ">Type : {ticket.bentuk_penerbangan} {ticket.jenis_penerbangan} </p>
            <BsFillHeartFill color="red" />
          </div>

          <div className="col-lg-12 p-1">
            <div className="row ">
              <div className="col-md-2 mt-4">
                <div className="mx-3">
                  <h6>FlightGo</h6>
                  <h6>Indonesia FlightGo</h6>
                </div>
              </div>
              <div className="col-md-6 d-flex mt-4">
                <div className="mx-3">
                  <h6>{ticket.bandara_asal}</h6>
                  <h6 className="fonts-light">{ticket.kode_negara_asal}</h6>
                </div>
                <div>
                  <FaArrowRight color="gray" />
                </div>
                <div className="mx-3">
                  <h6>{ticket.bandara_tujuan}</h6>
                  <h6 className="fonts-light">{ticket.kode_negara_tujuan}</h6>
                </div>
                <div className="mx-3">
                  <h6>{ticket.depature_date}</h6>
                  <h6 className="fonts-light">{ticket.depature_time}</h6>
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
                      Rp {ticket.total_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')} <span style={{ color: "gray" }}>/pax</span>
                    </h6>
                  </div>
                  <div className="ms-3">
                    <button className="border px-3 py-1 mx-2 text-left rounded d-flex items-center text-white" style={{ backgroundColor: "#F97316" }}>
                      <Link className="text-white pe-3" to={`/ticket/book/${ticket.id}`}>
                        Choose Flight
                      </Link>
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
                <h6>FlightGo</h6>
                <p className="font-weight-light">Indonesia FlightGo</p>
                {/* <p className="fonts-light">QZ7518</p> */}
              </div>

              <div className='col-md-9 row px-2'>
                <div className="col-lg-12 row">
                  <div className="col-md-4">
                    <h6 className="fonts-bold">{ticket.depature_time}</h6>
                    <p className="font-weight-light fonts-light">{ticket.depature_date}</p>
                  </div>

                  <div className='col-md-8'>
                    <h6 className="fonts-medium"> {ticket.kota_asal} ({ticket.kode_negara_asal})</h6>
                    <h6 className="fonts-medium">
                      {" "}
                      {ticket.bandara_asal}
                    </h6>
                  </div>
                </div>

                <div className="col-md-12">
                  <p className="font-wight-light my-4 fonts-light">1h 50m</p>
                </div>

                <div className="col-lg-12 row mt-4">
                  <div className="col-md-4">
                  </div>

                  <div className="col-md-8">
                    <h6 className="fonts-medium">{ticket.kota_tujuan} ( {ticket.kode_negara_tujuan} )</h6>
                    <h6 className="fonts-medium">
                    {ticket.bandara_tujuan}
                    </h6>
                  </div>
                </div>

                <div className='col-sm-12 row mt-5'>
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
      ))}
    </>
  );
};

export default Card;
