import React, { useState, useEffect } from "react";
import  {
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell
} from '@coreui/react'
import { Link,useNavigate } from "react-router-dom";
import Payment from '../../components/assets/bukti.png'
import axios from "axios";
import { FaEdit } from "react-icons/fa";

const ListOrder = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState(false)
  const [transaction, setTransaction] = useState([]);
  const role = localStorage.getItem("role");
  if (role !== "admin") {
    navigate("/landing");
  }
  useEffect(() => {
    getTransaction();
  }, []);
  const getTransaction = async () => {
    const response = await axios.get("https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
    setTransaction(response.data.data);
  };
  

  return (
    <CRow fluid>
      <CCol xs={12} md={12}>
        <p className='font-bold text-3xl'>List Booking Order</p>
        <p className=' mt-10 font-bold ml-5'>Latest Orders</p>
        <CTable responsive striped className='shadow-sm text-center '>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">No</CTableHeaderCell>
              <CTableHeaderCell scope="col">Product Id</CTableHeaderCell>
              <CTableHeaderCell scope="col">User Document</CTableHeaderCell>
              <CTableHeaderCell scope="col">Payment</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">Depature Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">CheckIn</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
          {transaction.map((transaction, i) => (
            <CTableRow key={i}>
              <CTableHeaderCell scope="row">{i+1}</CTableHeaderCell>
              <CTableDataCell>{transaction.productId}</CTableDataCell>
              <CTableDataCell>
                 <Link to={`/listorder/userdetail/${transaction.userId}`} target="_blank">
                   Detail
                 </Link>
              </CTableDataCell>
              <CTableDataCell><a href={transaction.bukti_Pembayaran} rel="noopener noreferrer" target="_blank">Click</a></CTableDataCell>
              <CTableDataCell>{transaction.status}</CTableDataCell>
              <CTableDataCell>{transaction.product.depature_date}</CTableDataCell>
              <CTableDataCell>{transaction.checkIn}</CTableDataCell>
              <CTableDataCell>
                <Link to={`/updateorder/${transaction.id}`}>
                  <FaEdit className="m-auto"/>
                </Link>
              </CTableDataCell>
            </CTableRow>
          ))}
          </CTableBody>
        </CTable>
      </CCol>
    </CRow>
  )
}

export default ListOrder
