const HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gasPrice: 0,
      network_id: "*",
      skipDryRun: true
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider("replace-with-private-key-when-using", "https://goerli.infura.io/v3/7793c9b697d2448991ec86f9f7a894bc");
      },
      network_id: "5"
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider("replace-with-private-key-when-using", "https://mainnet.infura.io/v3/7793c9b697d2448991ec86f9f7a894bc");
      },
      network_id: "1"
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    reporter: "mocha-circleci-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 5,
      onlyCalledMethods: true,
      excludeContracts: ["Migrations"]
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.11",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
