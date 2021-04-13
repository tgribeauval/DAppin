const EthSwap = artifacts.require("EthSwap");
const Token = artifacts.require("Token");

module.exports = function(deployer) {
  deployer.deploy(EthSwap);
  deployer.deploy(Token);
};
