var Storage = artifacts.require("./Migrations.sol");

module.exports = function(deployer){
deployer.deploy(Storage);
};
