# ZENA App 

This project was built during ETHBerlin 2022. ZENA is a WEB3 online education and onboarding tool for German teenagers that reduces the complexity of web3 concepts and enables them to build open source collaborative problem solving tools for their future.

## Frontend

The frontend was written in React/Typescript with the help of ethers.js for web3 functionality and tailwind lib for styling.

The frontend is a simulation of (otherwise sometimes intimidating) typical web3 scenarios, such as creating a wallet, doing transactions, and minting NFTs.

## Backend

Still, all user interactions and transactions are "real" transactions on the chain (currently fork of Goerli Testnet with the help of Tenderly) are handled by a Node.js backend. Whenever a new user account is created, the backend stores keys in supabase and signs transactions on behalf of the user.

## Infrastructure

In a future scenario this app is not running on Ethereum/Polygon testnet (fork), but on a private blockchain to keep a secure and enclosed playing ground.

## Deployment

This project is online in a test version, deployed decentrally at Sphereon / Filecoin network: [zena-5a2u9.spheron.app/](https://zena-5a2u9.spheron.app/)


