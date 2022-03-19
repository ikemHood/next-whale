import React from 'react'
import './TokenStyles.css'

const Token = () => {
    return (
        <div className='token'>
            <div className="title">
                <h1>Tokenomics</h1>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <h3> Token Details </h3>
                    <span className='bar'></span>
                    <p> MaxSupply - 1B </p>
                    <p> Network - BSC </p>
                    <p> Contract Address - TBA </p>
                   
                    
                </div>

                <div className='card'>
                    <h3> Tokenomics </h3>
                    <span className='bar'></span>
                    <p> Private sales (NFT Holders) - 5% </p>
                    <p> Public sales - 20% </p>
                    <p>Development - 5% </p>
                    <p> Marketing - 5% </p>
                    <p> Liquidity - 65% </p>
                </div>

                <div className='card'>
                    <h3> Token Tax </h3>
                    <span className='bar'></span>
                    <p> Tax - 20% </p>
                    <p> Treasury - 10% </p>
                    <p> Reflection - 5% </p>
                    <p> Autoliqudity - 5% </p>
                
                </div>
            </div>
        </div>
    )
}

export default Token
