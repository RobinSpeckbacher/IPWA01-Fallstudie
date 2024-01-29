import React, { useEffect, useState } from 'react';
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import MobileNav from '../components/Header/MobileNav';
import Cloth from '../components/ClothDescribtion/Cloth';

const About = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

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
      <Cloth />
      <Footer />
    </div>
  );
};

export default About;
