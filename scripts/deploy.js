const hre = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const ERC20 = await ethers.getContractFactory("ERC20"); // name of the artifect when we compile our contract
  const erc20 = await ERC20.deploy("5000", "FTXToken", "FTX");
  console.log("Token address:", erc20.address);
  const NFTCollection = await ethers.getContractFactory("NFTCollection"); // name of the artifect when we compile our contract
  const nftCollection = await NFTCollection.deploy();
  console.log("Token address:", nftCollection.address);
  const Auctions = await ethers.getContractFactory("Auctions"); // name of the artifect when we compile our contract
  const auctions = await Auctions.deploy("Cube");
  console.log("Token address:", auctions.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
