import React from "react";

import TopNavbar from "../../components/LandingPage/Nav/TopNavbar";
import Notification from "../../components/notification/Notification";
import Footer from '../../components/LandingPage/Sections/Footer';

export default function NotifPage() {
    return (
        <>
        <TopNavbar/>
        <Notification/>
        <Footer/>
        </>
    );
}