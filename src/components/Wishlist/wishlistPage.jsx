import React from 'react'

// Assets
import pict1 from '../assets/img/Wishlist/airAsia.png'
import pict2 from '../assets/img/Wishlist/aviaStar.png'
import pict3 from '../assets/img/Wishlist/batikAir.png'
import Flight from '../assets/img/Wishlist/Flight.png'
import { useState, useEffect } from "react";
import axios from "axios";
export default function PaymentPage() {
    const [wishlist, setWishlist] = useState("");
    const historyUser = () => {
        axios
        .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/wishlist/list', {
            headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then((response) => {
            console.log(response.data.data)
            setWishlist(response.data);
        });
    };
    useEffect(() => {
        historyUser();
    }, [])
    return (
        <div className="wish pt-28">
            <section className="pt-5 padding-y pb-5">
                <div className="container">
                    <div className="row">
                        <main className="col-md-24">
                            <div className="card">
                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Ticket</th>
                                            <th scope="col" className="text-right" width="200"> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="card border rounded-full shadow-sm p-1 cursor-pointer">
                                                    <div className="card-top">
                                                        <img src={pict1} alt='pict1' style={{height:100}} />
                                                        <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                                                            <div>Jakarta</div>
                                                            <img alt='Flight' src={Flight} />
                                                            <div>Lombok</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-bottom text-sm">
                                                        <div>Mountain Hiking Tour</div>
                                                        <div className='grid grid-cols-2 pt-2'>
                                                        <div>$89/ Person</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>



                                            <td className="text-right">
                                                <a href="" className="btn btn-danger"> Remove</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="card border rounded-full shadow-sm p-1 cursor-pointer">
                                                    <div className="card-top">
                                                        <img src={pict2} alt='pict2' style={{height:100}} />
                                                        <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                                                            <div>Jakarta</div>
                                                            <img alt='Flight' src={Flight} />
                                                            <div>Bandung</div>
                                                        </div>
                                                    </div>

                                                    <div className="card-bottom text-sm">
                                                        <div>Bandung</div>
                                                        <div className='grid grid-cols-2 pt-2'>
                                                            <div>$99/ Person</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="text-right">
                                                <a href="" className="btn btn-danger btn-round"> Remove</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="card border rounded-full shadow-sm p-1 cursor-pointer">
                                                    <div className="card-top">
                                                        <img src={pict3} alt='pict3' style={{height:100}} />
                                                        <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                                                            <div>Jakarta</div>
                                                            <img alt='Flight' src={Flight} />
                                                            <div>Lombok</div>
                                                        </div>
                                                    </div>

                                                    <div className="card-bottom text-sm">
                                                        <div>Mountain Hiking Tour</div>
                                                        <div className='grid grid-cols-2 pt-2'>
                                                            <div>$89/ Person</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="text-right">
                                                <a href="/" className="btn btn-danger btn-round"> Remove</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </main>
                        <aside className="col-md-3">
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    )
}