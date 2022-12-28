import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  CCard,
  CCol,
  CRow,
  CFormCheck,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalBody
} from '@coreui/react'
import { AppBreadcrumb } from '../../../components'


const Breadcrumbs = () => {

  const [type, setType] = useState('');
  const [flight, setFlight] = useState("");
  const [fromcity, setFromcity] = useState("");
  const [fromairport, setFromairport] = useState("");
  const [tocity, setTocity] = useState("");
  const [toairport, setToairport] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fromcode, setFromcode] = useState("");
  const [tocode, setTocode] = useState("");
  const [price, setPrice] = useState("");
  
  const [fromairportreturn, setFromairportreturn] = useState("");
  const [tocityreturn, setTocityreturn] = useState("");
  const [toairportreturn, setToairportreturn] = useState("");
  const [datereturn, setDatereturn] = useState("");
  const [timereturn, setTimereturn] = useState("");
  const [fromcodereturn, setFromcodereturn] = useState("");
  const [tocodereturn, setTocodereturn] = useState("");
  const [pricereturn, setPricereturn] = useState("");

  const [fromcityreturn, setFromcityreturn] = useState("");

  const [file, setFile] = useState('');
  const [totalprice, setTotalprice] = useState("");
  const [desk, setDesk] = useState("");
  const [preview, setPreview] = useState('');
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  }

  const saveTicket = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('jenis_penerbangan', type);
    formData.append("bentuk_penerbangan", flight);
    formData.append("kota_asal", fromcity);
    formData.append("bandara_asal", fromairport);
    formData.append("kota_tujuan", tocity);
    formData.append("bandara_tujuan", toairport);
    formData.append("depature_date", date);
    formData.append("depature_time", time);
    formData.append("kode_negara_asal", fromcode);
    formData.append("kode_negara_tujuan", tocode);
    formData.append("price", price);

    formData.append("kota_asal", fromcityreturn);
    formData.append("bandara_asal", fromairportreturn);
    formData.append("kota_tujuan", tocityreturn);
    formData.append("bandara_tujuan", toairportreturn);
    formData.append("depature_date", datereturn);
    formData.append("depature_time", timereturn);
    formData.append("kode_negara_asal", fromcodereturn);
    formData.append("kode_negara_tujuan", tocodereturn);
    formData.append("price", pricereturn);

    formData.append('image_product', file);
    formData.append("total_price", totalprice);
    formData.append("desctiption", desk);
    try {
      await axios.post('https://flightgo-be-server.up.railway.app/v1/api/ticket', formData, {
        headers:{
          'Content-type': 'multipart/form-data'
        }
      });
      navigate('/ticketschedule')
    } catch (error) {
      console.log(error);
      
    }
  }

  const [showhide, setShowhide]= useState("no");

const handleShow = e=>{
const getShow= e.target.value;
setShowhide(getShow);
}

const [form, setForm] = useState(false)
  return (
    <CRow onSubmit={saveTicket}>
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
          <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value={type} onChange={(e) => setType(e.target.value)} label="Domestic"/>
          </CCol>
          <CCol md='4'>
          <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value={type} onChange={(e) => setType(e.target.value)} label="International"/>
          </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bentuk Penerbangan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol md='4'>
          <CFormCheck inline type="radio" name="inlineRadioOptions1" id="inlineCheckbox2" value={flight}  onChange={(e) => setFlight(e.target.value)} label="Round Trip"
										 />
          </CCol>
          <CCol md='4'>
          <CFormCheck inline type="radio" name="inlineRadioOptions1" id="inlineCheckbox2" value={flight} onChange={(e) => setFlight(e.target.value)} label="One-Way"
										/>
          </CCol>
        </CRow>

        <p className='font-bold text-lg mb-3'>Departure Flight</p>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kota Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Jakarta" value={fromcity} onChange={(e) => setFromcity(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Soekarno-Hatta" value={fromairport} onChange={(e) => setFromairport(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kota Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Bandung" value={tocity} onChange={(e) => setTocity(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Husein Sastranegara" value={toairport} onChange={(e) => setToairport(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Departure Date <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="date" size="sm" placeholder="dd/mm/yy" value={date} onChange={(e) => setDate(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Departure Time <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="time" size="sm" placeholder="12-00" value={time} onChange={(e) => setTime(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kode Negara Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="IDN" value={fromcode} onChange={(e) => setFromcode(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kode Negara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="SGP" value={tocode} onChange={(e) => setTocode(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Price <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Rp. 0,-" value={price} onChange={(e) => setPrice(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>


        <p className='font-bold text-lg mb-3'>Return Flight</p>
        
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kota Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="New York" value={fromcityreturn} onChange={(e) => setFromcityreturn(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="John F Kennedy" value={fromairportreturn} onChange={(e) => setFromairportreturn(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kota Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Barcelona" value={tocityreturn} onChange={(e) => setTocityreturn(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Barcelona-El Prat" value={toairportreturn} onChange={(e) => setToairportreturn(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Departure Date <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="date" size="sm" placeholder="dd/mm/yy" value={datereturn} onChange={(e) => setDatereturn(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Departure Time <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="time" size="sm" placeholder="12-00" value={timereturn} onChange={(e) => setTimereturn(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kode Negara Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="USA" value={fromcodereturn} onChange={(e) => setFromcodereturn(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kode Negara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="SPN" value={tocodereturn} onChange={(e) => setTocodereturn(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Price <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Rp. 0,-" value={pricereturn} onChange={(e) => setPricereturn(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>


        <p className='font-bold text-lg mb-3'>Other Information</p>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Total Price <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Rp. 0,-" value={totalprice} onChange={(e) => setTotalprice(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow> 

        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Image <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="file" size="sm" onChange={loadImage} aria-label="sm input example"/>
        </CCol>
        {preview ? (
          <figure className='image inset-1/2'>
            <img src={preview} alt='preview image'/>
          </figure>
        ): (
          ''
        )}
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
            value={desk} onChange={(e) => setDesk(e.target.value)}
          ></CFormTextarea>
        </CCol>
        </CRow>
        {/* </React.Fragment>
        )} */}
        
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

export default Breadcrumbs
