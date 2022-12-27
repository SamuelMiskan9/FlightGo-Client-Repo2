import React, { useState, useEffect } from "react";

// Assets
import pict1 from '../assets/img/Wishlist/airAsia.png'
import Flight from '../assets/img/Wishlist/Flight.png'
import { Link } from 'react-router-dom'
import axios from "axios";

export default function WishlistPage() {
    const [wishlist, setWishlist] = useState([]);
    const historyUser = () => {
        axios
            .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/wishlist/list', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((response) => {
                setWishlist(response.data.data);
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
                                        {wishlist.map((wishlist) => (
                                            <tr>
                                                <>
                                                    <td>
                                                        <div className="card border rounded-full shadow-sm p-1 cursor-pointer">
                                                            <div className="card-top">
                                                                <img src={pict1} alt='pict1' style={{ height: 100 }} />
                                                                <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                                                                    <div>{wishlist.product.kota_asal}</div>
                                                                    <img alt='Flight' src={Flight} />
                                                                    <div>{wishlist.product.kota_tujuan}</div>
                                                                </div>
                                                            </div>
                                                            <div className="card-bottom text-sm">
                                                                <div>Mountain Hiking Tour</div>
                                                                <div className='grid grid-cols-2 pt-2'>
                                                                    <div>RP. {wishlist.product.total_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <button className="border px-3 py-1 mx-2 text-left rounded d-flex items-center text-white" style={{ backgroundColor: "#F97316" }}>
                                                            <Link className="text-white pe-3" to={`/ticket/book/${wishlist.id}`}>
                                                                Choose Flight
                                                            </Link>
                                                        </button>
                                                    </td>
                                                </>
                                            </tr>
                                        ))}
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