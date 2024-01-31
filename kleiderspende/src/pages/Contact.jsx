import Header from "../components/Header/Header"
import React,  { useEffect, useState } from 'react'
import ContactForm from "../components/Contact/ContactFormular"
import Footer from "../components/Footer/Footer"
import MobileNav from '../components/Header/MobileNav' 
  
const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div>
      {windowWidth > 1100 ? <Header /> : <MobileNav />}
      <ContactForm/>
      <Footer/>
      </div>
  )
}

export default Contact