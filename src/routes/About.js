import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/About'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training.' />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default About
