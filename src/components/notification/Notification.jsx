import React from 'react';
import "./Notification.css";

function Notification() {
    return (
      <div>
        <header className="section-header pt-3"></header>

          <section className="section-content padding-y pb-5">
            <div className="container">
              <div className="row">
                <main className="col-md-24">

                  <div className="card">
                    <table className="table table-borderless table-shopping-cart">
                      <h3 className='ml ml-5 pt-3'>Notification</h3>
                    </table>

                    <div className="card-body border-top bg-sky-100">
                          <div className='textNotif'><i class="fas fa-star-of-life fa-xs"></i>Anda berhasil memesan tiket Roundtrip</div>
                    </div>

                    <div className="card-body border-top bg-sky-100">
                        <div className='textNotif'><i class="fas fa-star-of-life fa-xs"></i>Anda berhasil memesan tiket Roundtrip</div>
                    </div>

                    <div className="card-body border-top bg-sky-100">
                        <div className='textNotif'><i class="fas fa-star-of-life fa-xs"></i>Anda berhasil memesan tiket Roundtrip</div>
                    </div>

                    <div className="card-body border-top bg-sky-100">
                        <div className='textNotif'><i class="fas fa-star-of-life fa-xs"></i>Anda berhasil memesan tiket Roundtrip</div>
                    </div>

                    <div className="card-body border-top bg-sky-100">
                        <div className='textNotif'><i class="fas fa-star-of-life fa-xs"></i>Anda berhasil memesan tiket Roundtrip</div>
                    </div>

                    <div className="card-body border-top bg-sky-100">
                        <div className='textNotif'><i class="fas fa-star-of-life fa-xs"></i>Anda berhasil memesan tiket Roundtrip</div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </section>

      <button className='text container text-right text-orange-500 pb-3'>Sudah dibaca</button>
      </div>


    )
}
export default Notification