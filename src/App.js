import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import React, { Suspense, useState, useEffect } from 'react'
import './scss/style.scss'
import "./App.css";
import Landing from './pages/LandingPage/Landing';
import RegisterPage from "./pages/AuthPage/RegisterPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from './pages/ProfilePage/updateProfile';
import TicketBook from "./pages/TicketPage/TicketBook";
import TicketPage from "./pages/TicketPage/TicketPage";
import TicketPageConfirm from "./pages/TicketPage/TicketPageConfirm";
import Notification from "./pages/Notification/Notification";
import Homepage from "./pages/Homepage/Homepage";
import History from "./pages/History/History";
import CheckInPage from './pages/History/CheckIn';
import Payment from "./pages/Payment/payment";
import WishlistPage from './pages/Wishlist/wishlist';
import axios from "axios";
import NavigateToHome from "../src/auth/NavigateToHome"
import ProtectedToken from "../src/auth/ProtectedToken"
function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
  const [users, setUsers] = useState("");
  const [role, setRole] = useState("");
  
  const whoami = () => {
    axios
        .get('https://flightgo-be-server.up.railway.app/v1/api/current-user', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then((response) => {
            setUsers(response.data.data);
            setRole(response.data.role);
        });
  };

  useEffect(() => {
      whoami();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='/' element={
              <NavigateToHome users={users}>
            <Homepage/>
            </NavigateToHome>
            }/>
            <Route path='/landing' element={<Landing/>}/>
            <Route path='/login' element={
              <NavigateToHome users={users}>
                <LoginPage />
              </NavigateToHome>
            }/>

            <Route path='register' element={
              <NavigateToHome>
                <RegisterPage/>
              </NavigateToHome>
            }/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/profile/update-profile' element={<EditProfilePage/>}/>
            <Route path='/notif' element={<Notification/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/history/checkin/:id' element={<CheckInPage/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/wishlist' element={<WishlistPage/>}/>
            <Route path='*' element={<DefaultLayout/>}/>
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/ticket/confirm" element={<TicketPageConfirm />} />
            <Route path="/ticket/book/:id" element={<TicketBook />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
