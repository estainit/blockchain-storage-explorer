require("@nomiclabs/hardhat-waffle");

require("dotenv").config();
const {
  ROPSTEN_API_URL,
  ROPSTEN_PRIVATE_KEY,
  ALCHEMY_ROPSTEN_API_KEY,
  RINKEBY_API_URL,
  ALCHEMY_RINKEBY_API_KEY,
} = process.env;

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

  mining: {
    auto: false,
    interval: 5000,
  },

  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: 5000,
      },
      chainId: 31338,
    },

    ropsten: {
      url: `${ROPSTEN_API_URL}${ALCHEMY_ROPSTEN_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },

    rinkeby: {
      url: `${RINKEBY_API_URL}${ALCHEMY_RINKEBY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
