"use client"
import React from "react";
import "./Footer.css";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import logo from "@/app/img/Logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import "@/app/components/Navbar/Navbar.css";
const Footer: React.FC = () => {
  const iconStyle: React.CSSProperties = {
    display: "inline-block",
    width: "48px",
    height: "48px",
    cursor: "pointer",
    fontSize: "20px",
    textAlign: "center",
    lineHeight: "8rem",
  };
  // const hoverStyle: React.CSSProperties = {
  //   color: '#FFFFFF', // Color on hover
  // };

  const pathname = usePathname();
  return (
    <div className="footer">
      <div className="grid-container">

        <div id="col__logo">
          <div className=" logo-7-2">
            <div className="logo-holder logo-7-2" id="logo">
              <Image className="flower" src={logo} alt="" />
            </div>

              <Link href="/" className="footer__links">
              <h3> Interno   </h3>
              </Link>
         
            </div>
            <div className="first-col">       <p>
              It is a long established fact that a reader will be distracted
              lookings.
            </p></div>
     
            <div className="footer-icons">
              <a style={iconStyle} href="#">
                <FaFacebookF 
                  size={23}
               
                />
              </a>
              <a style={iconStyle} href="#">
                <FaTwitter
                  size={23} 
               
                />
              </a>
              <a style={iconStyle} href="#">
                <FaLinkedinIn
                  size={23}
               
                />
              </a>
          
              <a style={iconStyle} href="#">
                <FaInstagram
                  size={23}
                />
              </a>
          
        
          </div>
        </div>
        <div className="col">
          <h3>Pages</h3>
          <ul>
            <li ><Link href='/about' className={`col__links ${pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
            <li><Link href='/project'className={`col__links ${pathname === '/project' ? 'active' : ''}`}>Our Projects</Link></li>
            <li><Link href="/professionals" className={`col__links ${pathname === '/professionals' ? 'active' : ''}`}>Our Team</Link></li>
            <li><Link href="/contact" className={`col__links ${pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link></li>
            <li><Link  href="/services" className={`col__links ${pathname === '/services' ? 'active' : ''}`}>Services</Link></li>
          </ul>
        </div>
        <div className="col">
          <h3>Services</h3>
          <ul>
            <li><Link href='/'className={`col__links ${pathname === 'home' ? 'active' : ''}`}>Kitchen</Link></li>
            <li><Link href='/'className={`col__links ${pathname === 'home' ? 'active' : ''}`}>Living Area</Link></li>
            <li><Link href='/'className={`col__links ${pathname === 'home' ? 'active' : ''}`}>Bathroom</Link></li>
            <li><Link href='/'className={`col__links ${pathname === 'home' ? 'active' : ''}`}>Dining Hall</Link></li>
            <li><Link href='/'className={`col__links ${pathname === 'home' ? 'active' : ''}`}>Bedroom</Link></li>
          </ul>
        </div>
        <div className="footer-info">
          <h3> Contact</h3>

          <div className="info">
            <ul>
              <li>
                <p>55 East Birchwoood Ave.</p>

                <div className="parker">
                  <p>Brooklyn, New York 11201</p>
                </div>
              </li>
              <li>
                <p>contact@intrrno.com</p>
              </li>
              <li>
                <p> (123) 456-7890 </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
