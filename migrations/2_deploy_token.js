const YourToken = artifacts.require("YourToken");

module.exports = (deployer) => {
  // default initialSupply is 1.0 yourTokens
  deployer.deploy("YourToken", 1000000000000000000);
};
