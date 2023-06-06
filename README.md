\*\*\*\*# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

**npm i
**npm install --save-dev hardhat

You can Also Deployed and Verify Again by Using These command
**npx hardhat
**
**npx hardhat compile
**
**Deploying contracts with the account: 0x7a0B7dc32E19383A8c6043EB2F2e4F1B0D28eF28
Account balance: 897399482952827747
Token address: 0x371461DfD9ea63E78B4aefF2bf30704eaFe313f7
Token address: 0xe05bc66523ed59e6A9f217fFd36ccDDF31e21b56
Token address: 0xcf5389cf2854ba4699612dc1CC72D17e63CFDeE9
**
**npx hardhat run scripts/deploy.js --network goerli
** For ERC20
**npx hardhat verify --network goerli "0x371461DfD9ea63E78B4aefF2bf30704eaFe313f7" "TokenSupply" "TokenName" "TokenSymbol"
**\*\* For NFTCollection
**npx hardhat verify --network goerli "0xe05bc66523ed59e6A9f217fFd36ccDDF31e21b56"
**\*\* For Auctions
**npx hardhat verify --network goerli "0xcf5389cf2854ba4699612dc1CC72D17e63CFDeE9" "Auction"
**\*\*
**Successfully verified contract ERC20 on Etherscan.
**https://goerli.etherscan.io/address/0x371461DfD9ea63E78B4aefF2bf30704eaFe313f7**
\*\*
Successfully submitted source code for contract
contracts/ERC20.sol:ERC20 at 0x371461DfD9ea63E78B4aefF2bf30704eaFe313f7
for verification on the block explorer. Waiting for verification result...

Successfully submitted source code for contract
contracts/NFTCollection.sol:NFTCollection at 0xe05bc66523ed59e6A9f217fFd36ccDDF31e21b56
for verification on the block explorer. Waiting for verification result...

Successfully verified contract NFTCollection on Etherscan.
https://goerli.etherscan.io/address/0xe05bc66523ed59e6A9f217fFd36ccDDF31e21b56**
\*\*
Successfully submitted source code for contract
contracts/Auctions.sol:Auctions at 0xcf5389cf2854ba4699612dc1CC72D17e63CFDeE9
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Auctions on Etherscan.
https://goerli.etherscan.io/address/0xcf5389cf2854ba4699612dc1CC72D17e63CFDeE9
\*\*
