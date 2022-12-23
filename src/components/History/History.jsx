import React from 'react'
import pict1 from '../../components/assets/two.png'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function History() {
  const [history, setHistory] = useState([]);
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  const Request = async () => {
    try {
      const Response = await axios.get("https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHistory(Response.data.data)
      console.log(Response.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    token ? Request() : Navigate('/login')

  }, [token]);

  return (
    <div className='container-fluid bg-gray-100'>
      <header className="section-header"></header>

      <section className="section-content padding-y pb-5">
        <div className="container">
          <div className="row">
            <main className="col-md-12 col-lg-6 m-auto">

              <div className="card">
                <table className="table table-borderless ">
                  <h3 className='ml ml-5 pt-3 my-auto'>History</h3>
                </table>
              </div>

              {history.map((items) => {
                return (
                  <div className="p-3 bg-white rounded mt-4" style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }} >
                    <div className="d-flex justify-content-between border-bottom">
                      <p className="py-1 "> {items.checkIn} </p>
                      <p className='py-1 '> {items.product.bentuk_penerbangan} </p>
                    </div>

                    <div className="d-flex justify-content-start pt-4">
                      <div className="d-flex">
                        <h6 className='m-auto'> {items.product.kota_asal} </h6>
                        <img alt='pict1' src={pict1} style={{ height: 30 }} className='px-4 m-auto' />
                        <h6 className='m-auto'> {items.product.kota_tujuan} </h6>
                      </div>
                    </div>

                    <div className='text-end text-slate-900'>
                      <p>total price: {items.product.total_price}</p>
                    </div>

                    <div className="mt-3 p-2 px-4 rounded-lg text-end bg-slate-700 text-white">
                      <p className='my-auto'> {items.status} </p>
                    </div>
                  </div>
                )
              })}


            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default History;