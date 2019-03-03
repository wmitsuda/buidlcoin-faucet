require("dotenv").config();

const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 9545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          process.env.ROPSTEN_PRIVATE_KEY,
          `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`
        );
      },
      network_id: "3",
      gas: 5000000
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MAINNET_PRIVATE_KEY,
          `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
        );
      },
      network_id: "1",
      gas: 6000000,
      gasPrice: 2e9
    }
  }
};
