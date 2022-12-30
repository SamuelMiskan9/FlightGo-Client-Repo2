import React from "react";
import styled from "styled-components";
import '../landingPage.css'

// Assets
import { FiX } from "react-icons/fi";
import LogoIcon from "../../assets/svg/LandingPage/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate  bg-white" sidebarOpen={sidebarOpen} style={{ opacity: 0.9 }}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
        </div>

        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <FiX className='text-dark text-lg' />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <a
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="text-black"
            style={{ padding: "10px 15px" }}
            href="/ticket"
            spy={true.toString()}
            smooth={true.toString()}
            offset={-60}
          >
            Booking
          </a>
        </li>

        <li className="semiBold font15 pointer">
          <a
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="text-black"
            style={{ padding: "10px 15px" }}
            href="#about"
            spy={true.toString()}
            smooth={true.toString()}
            offset={-60}
          >
            About Us
          </a>
        </li>

        {/* <li className="semiBold font15 pointer">
          <a
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="text-black"
            style={{ padding: "10px 15px" }}
            href="#destination"
            spy={true.toString()}
            smooth={true.toString()}
            offset={-60}
          >
            Destination
          </a>
        </li> */}

        <li className="semiBold font15 pointer">
          <a
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="text-black"
            style={{ padding: "10px 15px" }}
            href="#testimonial"
            spy={true.toString()}
            smooth={true.toString()}
            offset={-60}
          >
            Testimonial
          </a>
        </li>

        <li className="semiBold font15 pointer flexCenter">
          <a href="/login"  className=" text-white" style={{ padding: "4px 15px", backgroundColor: "#F97316" }}>
            Sign In
          </a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
    
  }
`;
