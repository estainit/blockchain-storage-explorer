const { expect } = require("chai");
const { ethers } = require("hardhat");

/**
 * npx hardhat test --network ropsten
 *
 */

describe("Greeter", function () {
  // it("Should return the new greeting once it's changed", async function () {
  //   const Greeter = await ethers.getContractFactory("Greeter");
  //   const greeter = await Greeter.deploy("Hello, world!");
  //   await greeter.deployed();

  //   expect(await greeter.greet()).to.equal("Hello, world!");

  //   const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();

  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  // });

  it("Should Explore Rinkeby blockchain by address", async function () {
    // import Web3 from 'web3';
    // Web3 = require('web3')
    // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

    let bytes = ethers.utils.toUtf8Bytes("A very strong secret password :)"); // [65,  32, 118, 101, 114, 121,  32, 115, 116, 114, 111, 110, 103,  32, 115, 101,  99, 114, 101, 116,  32, 112,  97, 115, 115, 119, 111, 114, 100,  32,  58,  41]
    console.log("bytes", bytes);

    let contractAddress = "0x647AAC133E91edffEa49503cF7E3a2B17089066B";
    for (index = 0; index < 10; index++) {
      let hexString = await ethers.provider.getStorageAt(
        contractAddress, //"registrar.firefly.eth",
        index
      );
      let strr = ethers.utils.toUtf8String(hexString);
      console.log(`[${index}] ` + hexString + " " + strr);
    }
  });

  if (("Should deploy King caller smart contract", async () => {
    // BadKing = await ethers.getContractFactory("BadKing");

    // badKing = await BadKing.deploy();
    // await badKing.deployed();



  }));
});
