var Escrow = artifacts.require("./Escrow.sol");
var EscrowExchange = artifacts.require("./EscrowExchange.sol");

var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};
