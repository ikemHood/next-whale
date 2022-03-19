import React from 'react'
import './FooterStyles.css'
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
               
                <div>
                   
                    <div className='social'>
                        <FaDiscord size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTelegram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                  
                    <p>&copy; NextWhale 2022</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
