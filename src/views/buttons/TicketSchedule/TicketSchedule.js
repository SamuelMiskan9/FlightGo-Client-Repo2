import React, {useState, useEffect} from 'react'
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCardImage,
  CCardTitle,
  CCardText,
  CModal,
  CModalBody
} from '@coreui/react'
import Bag from '../../../components/assets/tas.png'
import { cilPlus, cilClock, cilTrash, cilCommentSquare } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import AirplaneOneIcon from '../../../components/assets/one.png'

const Dropdowns = () => {

  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async() => {
    const response = await axios.get('https://flightgo-be-server.up.railway.app/v1/api/ticket');
    setTickets(response.data);
  }

  const [del, setDel] = useState(false)
  const [confDel, setConfDel] = useState(false)

  return (
    <CRow>
      <CCol xs={12}>
        <p className='font-bold text-3xl'>Flight Ticket Schedule</p>
        <p className='py-2 px-3 bg-gray-200 my-4'>Flight Ticket Schedule</p>
        <div className='flex justify-between'>
          <div className='flex justify-evenly'>
            <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 mr-2 rounded-sm bg-opacity-70 border-opacity-100'>All</button>
            <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 mr-2 rounded-sm bg-opacity-50 border-opacity-100'>Round Trip</button>
            <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 mr-2 rounded-sm bg-opacity-50 border-opacity-100'>One-Way</button>
          </div>
          <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 mr-2 rounded-sm border-opacity-100'><Link to='/addnewdata' className='text-white'><CIcon icon={cilPlus}/>Add New Data</Link></button>
        </div>
      </CCol>
      <CRow className='mt-4'>
      <CCol md='4'>
        {tickets.map((ticket) => (
          <CCard className='px-1 py-3 shadow-sm mb-4' key={ticket.id}>
          <CCardBody>
            <small className='mb-3 text-xs'>{ticket.bentuk_penerbangan}</small>
            <CCardTitle className='flex text-sm font-bold'>{ticket.kota_asal} <img src={AirplaneOneIcon} alt='' className='w-5 mx-2'/>{ticket.kota_tujuan}</CCardTitle>
            <CCardImage className='py-4' orientation="top" alt='image' src={ticket.image_product} />
            <CCardText>
              <p className='font-thin text-xs lh-1'>{ticket.jenis_penerbangan}</p>
              <p className='text-xs lh-1'>{ticket.depature_date}</p>
              <p className='font-bold lh-1'>Rp {ticket.price}</p>
              <p className='text-xs font-thin'><CIcon icon={cilClock} /> {ticket.updatedAt}</p>
            </CCardText>
            <div className='flex'>
              <CButton onClick={() => setDel(true)} color='outline-danger' className='m-auto text-xs w-2/5 mr-2'><CIcon icon={cilTrash} className='mr-2'/>Hapus</CButton>
              <CButton color='success' className='m-auto ml-2 w-2/5 '><CIcon icon={cilCommentSquare} className='mr-2'/>
                <Link to='/editdata' className='text-white'>Edit</Link>
              </CButton>
            </div>
          </CCardBody>
        </CCard>
        ))}
        </CCol>
        
        <CModal visible={del} onClose={() => setDel(false)}>
          <CModalBody className=''>
            <img src={Bag} className='w-1/3 m-auto py-3' alt=''/>
            <p className='font-bold text-center'>Menghapus Data Flight Tiket</p>
            <p className='text-sm text-center w-1/2 m-auto font-light'>
            Setelah dihapus, data tiket tidak dapat dikembalikan. Yakin ingin menghapus?
            </p>
            <div className='flex justify-center mt-2'>
              <button onClose={() => setDel(false)} onClick={() => setConfDel(true)} className='mr-3 px-4 -py2 bg-[#F66F4D] text-white '>YA</button>
              <button className='p-3 border-2 border-[#F66F4D] text-[#F66F4D]' onClick={() => setDel(false)}>TIDAK</button>
            </div>
          </CModalBody>
        </CModal>
        <CModal visible={confDel} onClose={() => setConfDel(false)}>
          <CModalBody className='bg-black text-white'>
            <p className='text-center'>Data Berhasil Dihapus</p>
          </CModalBody>
        </CModal>
      </CRow>
    </CRow>
  )
}

export default Dropdowns
