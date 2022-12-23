import { Button, Container } from "react-bootstrap"
import React,  { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import swal from "sweetalert";;
const UpdateOrder = () => {
    const { id } = useParams();
    const [orders, setOrders] = useState({});
    const navigate = useNavigate();
    const orderProduct = async () => {
        await axios
          .get(`https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            console.log(response.data.data)
            setOrders(response.data.data);
          });
      };
      const Accepted = () => {
        swal({
          title: "Pesanan Akan Diterima?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willAccpted) => {
          if (willAccpted) {
            const data = {
              status: "Pesanan Diterima",
            };
            axios
              .put(
                `https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/accept/${id}`,
                data,
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then((response) => {
                navigate("/listorder");
              });
            swal("Status penawaran berhasil diubah!", {
              icon: "success",
            });
          } else {
            swal("Status penawaran tidak jadi diubah!");
          }
        });
      };
    
      const Rejected = () => {
        swal({
          title: "Pesanan Akan Ditolak?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willRejected) => {
          if (willRejected) {
            const data = {
              status: "Pesanan Ditolak",
            };
            axios
              .put(
                `https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/reject/${id}`,
                data,
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then((response) => {
                navigate("/listorder");
              });
          } else {
            swal("Status penawaran tidak jadi diubah!");
          }
        });
      };
    
      useEffect(() => {
        orderProduct();
      }, [orders.price]);
    return(
        <Container>
          <h1>Cek Transaksi</h1>
            <p>status: {orders.status}</p>
            <p>Ticket id: {orders.productId}</p>
            <p>User id: {orders.userId}</p>
            <p>Bukti pembayaran: <img className='w-50' src={orders.bukti_Pembayaran} alt="bukti pembayaran"/> </p>
            <Button className="me-3" onClick={Accepted}>
                Terima
            </Button>
            <Button  onClick={Rejected}>
                Tolak
            </Button>
        </Container>
    )
}
export default UpdateOrder