import React, {useState} from 'react'
import {
  CCard,
  CCol,
  CRow,
  CFormCheck,
  CFormSelect,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalBody
} from '@coreui/react'
import { AppBreadcrumb } from '../../../components'


const EditData = () => {

  const [form, setForm] = useState(false)

  return (
    <CRow>
        <p className='font-bold text-3xl'>Flight Ticket Schedule</p>
        <p className='py-2 px-3 bg-gray-200 my-4'>
          <AppBreadcrumb />
        </p>
      <CCard className='p-3'>
      <CCol xs={12} md='6'>
        <CRow>
          <CCol md='4' className='text-sm font-thin'>
            Jenis Penerbangan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol md='4'>
          <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="Domestic"/>
          </CCol>
          <CCol md='4'>
          <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option2" label="International"/>
          </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bentuk Penerbangan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol md='4'>
          <CFormCheck inline type="radio" name="inlineRadioOptions1" id="inlineCheckbox2" value="option3" label="Round Trip"/>
          </CCol>
          <CCol md='4'>
          <CFormCheck inline type="radio" name="inlineRadioOptions1" id="inlineCheckbox2" value="option4" label="One-Way"/>
          </CCol>
        </CRow>
        <p className='font-bold text-lg mb-3'>Departure Flight</p>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kota Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
          </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
          </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kota Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
          </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Departure Date <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="dd/mm/yy" aria-label="sm input example"/>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Departure Time <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="dd/mm/yy" aria-label="sm input example"/>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kode Negara Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kode Negara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Price <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Rp. 0,-" aria-label="sm input example"/>
        </CCol>
        </CRow>
        
        <p className='font-bold text-lg mb-3'>Return Flight</p>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kota Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
          </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
          </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kota Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
          </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Departure Date <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="dd/mm/yy" aria-label="sm input example"/>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Departure Time <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="dd/mm/yy" aria-label="sm input example"/>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kode Negara Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kode Negara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormSelect size="sm" className="mb-3" aria-label="Large select example">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Price <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Rp. 0,-" aria-label="sm input example"/>
        </CCol>
        </CRow>

        <p className='font-bold text-lg mb-3'>Other Information</p>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Total Price <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Rp. 0,-" aria-label="sm input example"/>
        </CCol>
        </CRow> 
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Image <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="image" size="sm" placeholder="Rp. 0,-" aria-label="sm input example"/>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Description <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormTextarea
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder='Description...'
          ></CFormTextarea>
        </CCol>
        </CRow>
      </CCol>
      </CCard>
      <div className='flex mt-3'>
        <button className='py-2 px-4 text-[#F66F4D] border-2 border-[#F66F4D]'>Cancel</button>
        <button onClick={() => setForm(true)} className='bg-[#F66F4D] text-white px-4 py-2 ml-3'>Save</button>
      </div>

      <CModal visible={form} onClose={() => setForm(false)}>
        <CModalBody className='bg-[#73CA5C] text-white text-center'>
          Data Berhasil Disimpan
        </CModalBody>
      </CModal>
    </CRow>
  )
}

export default EditData
