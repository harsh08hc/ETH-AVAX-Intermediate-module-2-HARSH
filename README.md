# React Crypto ATM

This is a simple React component for a Crypto ATM application. It allows users to connect their MetaMask wallet, view their account balance, deposit and withdraw ETH, check the owner's name and a simple calculator with limited operations.

##Prerequisites
The smart contract uses Solidity version ^0.8.16.

## Requirements

1. MetaMask wallet: Ensure that you have the MetaMask wallet extension installed in your browser.

## Features

The Crypto ATM component provides the following features:

- Connect to MetaMask wallet
- Display user's account address
- View user's account balance
- Deposit ETH into the ATM
- Withdraw ETH from the ATM
- Check other's balance from wallet address


Please note that the component assumes you have set up and configured MetaMask in your browser.

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

##Events
The smart contract emits the following events:

Deposit(uint256 amount): Triggered when a deposit is made, providing the amount deposited.
Withdraw(uint256 amount): Triggered when a withdrawal is made, providing the amount withdrawn.
Transaction(address sender, address receiver, uint256 amount): Triggered during a transaction, providing the sender's and receiver's addresses and the amount transferred.
NameUpdate(string value): Triggered when the account name is updated, providing the new account name.

##Functions
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
