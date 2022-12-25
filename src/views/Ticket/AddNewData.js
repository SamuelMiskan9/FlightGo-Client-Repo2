import React, {useState} from 'react'
import { AppBreadcrumb } from '../../components'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Button, Col, Container, Form, FormControl, FormLabel, FormSelect, Row } from 'react-bootstrap';
import {FaPlaneDeparture, FaPlaneArrival} from "react-icons/fa";

const AddTicket = () => {
  const [image, setImage] = useState(null);
  const [jenispenerbangann, setJenispenerbangan] = useState('')
  const [bentukpenerbangan, setBentukpenerbangan] = useState('')
  const [kotaasal, setKotaasal] = useState('')
  const [bandaraasal, setBandaraasal] = useState('')
  const [kotatujuan, setKotatujuan] = useState('')
  const [bandaratujuan, setBandaratujuan] = useState('')
  const [depaturedate, setDepatuedate] = useState('')
  const [depatuetime, setDepaturetime] = useState('')
  const [kodenegaraasal, setKodenegaraasal] = useState('')
  const [kodenegaratujuan, setKodenegaratujuan] = useState('')
  const [price, setPrice] = useState('')

  const [kotaasal_, setKotaasal_] = useState('')
  const [bandaraasal_, setBandaraasal_] = useState('')
  const [kotatujuan_, setKotatujuan_] = useState('')
  const [bandaratujuan_, setBandaratujuan_] = useState('')
  const [depaturedate_, setDepatuedate_] = useState('')
  const [depatuetime_, setDepaturetime_] = useState('')
  const [kodenegaraasal_, setKodenegaraasal_] = useState('')
  const [kodenegaratujuan_, setKodenegaratujuan_] = useState('')
  const [price_, setPrice_] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  let [totalprice, setTotalprice] = useState('')
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  if (role !== "admin") {
    navigate("/landing");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();

    form.append("jenis_penerbangan", jenispenerbangann);
    form.append("bentuk_penerbangan", bentukpenerbangan);
    form.append("kota_asal", kotaasal);
    form.append("bandara_asal", bandaraasal);
    form.append("kota_tujuan", kotatujuan);
    form.append("bandara_tujuan", bandaratujuan);
    form.append("depature_date", depaturedate);
    form.append("depature_time", depatuetime);
    form.append("kode_negara_asal", kodenegaraasal);
    form.append("kode_negara_tujuan", kodenegaratujuan);
    form.append("price", price);

    form.append("kota_asal_", kotaasal_);
    form.append("bandara_asal_", bandaraasal_);
    form.append("kota_tujuan_", kotatujuan_);
    form.append("bandara_tujuan_", bandaratujuan_);
    form.append("depature_date_", depaturedate_);
    form.append("depature_time_", depatuetime_);
    form.append("kode_negara_asal_", kodenegaraasal_);
    form.append("kode_negara_tujuan_", kodenegaratujuan_);
    form.append("price_", price_);

    form.append("total_price", totalprice);
    form.append("image_product", image);
    form.append("desctiption", deskripsi);

    try {
      if (kotaasal === null) {
          toast("Isi Semua data", {
              type: "error",
          });
      } else {
          const response = await axios.post(
              "https://flightgo-be-server.up.railway.app/v1/api/ticket",
              form,
              {
                  headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                      "Content-Type": "multipart/form-data",
                  },
              }
          );
          setTimeout(() => {
              window.location.reload();
          }, 10000);
          swal({
              title: "Berhasil!",
              text: "Ticket berhasil ditambahkan",
              icon: "success",
              button: "Oke",
          });
      }
  } catch (error) {
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
  }
  }
  return (
    <Container>
      <p className='font-bold text-3xl'>Flight Ticket Schedule</p>
      <p className='py-2 px-3 bg-gray-200 my-4'>
        <AppBreadcrumb />
      </p>
      <Form onSubmit={handleSubmit}>
            <Form.Group>
            <FormLabel>Jenis Penerbangan <p className='text-danger d-inline'>*</p></FormLabel>
              <FormSelect
                onChange={(e) => {
                const JP = e.target.value;
                setJenispenerbangan(JP);
                }}
                >
                <option value={'One-way'}>One-way</option>
                <option value={'Round-trip'}>Round-trip</option>
              </FormSelect>
            </Form.Group>

            <Form.Group>
            <FormLabel>Tipe Penerbangan <p className='text-danger d-inline'>*</p></FormLabel>
              <FormSelect
                onChange={(e) => {
                const TP = e.target.value;
                setBentukpenerbangan(TP);
                }}
                >
                <option value={'Domestik'}>Domestik</option>
                <option value={'Internasional'}>Internasional</option>
              </FormSelect>
            </Form.Group>
            <Row>
              <Col md={6}>
                <p className='font-bold text-lg mt-5'>Depature Flight <FaPlaneDeparture className='d-inline'/></p>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Kota Asal <p className='text-danger d-inline'>*</p></FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Nama Kota Asal"
                    value={kotaasal}
                    onChange={(e) => setKotaasal(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Bandara Asal <p className='text-danger d-inline'>*</p></FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Contoh: Soekarno Hatta International Airport"
                    value={bandaraasal}
                    onChange={(e) => setBandaraasal(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Kota Tujuan <p className='text-danger d-inline'>*</p></FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Nama Kota Tujuan"
                    value={kotatujuan}
                    onChange={(e) => setKotatujuan(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Bandara Tujuan <p className='text-danger d-inline'>*</p></FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Contoh: Ngurah Rai International Airport"
                    value={bandaratujuan}
                    onChange={(e) => setBandaratujuan(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Depatue Date <p className='text-danger d-inline'>*</p></FormLabel>
                  <FormControl
                    type="date"
                    value={depaturedate}
                    onChange={(e) => setDepatuedate(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Depature Time <p className='text-danger d-inline'>*</p></FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Contoh: 19:00"
                    value={depatuetime}
                    onChange={(e) => setDepaturetime(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Kode Negara Asal <p className='text-danger d-inline'>*</p></FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Contoh: ID"
                    value={kodenegaraasal}
                    onChange={(e) => setKodenegaraasal(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Kode Negara Tujuan <p className='text-danger d-inline'>*</p></FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Contoh: ID"
                    value={kodenegaratujuan}
                    onChange={(e) => setKodenegaratujuan(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Harga Tiket <p className='text-danger d-inline'>*</p></FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Contoh: 450000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
              <p className='font-bold text-lg mt-5'>Return Flight <FaPlaneArrival className='d-inline'/></p>
              <Form.Group className="mt-4 mb-2">
                <FormLabel>Kota Asal </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Nama Kota Asal"
                  value={kotaasal_}
                  onChange={(e) => setKotaasal_(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-2">
                <FormLabel>Bandara Asal </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Contoh: Soekarno Hatta International Airport"
                  value={bandaraasal_}
                  onChange={(e) => setBandaraasal_(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-2">
                <FormLabel>Kota Tujuan </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Nama Kota Tujuan"
                  value={kotatujuan_}
                  onChange={(e) => setKotatujuan_(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-2">
                <FormLabel>Bandara Tujuan </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Contoh: Ngurah Rai International Airport"
                  value={bandaratujuan_}
                  onChange={(e) => setBandaratujuan_(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-2">
                <FormLabel>Depatue Date </FormLabel>
                <FormControl
                  type="date"
                  value={depaturedate_}
                  onChange={(e) => setDepatuedate_(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-2">
                <FormLabel>Depature Time </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Contoh: 19:00"
                  value={depatuetime_}
                  onChange={(e) => setDepaturetime_(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-2">
                <FormLabel>Kode Negara Asal </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Contoh: ID"
                  value={kodenegaraasal_}
                  onChange={(e) => setKodenegaraasal_(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-2">
                <FormLabel>Kode Negara Tujuan </FormLabel>
                <FormControl
                  type="text"
                  placeholder="Contoh: ID"
                  value={kodenegaratujuan_}
                  onChange={(e) => setKodenegaratujuan_(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-2">
                <FormLabel>Harga Tiket <p className='text-danger d-inline'>*</p></FormLabel>
                <FormControl
                  type="text"
                  placeholder="Contoh: 450000"
                  value={price_}
                  onChange={(e) => setPrice_(e.target.value)}
                  required
                />
              </Form.Group>
              </Col>
            </Row>
            <p className='font-bold text-lg mt-5'>Other Information</p>
            <Form.Group>
              <FormLabel>Total Price <p className='text-danger d-inline'>*</p></FormLabel>
              <FormControl 
              type='text'
              placeholder="Contoh: 900000"
              value={totalprice}
              onChange={(e) => setTotalprice(e.target.value)}
              required
              />
            </Form.Group>
            <Form.Group className="my-2">
            <FormLabel>Foto Produk <p className='text-danger d-inline'>*</p></FormLabel>
            <FormControl
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
            </Form.Group>
            <Form.Group>
              <FormLabel>Deskripsi <p className='text-danger d-inline'>*</p></FormLabel>
              <FormControl 
              as="textarea"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              required
              />
            </Form.Group>

            <Form.Group>
              <Button className="mt-2 mb-4 me-3 bg-warning" href="/ticketschedule">
                Cancel
              </Button>
              <Button className="mt-2 mb-4 bg-success" type="submit">Submit</Button>
            </Form.Group>
          </Form>      
    </Container>
  )
}

export default AddTicket
