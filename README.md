# React Crypto ATM

This is a simple React component for a Crypto ATM application. It allows users to connect their MetaMask wallet, view their account balance, deposit and withdraw ETH, check the owner's name and a simple calculator with limited operations.

## Prerequisites

- Node.js (v14.0.0 or higher)
- MetaMask wallet extension installed in your browser


## Requirements

1. MetaMask wallet: Ensure that you have the MetaMask wallet extension installed in your browser.

## Features

The Crypto ATM component provides the following features:

Deposit: Users can deposit funds into their account.
Withdraw: Users can withdraw funds from their account.
Balance Check: Users can check the balance of their account.
Transaction History: Users can view the transaction history of the smart contract.
Account Name: Users can set and retrieve an account name associated with their address.


## Customization

You can customize the UI elements, styles, and behavior of the Crypto ATM component according to your project's requirements. Modify the JSX structure, CSS styles, and event handlers to align with your application's design and functionality.

## Setup

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/

## Functions
The smart contract provides the following functions:

getBalanceFromWalletAddress(address walletAddress): Retrieves the balance of the specified wallet address.
depositamount(uint256 _amount): Deposits the specified amount into the sender's account.
withdrawamount(uint256 _withdrawAmount): Withdraws the specified amount from the sender's account.
checkBalance(): Returns the balance of the sender's account.
getTransactionStatement(): Returns the address of the smart contract (unused parameter).
setAccountName(string memory _name): Sets the account name for the sender's address.
getAccountName(): Returns the account name associated with the sender's address.


## Technologies Used

- React - JavaScript library for building user interfaces
- Ethereum - Blockchain network for decentralized applications
- MetaMask - Wallet and gateway to Ethereum blockchain
- ethers.js - Library for interacting with Ethereum smart contracts

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## Authors

Harsh Chaudhary

## Video Walkthrough

https://www.loom.com/share/3e4b2dd051f84a76b68e15bd077e3bd5?sid=2d79ae27-d696-4835-bcee-365bb3256197
