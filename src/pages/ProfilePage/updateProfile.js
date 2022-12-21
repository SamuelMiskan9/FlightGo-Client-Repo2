import React from "react";
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar'
import Footer from '../../components/LandingPage/Sections/Footer'
import EditProfile from "../../components/Profile/UpdateProfile";

const EditProfilePage = () => {
    return (
        <>
        <TopNavbar />
        <EditProfile />
        <Footer />
        </>
    );
};

export default EditProfilePage;