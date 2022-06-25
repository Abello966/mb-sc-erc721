const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTOwnerMints", function() {
  it("Should deploy and mint some NFTs", async function () {
    const NFTOwnerMints = await ethers.getContractFactory("NFTOwnerMints")
    const nftownermints = await NFTOwnerMints.deploy("MyNFT", "MNFT")
    const signers = await hre.ethers.getSigners()

    // Mint some NFTs
    await nftownermints.owner_mints(signers[0].address, 5672)
  
    // Check if balances are updated
    expect(nftownermints.balanceOf(signers[0].address) == 1)
  
    myuri = await nftownermints.tokenURI(5672)
    console.log(myuri);

    // await nftownermints.connect(signers[2]).owner_mints(signers[2].address, 3)

  })

})
