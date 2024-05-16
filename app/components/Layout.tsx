"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    setVisible(scrolled > 300);
  }; 

  const scrollToTop = () => { 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 

  const handleDarkModeToggle = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDark]);

  useEffect(() => {
    const handleOverflow = () => {
      const navbarMenu = document.querySelector('.navbar__menu.active');
      document.body.style.overflow = navbarMenu ? 'hidden' : 'auto';
    };

    handleOverflow();

    const observer = new MutationObserver(handleOverflow);
    observer.observe(document.body, { attributes: true, subtree: true });

    window.addEventListener('scroll', toggleVisible);
    window.addEventListener('resize', toggleVisible);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', toggleVisible);
      window.removeEventListener('resize', toggleVisible);
    };
  }, []);

  return (
    <div className='container' data-theme={isDark ? "dark" : "light"}>
      <Navbar />
      {children}
      <div className="ttt" style={{ display: visible ? 'block' : 'none' }}>

          <AiOutlineArrowUp style={{ fontSize: '750%' }} onClick={scrollToTop} />

      </div> 
      <Footer />
    </div>
  );
}

export default Layout;
