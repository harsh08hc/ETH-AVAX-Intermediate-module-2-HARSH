import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";


export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [name, setName] = useState(undefined);


  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  };

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    } else {
      console.log("No account is found like this");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("Please Connect Metamask Wallet");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getBalance = async (walletaddress) => {
    if (atm) {
      alert(walletaddress)
      setBalance((await atm.getBalanceFromWalletAddress(walletaddress)).toNumber());
    }
  };

  const deposit = async () => {
    alert(account)
    if (atm) {
      let tx = await atm.depositamount(1, { gasLimit: 3e7 });
      await tx.wait();
      getBalance(account[0]);
    }
  };

  const withdraw = async () => {
    if (atm) {
      let tx = await atm.withdrawamount(1, { gasLimit: 3e7 });
      await tx.wait();
      getBalance(account[0]);
    }
  };

  const getTransactionStatement = async (walletaddress) => {
    if (atm) {
      const tx = await atm.getTransactionStatement(walletaddress);
      await tx.wait();
      return (await tx.wait()).toNumber();
    } 
  };
    const changeaccount = async () => {
    handleAccount([prompt("Enter wallet address")])
    getBalance(account[0]);
  }
  const handleGetAccountStatement = async () => {
    const walletaddress = await prompt("Please enter your wallet address");
    getATMContract();
    const transactionStatement = await getTransactionStatement(walletaddress);
    alert(transactionStatement);
  };
  
  const buttonGetAccountStatement = async () => {
    const walletaddress = await prompt("Please enter your wallet address");
    const transactionStatement = await getTransactionStatement(walletaddress);
    alert(transactionStatement);
  };
  
  const setAccountName = async (newName) => {
    if (atm) {
      
      try {
        const tx = await atm.setAccountName(newName);
        await tx.wait();
  
        alert("Account name successfully updated");
      } catch (error) {
        console.log(error);
      }
    }
  }; 

  const buttonSetAccountName = async () => {
    const newName = await prompt("Please enter a name-");
    
    alert("Account name successfully updated");
  };

  const initUser = () => {
    // Check if user has Metamask
    if (!ethWallet) {
      return <p>You need to install Metamask in order to use this ATM.</p>;
    }

    // Check if user is connected. If not, connect to their account
    if (!account) {
      return (
        <button onClick={connectAccount}>
          Connect your Metamask wallet
        </button>
      );
    }
    
    if (balance == undefined) {
      getBalance(account[0]);
    }

    return (
      <div class="overlay">
        <p>Your Balance: {balance}</p>
        <p>Your Account: {account}</p>
        <button onClick={deposit}>Deposit 1 ETH</button>
        <button onClick={withdraw}>Withdraw 1 ETH</button>
        <button onClick={async () => {
          alert((await atm.getBalanceFromWalletAddress(prompt("Wallet Address: "))).toNumber())
        }}>check  others balance</button>
       <button onClick={buttonGetAccountStatement}>Get Account Statement</button>
       <button onClick={async () => { const newName = await prompt("Please enter a name-"); setName(newName);
        }}>Set Account Name</button>
       
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="box">
      <header>
        <h1>WELCOME</h1>
        <p>what do you want to do here:<input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        </p>
      </header>
      {initUser()}
      <style jsx>
        {`
          .box {
            text-align: center;
            background-color: pink;
            background-size: cover;
            color: #fff;
            font-family: "Arial", Times New Roman;
          }

          header {
            padding: 34px;
          }

          h1 {
            font-family: "Arial", Times New Roman;
            font-size: 70px;
            margin-bottom: 20px;
          }

          p {
            font-size: 22px;
            margin-bottom: 20px;
          }

          button {
            background-color: #4caf50;
            color: #fff;
            border: none;
            padding: 20px 35px;
            font-size: 20px;
            cursor: pointer;
          }

          button:hover {
            cursor: pointer;
          }
        `}
      </style>
    </main>
  );
}
