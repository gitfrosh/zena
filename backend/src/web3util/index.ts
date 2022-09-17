import { ethers } from "ethers";

export async function createWallet() {
  // creates public and private keys for new random wallet
  try {
    const wallet = ethers.Wallet.createRandom();
    console.log(wallet);
    return wallet;
  } catch (err) {
    console.error(err);
  }
}

export async function sendTx() {
  // TODO
  // should execute tx on behalf of user
}

export async function mintNFT() {
  // TODO
  // should mint NFT on behalt of user
}
