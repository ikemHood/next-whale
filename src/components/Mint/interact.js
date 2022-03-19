import Web3 from "web3";

Web3 = require('web3')

const web3 = new Web3(Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545")

const contract = require('./abi.json')


export const contractAddress = "0x591EE25fC10AB1BE061810F9639B07a469a6E631";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

export const getTokenAddress = async () => {
  const result = await nftContract.methods.currencyToken().call();
  return result;
};


const Token = new web3.eth.Contract( getTokenAddress)





export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const obj = {
        status: "",
        address: addressArray[0],
      };

      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😞" + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://metamask.io/download.html"
            >
            Install MetaMask.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "",
        };
      } else {
        return {
          address: "",
          status: "😞",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😞" + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://metamask.io/download.html"
            >
              Install MetaMask.
            </a>
          </p>
        </span>
      ),
    };
  }
};

// Contract Methods

export const getMaxMintAmount = async () => {
  const result = await nftContract.methods.maxPerAddress().call();
  return result;
};

export const getMaxSupply = async () => {
    const result = await nftContract.methods.maxSupply().call();
    return result;
};

export const getName = async () => {
    const result = await nftContract.methods.name().call();
    return result;
  };

export const getTotalSupply = async () => {
  const result = await nftContract.methods.totalSupply().call();
  return result;
};

export const getMaxsupply = async () => {
    const result = await nftContract.methods.name().call();
    return result;
  };

export const getNftPrice = async () => {
  const result = await nftContract.methods.cost().call();
//   const resultEther = web3.utils.fromWei(result, "ether");
  return result;
};




export const handleApprove = async () => {
  const result = await nftContract.methods.getApproved(window.ethereum.selectedAddress ,contractAddress).call();
  return result;
};

export const mintNFT = async (mintAmount) => {
    if (!window.ethereum.selectedAddress) {
      return {
        success: false,
        status: (
          <p>
            🦊 Connect to Metamask using{" "}
            <span className="connect">Connect Wallet</span> button.
          </p>
        ),
      };
    }



  //set up your Approval transaction
  const aprovaltransactionParameters = {
    from: window.ethereum.selectedAddress, // must match user's active address.
    spender: contractAddress,
    data: Token.methods.getApproved().encodeABI(), //make call to NFT smart contract
  };
  //sign the transaction via Metamask
  try {
    const txapproveHash = await window.ethereum.request({
      method: "eth_Transaction",
      params: [aprovaltransactionParameters],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Bscscan: https://testnet.bscscan.com/tx/" +
        txapproveHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
};

const MinttransactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: getNftPrice,
    gasLimit: "0",
    data: nftContract.methods.mint(mintAmount).encodeABI(), //make call to NFT smart contract
  };
  //sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [MinttransactionParameters],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://testnet.bscscan.com/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
};


};

