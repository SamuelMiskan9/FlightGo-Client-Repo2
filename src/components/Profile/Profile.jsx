import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBadge,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import axios from "axios";
export default function ProfilePage() {
  const [users, setUsers] = useState("");
  const [history, setHistory] = useState([]);
  const whoami = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/current-user', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data);
      });
  };
  useEffect(() => {
    whoami();
    historyUser();
  }, [])

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
  return (
    <section style={{ backgroundColor: '#FBFBFB' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4 mt-5">
              <MDBBreadcrumbItem>
                <a href='/landing'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="/profile">Profile</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
        <MDBBtn href='/profile/update-profile'>Edit Profile</MDBBtn>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={users.image_user}
                  alt="avatar"
                  className="rounded-circle mx-auto"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1 mt-3">{users.name}</p>
                <p className="text-muted mb-4">{users.address}</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="envelope fa-lg text-warning" />
                    <MDBCardText>{users.email}</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">History</span> Transaction</MDBCardText>
                <MDBTable hover responsive>
                  <MDBTableHead>
                    <tr>
                      <th scope='col'>No</th>
                      <th scope='col'>CheckIn</th>
                      <th scope='col'>From</th>
                      <th scope='col'>To</th>
                      <th scope='col'>Status</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {history.map((history, i) => (
                      <tr>
                        <th scope='row'>{i + 1}</th>
                        <td>{history.checkIn}</td>
                        <td>{history.product.kota_asal}</td>
                        <td>{history.product.kota_tujuan}</td>
                        <td>
                          <MDBBadge color='success' pill>
                            {history.status}
                          </MDBBadge>
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}