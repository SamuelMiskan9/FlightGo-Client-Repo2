import { Container, Form, Button, Row, Col } from "react-bootstrap"
import { ToastContainer, toast } from "react-toastify";

// import { FormFloating } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    axios
      .post("https://flightgo-be-server.up.railway.app/v1/api/register-member", {
        email: String(email.target.value),
        password: String(password.target.value),
      })
      .then((response) => {
        navigate("/Login");
        swal({
          title: "Berhasil!",
          text: "Register Berhasil",
          icon: "success",
          button: "Oke",
        });
      })
      .catch((error) => {
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.forEach((err) => {
            toast(err, {
              type: "error",
            });
          });
        } else {
          toast(error.response.data.message, {
            type: "error",
          });
        }
      });
  };
  return (
    <Container ><br /><br /><br /><br /><br />
      <ToastContainer />
      <Row className="mt-5">
        <Col md >
          <Form >
            <h1>Register Page</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={setEmail} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={setPassword} />
            </Form.Group>
            <Button className="text-center m-auto w-100" variant="primary" onClick={register}>
              Sign-In
            </Button>
            <p> Already Have A Account?
              <a href="/login">Login</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register