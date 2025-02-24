import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/populator/Popular'
import Offers from '../components/Offers/Offers'
import Calculator from '../components/Calculator/Calculator'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Calculator/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home