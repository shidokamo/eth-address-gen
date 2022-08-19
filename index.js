const { ethers } = require("ethers");
const wallet = new ethers.Wallet.createRandom();
console.log("<Private Key>");
console.log(wallet.privateKey);
console.log("<Wallet address>");
console.log(wallet.address);
