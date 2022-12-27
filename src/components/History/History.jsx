import React from 'react'
import pict1 from '../../components/assets/two.png'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Col, Row } from 'react-bootstrap';
function History() {
  const [history, setHistory] = useState([]);
  const historyUser = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data/history/member', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setHistory(response.data.memberHistory);
      });
  };
  useEffect(() => {
    historyUser();
  }, [])
  return (
    <div>
      <header className="section-header pt-3"></header>

      <section className="section-content padding-y pb-5">
        <div className="container">
          <div className="row">
            <main className="col-md-24">

              <div className="card">
                <div className="table table-borderless table-shopping-cart">
                  <h3 className='ml ml-5 pt-3'>History</h3>
                </div>
              </div>
              {history.map((history, i) => (
                <div className="p-3 rounded mt-4" key={i} style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }}>
                  <Row>
                    <Col md={8}>
                      <div className="d-flex justify-content-between col-md-5">
                        <p className=" py-1 ">Date: {history.createdAt}</p>
                      </div>

                      <div className="d-flex justify-content-between col-md-5">
                        <div className="d-flex mt-4">
                          <div className='grid grid-cols-3'>
                            <p className='me-5'>{history.product.kota_asal}</p>
                            <img alt='pict1' src={pict1} style={{ height: 30 }} />
                            <p>{history.product.kota_tujuan}</p>
                          </div>
                        </div>

                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex justify-content-between">       
                        <p><small className='fw-bold'>Status Pembayaran </small>{history.status}</p>
                      </div>
                    </Col>
                    <Col>
                      <Button className='d-flex justify-content-between' style={{ backgroundColor: "#F97316" }} >
                        <Link to={`/history/checkin/${history.id}`} className='text-white'>
                          Check In
                        </Link>
                      </Button>
                    </Col>
                  </Row>
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
export default History;