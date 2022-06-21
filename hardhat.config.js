require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  mocha: {
    timeout: 100000
  }
  // defaultNetwork: "localhost",
  // networks: {
  //   localhost: {
  //     url: "http://localhost:8545",
  //   },
  //   rinkeby: {
  //     url: "https://eth-rinkeby.alchemyapi.io/v2/NXqkxxyuNympXDCFSBP8v9TTSyualSUk",
  //     accounts: [process.env.ACCOUNT_0_PRIVATE_KEY]
  //   },
  //   ropsten: {
  //     url: "https://eth-ropsten.alchemyapi.io/v2/KGHPZwmUNmeWprMgIVZbJLO4Rx2vWt2b",
  //     accounts: [process.env.ACCOUNT_0_PRIVATE_KEY]
  //   },
  //   mainnet: {
  //     url: "https://eth-mainnet.alchemyapi.io/v2/7BrttDu47Up_TL4HY5ptWZ3sVGgeLms3",
  //     accounts: [process.env.ACCOUNT_0_PRIVATE_KEY]
  //   },
  //   matic: {
  //     url: "https://rpc-mainnet.maticvigil.com",
  //     accounts: [process.env.ACCOUNT_0_PRIVATE_KEY],
  //   },
  // }
};
