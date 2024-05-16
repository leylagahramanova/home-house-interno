"use client"
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './Navbar.css';

import logo from '@/app/img/Logo.png'
import { TfiSearch } from "react-icons/tfi";
import Image from 'next/image';
const Navbar: React.FC = () => {
  const pathname = usePathname();
  useEffect(() => {
    const mobileMenu = () => {
      const menu = document.querySelector('#mobile-menu');
      const menuLinks = document.querySelector('.navbar__menu');
      if (!menu || !menuLinks) return;
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
      document.body.style.overflowY = menu.classList.contains('is-active') ? 'hidden' : 'auto';

    };

    const menu = document.querySelector('#mobile-menu');
    if (menu) {
      menu.addEventListener('click', mobileMenu);
    }

    return () => {
      if (menu) {
        menu.removeEventListener('click', mobileMenu);
      }
      // Ensure that the scrollbar is visible when the component unmounts
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div id="navbar__logo">
          <div className=" logo-7" >
            <div className="logo-holder logo-7" id="logo">
              <Image className="flower" src={logo} alt="" />
            </div>
            <h3>
              <Link href="/" className='navbar__links'>Interno</Link>
            </h3>
          </div>
        </div>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className='navbar__item'>
            <Link href="/" className={`navbar__links ${pathname === 'home' ? 'active' : ''}`}>Home</Link>
          </li>
          <div className="dropdown">
            <span><li className="navbar__item " style={{
              padding: '14px 10px',
              textDecoration: 'none',
              fontFamily: 'Jost',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '25px',
              textAlign: 'center',
              height: '25px',
              color: '292F36'
            }}>Pages
            </li></span>
            <div className="dropdown-content">
            <li className='navbar__item '>
                <Link href="/about" className={`navbar__links ${pathname === '/about' ? 'active' : ''}`}>About Us</Link>
              </li>
              <li className='navbar__item '>
                <Link href="/price" className={`navbar__links ${pathname === '/price' ? 'active' : ''}`}>Pricing</Link>
              </li>
              <li className='navbar__item'>
                <Link href="/professionals" className={`navbar__links ${pathname === '/professionals' ? 'active' : ''}`}>Team</Link>
              </li>
              <li className='navbar__item '>
                <Link href="/faq" className={`navbar__links ${pathname === '/faq' ? 'active' : ''}`}>Faq</Link>
              </li>
              <li className='navbar__item'>
                <Link href="/licenses" className={`navbar__links ${pathname === '/licenses' ? 'active' : ''}`}>Licenses</Link>
              </li>
              <li className='navbar__item'>
            <Link href="/changelog" className={`navbar__links ${pathname === '/changelog' ? 'active' : ''}`}>Changelog</Link>
          </li>
            </div>
          </div>

          <li className='navbar__item'>
            <Link href="/services" className={`navbar__links ${pathname === '/services' ? 'active' : ''}`}>Services</Link>
          </li>
          <li className='navbar__item'>
            <Link href="/project" className={`navbar__links ${pathname === '/project' ? 'active' : ''}`}>Project</Link>
          </li>
          <li className='navbar__item'>
            <Link href="/contact" className={`navbar__links ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
