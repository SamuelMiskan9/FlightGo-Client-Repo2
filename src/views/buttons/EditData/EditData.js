import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

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


function EditData () {

  const [type, setType] = useState("");
  const [flight, setFlight] = useState("");
  const [fromcity, setFromcity] = useState("");
  const [fromairport, setFromairport] = useState("");
  const [tocity, setTocity] = useState("");
  const [toairport, setToairport] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fromcode, setFromcode] = useState("");
  const [tocode, setTocode] = useState("");
  const [price, setPrice] = useState("0");
  const [totalprice, setTotalprice] = useState("0");
  const [pict, setPict] = useState(null);
  const [desk, setDesk] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getTicket = async () => {
    try {
      const res = await axios.get(
        `https://flightgo-be-server.up.railway.app/v1/api/ticket`,
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setType(res.data.data.jenis_penerbangan);
      setFlight(res.data.data.bentuk_penerbangan);
      setFromcity(res.data.data.kota_asal);
      setFromairport(res.data.data.bandara_asal);
      setTocity(res.data.data.kota_tujuan);
      setToairport(res.data.data.bandara_tujuan);
      setDate(res.data.data.depature_date);
      setTime(res.data.data.depature_time);
      setFromcode(res.data.data.kode_negara_asal);
      setTocode(res.data.data.kode_negara_tujuan);
      setPrice(res.data.data.price);
      setTotalprice(res.data.data.total_price);
      setPict(res.data.data.image_product);
      setDesk(res.data.data.desctiption);
      
    } catch (err) {}
  };

  async function handleEdit(e) {
    e.preventDefault();
    const form = new FormData();

    form.append("jenis_penerbangan", type);
    form.append("bentuk_penerbangan", flight);
    form.append("kota_asal", fromcity);
    form.append("bandara_asal", fromairport);
    form.append("kota_tujuan", tocity);
    form.append("bandara_tujuan", toairport);
    form.append("depature_date", date);
    form.append("depature_time", time);
    form.append("kode_negara_asal", fromcode);
    form.append("kode_negara_tujuan", tocode);
    form.append("price", price);
    form.append("total_price", totalprice);
    form.append("image_product", pict);
    form.append("desctiption", desk);

    try {
      const res = await axios.put(
        `https://flightgo-be-server.up.railway.app/v1/api/ticket/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/ticketschedule");
      toast("Ticket berhasil diubah", {
        type: "success",
      });
    } catch (err) {
      if (Array.isArray(err.response.data.message)) {
        err.response.data.message.forEach((err) => {
          toast(err, {
            type: "error",
          });
        });
      } else {
        toast(err.response.data.message, {
          type: "error",
        });
      }
    }
  }

  useEffect(() => {
    getTicket();
  }, []);

  const [form, setForm] = useState(false)

  return (
    <CRow onSubmit={handleEdit}>
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
          <CFormCheck inline type="radio" name="inlineRadioOptions1" id="inlineCheckbox2" value={flight} onChange={(e) => setFlight(e.target.value)} label="Round Trip"/>
          </CCol>
          <CCol md='4'>
          <CFormCheck inline type="radio" name="inlineRadioOptions1" id="inlineCheckbox2" value={flight} onChange={(e) => setFlight(e.target.value)} label="One-Way"/>
          </CCol>
        </CRow>
        <p className='font-bold text-lg mb-3'>Departure Flight</p>

        {/* <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Total Price <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Rp. 0,-" aria-label="sm input example"/>
        </CCol> */}

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
          <CFormInput className="mb-3" type="text" size="sm" placeholder="New York" value={fromcity} onChange={(e) => setFromcity(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>
          
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Asal <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="John F Kennedy" value={fromairport} onChange={(e) => setFromairport(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kota Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Barcelona" value={tocity} onChange={(e) => setTocity(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Bandara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="Barcelona-El Prat" value={toairport} onChange={(e) => setToairport(e.target.value)} aria-label="sm input example"/>
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
          <CFormInput className="mb-3" type="text" size="sm" placeholder="USA" value={fromcode} onChange={(e) => setFromcode(e.target.value)} aria-label="sm input example"/>
        </CCol>
        </CRow>
        <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Kode Negara Tujuan <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="text" size="sm" placeholder="SPN" value={tocode} onChange={(e) => setTocode(e.target.value)} aria-label="sm input example"/>
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
          <CFormInput className="mb-3" type="file" size="sm" onChange={(e) => setPict(e.target.files[0])} aria-label="sm input example"/>
        </CCol>
        </CRow>

        {/* <CRow className='my-3'>
          <CCol md='4' className='text-sm font-thin'>
            Image <span className='text-[#F66F4D]'>*</span>
          </CCol>
          <CCol>
          <CFormInput className="mb-3" type="image" size="sm" placeholder="Rp. 0,-" aria-label="sm input example"/>
        </CCol>
        </CRow> */}
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
