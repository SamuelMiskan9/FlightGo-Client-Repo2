import React from 'react'
import pict1 from '../../components/assets/two.png'
import { useState, useEffect } from "react";
import axios from "axios";
function History() {
  const [history, setHistory] = useState("");
  const historyUser = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data/history/member', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data)
        setHistory(response.data);
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
            <table className="table table-borderless table-shopping-cart">
              <h3 className='ml ml-5 pt-3'>History</h3>
            </table>
          </div>

          <div className="p-3 bg-white rounded mt-4" style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }}>
            <div className="d-flex justify-content-between">
              <p className="px-2 py-1 ">Minggu, 22 Januray 2023</p>
            </div>

            <div className="d-flex justify-content-between">
              <div className="d-flex mt-4">
                <div className='grid grid-cols-3'>
                  <div>Jakarta</div>
                  <img alt='pict1' src={pict1} style={{height: 30}} />
                  <div>Semarang</div>
                </div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  </section>
</div>
);
}
export default History;