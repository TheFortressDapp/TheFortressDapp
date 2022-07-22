
const hre = require("hardhat");

async function main() {
 
  const TheNFTFortress = await hre.ethers.getContractFactory("theNFTFortress");
  const theNFTFortress = await TheNFTFortress.deploy();

  await theNFTFortress.deployed();

  console.log("TheNFTFortress deployed to:", theNFTFortress.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
