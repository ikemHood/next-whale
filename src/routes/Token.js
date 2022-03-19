import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Token'
import HeroImage from '../components/HeroImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Token.' text='DeFI Farm World Tokennomics.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing
