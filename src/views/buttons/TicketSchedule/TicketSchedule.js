import React, {useState} from 'react'
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
import Airplane from '../../../components/assets/airplane.png'
import AirplaneOneIcon from '../../../components/assets/one.png'
import AirplaneTwinIcon from '../../../components/assets/two.png'

const Dropdowns = () => {

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
          <CCard className='px-1 py-3 shadow-sm mb-4'>
            <CCardBody>
              <small className='mb-3 text-xs'>One-Way Flight</small>
              <CCardTitle className='flex text-sm font-bold'>Jakarta (CGK) <img src={AirplaneOneIcon} alt='' className='w-5 mx-2'/>Denpasar (DPS)</CCardTitle>
              <CCardImage className='py-4' orientation="top" src={Airplane} />
              <CCardText>
                <p className='font-thin text-xs lh-1'>Domestik Flight/IDN to IDN</p>
                <p className='text-xs lh-1'>Departure Date on 2 December 2022</p>
                <p className='font-bold lh-1'>Rp 700.000/passenger</p>
                <p className='text-xs font-thin'><CIcon icon={cilClock} /> Updated at 4 Nov 2022, 09.00</p>
              </CCardText>
              <div className='flex'>
                <CButton onClick={() => setDel(true)} color='outline-danger' className='m-auto text-xs w-2/5 mr-2'><CIcon icon={cilTrash} className='mr-2'/>Hapus</CButton>
                <CButton color='success' className='m-auto ml-2 w-2/5 '><CIcon icon={cilCommentSquare} className='mr-2'/>
                  <Link to='/editdata' className='text-white'>Edit</Link>
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md='4'>
          <CCard className='px-1 py-3 shadow-sm mb-4'>
            <CCardBody>
              <small className='mb-3 text-xs'>One-Way Flight</small>
              <CCardTitle className='flex text-sm font-bold'>Jakarta (CGK) <img src={AirplaneTwinIcon} alt='' className='w-5 mx-2'/>Denpasar (DPS)</CCardTitle>
              <CCardImage className='py-4' orientation="top" src={Airplane} />
              <CCardText>
                <p className='font-thin text-xs lh-1'>Domestik Flight/IDN to IDN</p>
                <p className='text-xs lh-1'>Departure Date on 2 December 2022</p>
                <p className='font-bold lh-1'>Rp 1.600.000/passenger</p>
                <p className='text-xs font-thin'><CIcon icon={cilClock} /> Updated at 4 Nov 2022, 09.00</p>
              </CCardText>
              <div className='flex'>
                <CButton onClick={() => setDel(true)} color='outline-danger' className='m-auto text-xs w-2/5 mr-2'><CIcon icon={cilTrash} className='mr-2'/>Hapus</CButton>
                <CButton color='success' className='m-auto ml-2 w-2/5 '><CIcon icon={cilCommentSquare} className='mr-2'/>
                <Link to='/editdata' className='text-white'>Edit</Link></CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md='4'>
          <CCard className='px-1 py-3 shadow-sm mb-4'>
            <CCardBody>
              <small className='mb-3 text-xs'>One-Way Flight</small>
              <CCardTitle className='flex text-sm font-bold'>Jakarta (CGK) <img src={AirplaneOneIcon} alt='' className='w-5 mx-2'/>Denpasar (DPS)</CCardTitle>
              <CCardImage className='py-4' orientation="top" src={Airplane} />
              <CCardText>
                <p className='font-thin text-xs lh-1'>Domestik Flight/IDN to IDN</p>
                <p className='text-xs lh-1'>Departure Date on 2 December 2022</p>
                <p className='font-bold lh-1'>Rp 700.000/passenger</p>
                <p className='text-xs font-thin'><CIcon icon={cilClock} /> Updated at 4 Nov 2022, 09.00</p>
              </CCardText>
              <div className='flex'>
                <CButton onClick={() => setDel(true)} color='outline-danger' className='m-auto text-xs w-2/5 mr-2'><CIcon icon={cilTrash} className='mr-2'/>Hapus</CButton>
                <CButton color='success' className='m-auto ml-2 w-2/5 '><CIcon icon={cilCommentSquare} className='mr-2'/>
                <Link to='/editdata' className='text-white'>Edit</Link></CButton>
              </div>
            </CCardBody>
          </CCard>
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
