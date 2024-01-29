import React from 'react'
import Header from "../components/Header/Header"
import Hero from '../components/Hero/Hero'
import ClothDescribtion from "../components/ClothDescribtion/Cloth"
import ClothDonation from '../components/ClothDonation/ClothDonation'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
       
        <ClothDonation />
        <Footer />
    </div>
  )
}

export default Home