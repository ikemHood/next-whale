import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import { FaDiscord } from 'react-icons/fa'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Simplify. Defi.</h1>
                <p>Simply and rememberable line here...</p>
                <div className= 'Buttons'>
                    <Link to='/' className='btn btn-1'> <FaDiscord /> Discord</Link>
                    <Link to='/Faq' className='btn btn-2 btn-light'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
