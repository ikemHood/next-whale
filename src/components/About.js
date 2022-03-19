import React from 'react'
import './AboutStyles.css'

import {Link} from 'react-router-dom'
import gold from '../assets/gold.jpg'
import graph from '../assets/graph.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>What We Do</h1>
                <p>We Simplify DeFI, Remove Technical Barrier and Save you Time. We Invest in DeFi on Multiple Chains and Return the Profits to Holders.</p>
                <Link to='/Works'><button className='btn'>Learn More</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={graph} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={gold} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
