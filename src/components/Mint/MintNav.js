import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useStatus } from "./contextStatus";
import './MintUi.css'
import {
connectWallet, 
getCurrentWalletConnected
} from "./interact";



const Navbar = () => {

    const { setStatus } = useStatus();
    const [walletAddress, setWalletAddress] = useState("");
  
        const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setWalletAddress(walletResponse.address);
        setStatus(walletResponse.status);
      };
    
      useEffect(() => {
        const prepare = async () => {
          const walletResponse = await getCurrentWalletConnected();
          setWalletAddress(walletResponse.address);
          setStatus(walletResponse.status);
    
          addWalletListener();
        };
    
        prepare();
      }, []);
    
      const addWalletListener = () => {
        if (window.ethereum) {
          window.ethereum.on("accountsChanged", async (accounts) => {
            if (accounts.length > 0) {
              setWalletAddress(accounts[0]);
              setStatus("");
            } else {
              setWalletAddress("");
              setStatus("🦊 Connect to Metamask using Connect Wallet button.");
            }
          });
        }
      };
    

    return (
        <div className= 'Nav-container'>
           <Link to='/'><h1>DeFI Farm</h1></Link> 
           <li>
                <a
                  className="btn"
                  id="walletButton"
                  onClick={connectWalletPressed}
                >
                  {walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                  ) : (
                    <span>Connect Wallet</span>
                  )}
                </a>
              </li>
           </div>
    )
}

export default Navbar