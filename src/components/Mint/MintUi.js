import './MintUi.css'
import React, { useContext, createContext, useState, useEffect } from "react";
import { useStatus } from "./contextStatus";

import {
    getMaxMintAmount,
    getTotalSupply,
    getMaxSupply,
    getNftPrice,
    mintNFT,
    contractAddress,
  } from "./interact";

 

export function Mintui(props) {
    
const { status, setStatus } = useStatus();
const [count, setCount] = useState(1);
  const [MaxSupply, setMaxSupply] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [nftPrice, setNftPrice] = useState("0");
  

  useEffect(() => {
    const prepare = async () => {
      setMaxMintAmount(await getMaxMintAmount());
      setNftPrice(await getNftPrice());
      setMaxSupply(await getMaxSupply());
      await updateTotalSupply();
    };

    prepare();
  });

  const updateTotalSupply = async () => {
    const mintedCount = await getTotalSupply();
    setTotalSupply(mintedCount);
  };

  const incrementCount = () => {
    if (count < maxMintAmount) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const mintNewNFT = async () => {
    const { status } = await mintNFT();
    setStatus(status);

    // We minted a new emoji face, so we need to update the total supply
    updateTotalSupply();
  };

    return (
            <div className='card-container'>
                <div className='card'>
                    <h3> Mint </h3>
                    <span>{`${totalSupply}`} / {`${MaxSupply}`}</span>
                    <span className='bar'></span>
                    <p> Max Per Wallet is - {`${maxMintAmount}`} </p>
                    <p> Network - BSC </p>
                    <p> Contract Address - {`${contractAddress}`} </p>
                    <div className="inc-btn">
                <button
                  className="increase"
                  onClick={incrementCount}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>

                <h2 className="mx-8">{count}</h2>

                <button
                  className="decrease"
                  onClick={decrementCount}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
              </div>
                    <p> Mint Price -  {nftPrice} + Gas </p>
                    <span className='bar'></span>
                    <btn className= 'btn' onClick={mintNewNFT}>Connect Wallet</btn>
                </div>
            </div>
    )
    
};

