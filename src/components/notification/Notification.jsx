import React, { useState, useEffect } from "react";
import "./Notification.css";
import axios from "axios";

function Notification() {
  const [menunggu, setMenunggu] = useState([]);
  const [diterima, setDiterima] = useState([]);
  const [ditolak, setDitolak] = useState([]);
  const NotifMenunggu = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/tansactransaction/notif/menunggu', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data)
        setMenunggu(response.data.notifOk);
      });
  };
  const NotifDiterima = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/tansactransaction/notif/diterima', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data)
        setDiterima(response.data.notifAcc);
      });
  };
  const NotifDitolak = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/tansactransaction/notif/ditolak', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data)
        setDitolak(response.data.notifReject);
      });
  };
  useEffect(() => {
    NotifMenunggu();
    NotifDiterima();
    NotifDitolak();
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
                  <h3 className='ml ml-5 pt-3'>Notification</h3>
                </table>
                <p className="fw-bold ">Berhasil Memesan</p>
                {menunggu.map((menunggu, i) => (
                  <div className="card-body border-top bg-sky-100">
                    <div className=''>
                      <p>
                        Anda berhasil <strong>memesan</strong> tiket dari {menunggu.product.kota_asal} ke {menunggu.product.kota_tujuan}
                      </p>
                    </div>
                  </div>
                ))}
                <p className="fw-bold mt-3">Pembayaran <strong className="text-success">Berhasil</strong></p>
                {diterima.map((diterima, i) => (
                  <div className="card-body border-top bg-sky-100">
                    <div className=''>
                      <p>
                        Tiket pesanan anda dari {diterima.product.kota_asal} ke {diterima.product.kota_tujuan} telah <strong>diterima</strong>
                        silahkan <a alt='' href={`/history/checkin/${diterima.product.id}`}>Check-in</a>
                      </p>
                    </div>
                  </div>
                ))}
                <p className="fw-bold mt-3">Pembayaran <strong className="text-danger"> Ditolak</strong> </p>
                {ditolak.map((ditolak, i) => (
                  <div className="card-body border-top bg-sky-100">
                    <div className=''>
                      <p>
                        Tiket pesanan anda dari {ditolak.product.kota_asal} ke {ditolak.product.kota_tujuan} <strong>ditolak</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div >
      </section >

    </div >


  )
}
export default Notification