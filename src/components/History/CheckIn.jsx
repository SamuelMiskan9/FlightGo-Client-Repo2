import { Container, Form, Button } from "react-bootstrap"
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";;
function CheckIn() {
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
        setOrders(response.data.data);
      });
  };

  const CheckIn = () => {
    swal({
      title: "Check-in Sekarang?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willAccpted) => {
      if (willAccpted) {
        const data = {
          checkIn: new Date(),
        };
        axios
          .put(
            `https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/check-in/${id}`,
            data,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            navigate("/history");
          });
        swal("Anda berhasil CheckIn", {
          icon: "success",
        });
      } else {
        swal("Anda tidak jadi check in!");
      }
    });
  };
  useEffect(() => {
    orderProduct();
  }, []);
  return (
    <Container>
      <br /> <br /><br />
      <Form>
        <Button onClick={CheckIn}>CheckIn</Button>
      </Form>
    </Container>
  )
}
export default CheckIn