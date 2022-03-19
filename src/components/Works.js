import React from 'react'
import './workStyles.css'
import { Link } from 'react-router-dom'

const Works = () => {
    return (
        <div className='Works'>
            <div>
                <h1>How It Works</h1>
                <p>Every time you buy $DFW token, a percentage goes to our treasury
                    <br/>
                    We Use the treasury to farm DeFi across multiple chain, Play DeFi Games and earn reward
                    Trade the Financial Market and even invest in seed sales.
                    <br/>
                    We distribute points to holders as <b>rewards</b>
                    .</p>
                <Link to='/FAQ'><button className='btn'>FAQ</button></Link>
            </div>
        </div>
    )
}

export default Works
