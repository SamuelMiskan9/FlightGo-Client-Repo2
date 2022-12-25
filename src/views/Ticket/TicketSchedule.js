import React, {useState, useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCardImage,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import axios from "axios";
import { cilPlus, cilClock, cilTrash, cilCommentSquare } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import {FaPlane} from 'react-icons/fa'

const Dropdowns = () => {
  const [ticket, setTicket] = useState([]);

  const getTicket = async () => {
    const response = await axios.get("https://flightgo-be-server.up.railway.app/v1/api/ticket");
    setTicket(response.data);
  };
  useEffect(() => {
    getTicket();
  }, []);
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
      {ticket.map((ticket, i) => (
      <CCol md='4'>
          <CCard className='px-1 shadow-sm mb-4' style={{ width: '20em', height: '28em' }}>
            <CCardBody>
              <small className='mb-3 text-xs'>{ticket.bentuk_penerbangan} Flight</small>
              <CCardTitle className='flex text-sm font-bold'>{ticket.kota_asal} ({ticket.kode_negara_asal}) <FaPlane className='w-5 mx-2'/>{ticket.kota_tujuan} ({ticket.kode_negara_tujuan})</CCardTitle>
              <CCardImage alt={ticket.image_product} className='py-4' orientation="top" style={{ height: '10em' }} src={ticket.image_product} />
              <CCardText>
                <p className='font-thin text-xs lh-1'>{ticket.jenis_penerbangan} Flight/{ticket.kode_negara_asal} to {ticket.kode_negara_tujuan}</p>
                <p className='text-xs lh-1'>Departure Date on {ticket.depature_date}</p>
                <p className='font-bold lh-1'>Rp {ticket.total_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}/passenger</p>
                <p className='text-xs font-thin'><CIcon icon={cilClock} /> Updated at {ticket.updatedAt}</p>
              </CCardText>
              <div className='flex position-absolute bottom-0 start-50 translate-middle-x justify-between'>
                <CButton color='outline-danger' className='m-auto text-xs w-2/5 mr-2 mb-2 me-2' style={{ width: '9em' }}>
                  <CIcon icon={cilTrash} className=''/>
                  <Link to={`/editdata/${ticket.id}`} className='text-danger'>
                    Delete
                  </Link>
                </CButton>
                <CButton color='success' className='m-auto text-xs w-2/5 mr-2 mb-2' style={{ width: '9em' }}><CIcon className='me-2' icon={cilCommentSquare}/>
                  <Link to={`/editdata/${ticket.id}`} className='text-white mr-2'>
                    Edit
                  </Link>
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
      </CRow>
    </CRow>
  )
}

export default Dropdowns