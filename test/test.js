const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
let ContractInstance;
let onlyAccess;

beforeEach(async () => {
  // first contract deployment 
    ContractInstance = await ethers.getContractFactory("OnlyMinterBurner");
    onlyAccess = await ContractInstance.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0x70997970C51812dc3A010C7d01b50e0d17dc79C8");
    await onlyAccess.deployed();
    console.log("Contract deployed to:", onlyAccess.address);

});

describe("Minter-Burner Checking", function () {
  it("Minter Checking", async function () {
    
    await onlyAccess.mint("0x14dC79964da2C08b23698B3D3cc7Ca32193d9955", 1000);
    expect(await onlyAccess.balanceOf("0x14dC79964da2C08b23698B3D3cc7Ca32193d9955")).to.equal(1000);

    console.log("Current balance of minted account: ", Number(await onlyAccess.balanceOf("0x14dC79964da2C08b23698B3D3cc7Ca32193d9955")))

    const [deployer] = await ethers.getSigners();
    const MINTER_ROLE = await onlyAccess.MINTER_ROLE();
    const isAdmin = await onlyAccess.hasRole(MINTER_ROLE, deployer.address);
    expect(isAdmin).to.equal(true);
    console.log("Current Deployer has minter role now: ", isAdmin);
  });
  it("Burner Checking", async function () {
    const [deployer] = await ethers.getSigners();
    const BURNER_ROLE = await onlyAccess.BURNER_ROLE();
    const isAdmin = await onlyAccess.hasRole(BURNER_ROLE, deployer.address);
    expect(isAdmin).to.equal(false);
    console.log("Current Deployer has burner role now: ", isAdmin);
  });
});
