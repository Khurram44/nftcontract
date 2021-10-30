require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
//const fs = require ('fs')
 const privateKey = fs.readFileSync('.secret').toString()
const infuraId = 'c4c9b75609ab41239f7e423638feab0b'
let secret = require("./secret.json")

// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    testnet:{
      url: secret.url,
      accounts:[secret.key]
    },
    mumbai: {
      // Infura
       url: 'https://polygon-mumbai.infura.io/v3/c4c9b75609ab41239f7e423638feab0b',
      //url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
       url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      //url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
    
      },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

