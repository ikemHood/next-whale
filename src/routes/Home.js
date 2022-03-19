import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import PricingCards from '../components/Token'
import Timeline from '../components/TimeLine/TimeLine'
import About from '../components/About'
import Works from '../components/Works'
import Faq from '../components/faq/Faq'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Video />
            <About />
            <Works />
            <PricingCards />
            <Timeline />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
