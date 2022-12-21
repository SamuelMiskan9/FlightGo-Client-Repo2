import React, {
  CCol,
  CRow,
  CTable,
  CPagination,
  CPaginationItem,
  CModal,
  CModalBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell
} from '@coreui/react'
import { useParams } from "react-router-dom";
import Sort from '../../../components/assets/sort.png'
import Payment from '../../../components/assets/bukti.png'
import axios from "axios";
import  { useState, useEffect } from "react";
import swal from "sweetalert";
const Accordion = () => {

  const [payment, setPayment] = useState(false)
  const [transaction, setTransaction] = useState([]);
  // const { id } = useParams();
  useEffect(() => {
    getTransaction();
  }, []);
  const getTransaction = async () => {
    const response = await axios.get("https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
    console.log(response.data.data)
    setTransaction(response.data.data);
  };
  
  function accOrder(id) {
    swal({
      title: "Apakah anda yakin?",
      // text: "Setelah dihapus, Anda tidak akan dapat mengembalikan produk ini!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willAcc) => {
      if (willAcc) {
        axios
          .put(
            `https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/accept/${id}`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {})
          .catch((error) => {})
          .finally(() => {
            window.location.href = "/listorder";
          });
        swal("Orderan berhasil diterima", {
          icon: "success",
        });
      } else {
        swal("Data produk tidak jadi diterima");
      }
    });
  }
  function rejectOrder(id) {
    swal({
      title: "Apakah anda yakin?",
      // text: "Setelah dihapus, Anda tidak akan dapat mengembalikan produk ini!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willReject) => {
      if (willReject) {
        axios
          .put(
            `https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/accept/${id}`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {})
          .catch((error) => {})
          .finally(() => {
            window.location.href = "/listorder";
          });
        swal("Orderan berhasil diterima", {
          icon: "success",
        });
      } else {
        swal("Data produk tidak jadi diterima");
      }
    });
  }
  // const accTransaction = async (id) => {
  //   try {
  //     const response = await axios.put(`https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/accept/${id}`, {
  //       headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //     });
  //     console.log(response)
  //     getTransaction();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const rejectTransaction = async (id) => {
  //   try {
  //     const response = await axios.put(`https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/reject/${id}`, {
  //       headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //     });
  //     console.log(response)
  //     getTransaction();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <CRow>
      <CCol xs={12}>
        <p className='font-bold text-3xl'>List Booking Order</p>
        <p className='py-2 px-3 bg-gray-200 my-4'>Table list Booking Order</p>
        <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 rounded-lg'>Filter <img src={Sort} alt='' className='w-5'/></button>
        <p className=' mt-10 font-bold ml-5'>Latest Orders</p>
        <CTable responsive className='shadow-sm text-center bg-[#FFFFFF]'>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Id</CTableHeaderCell>
              <CTableHeaderCell scope="col">Product Id</CTableHeaderCell>
              <CTableHeaderCell scope="col">userId</CTableHeaderCell>
              <CTableHeaderCell scope="col">Payment</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">Visa</CTableHeaderCell>
              <CTableHeaderCell scope="col">Passport</CTableHeaderCell>
              <CTableHeaderCell scope="col">Permit</CTableHeaderCell>
              <CTableHeaderCell scope="col">CheckIn</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
          {transaction.map((transaction) => (
            <CTableRow>
              <CTableHeaderCell scope="row">{transaction.id}</CTableHeaderCell>
              <CTableDataCell>{transaction.productId}</CTableDataCell>
              <CTableDataCell>{transaction.userId}</CTableDataCell>
              <CTableDataCell><a href={transaction.bukti_Pembayaran} rel="noopener noreferrer" target="_blank">Click</a></CTableDataCell>
              <CTableDataCell>{transaction.status}</CTableDataCell>
              <CTableDataCell><a href={transaction.userVisa} rel="noopener noreferrer" target="_blank">Click</a></CTableDataCell>
              <CTableDataCell><a href={transaction.userPassport} rel="noopener noreferrer" target="_blank">Click</a></CTableDataCell>
              <CTableDataCell><a href={transaction.userIzin} rel="noopener noreferrer" target="_blank">Click</a></CTableDataCell>
              <CTableDataCell>{transaction.checkIn}</CTableDataCell>
              <CTableDataCell>
                <button type='button' onClick={accOrder}>
                  Acc
                </button>
                <button onClick={rejectOrder}>
                  Reject
                </button>
              </CTableDataCell>
            </CTableRow>
          ))}
          </CTableBody>
        </CTable>
        <CPagination aria-label="Page navigation example" className='m-auto justify-center'>
          <CPaginationItem aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>1</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>2</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>3</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>4</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>5</CPaginationItem>
          <CPaginationItem aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </CPaginationItem>
        </CPagination>
      </CCol>

      <CModal visible={payment} onClose={() => setPayment(false)}>
        <CModalBody className='text-center'>
            <p className='text-center font-bold'>Bukti Pembayaran</p>
            <img src={Payment} alt=''/>
            <button className='py-3 px-5 text-[#F66F4D] border-2 border-[#F66F4D]' onClick={() => setPayment(false)}>Close</button>
        </CModalBody>
      </CModal>

    </CRow>
  )
}

export default Accordion
