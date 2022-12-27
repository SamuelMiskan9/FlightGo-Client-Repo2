import { Button, Container, Carousel } from "react-bootstrap"
import React,  { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import swal from "sweetalert";
const UpdateOrder = () => {
    const { id } = useParams();
    const [orders, setOrders] = useState({});
    // const [user, setUser] = useState({});
    // const [userid, setuserId] = useState([]);
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/landing");
    }
    const orderProduct = async () => {
        await axios
          .get(`https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
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
                window.location.reload();
              });
            swal("Pesanan berhasil diterima!", {
              icon: "success",
            });
          } else {
            swal("Pesanan tidak jadi diterima");
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
                window.location.reload();
              });
          } else {
            swal("Pesanan tidak jadi ditolak");
          }
        });
      };
    
      useEffect(() => {
        orderProduct();
      }, []);
    return(
        <Container>
            <h3 className="fw-bold">Cek Transaksi</h3>
            <Carousel variant="dark" className="w-50 m-auto text-info">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={orders.bukti_Pembayaran}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Bukti Pembayaran</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={orders.userVisa}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Visa</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={orders.userPassport}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Passport</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={orders.userIzin}
                  alt="4 slide"
                />

                <Carousel.Caption>
                  <h3>Permit/Izin Tinggal</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <p>Status: {orders.status}</p>
            <p>Ticket id: {orders.productId}</p>
            <p>User id: {orders.userId}</p>
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