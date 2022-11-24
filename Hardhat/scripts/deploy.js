const hre = require("hardhat");

async function main() {

  console.log("01");

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  console.log("02");

  await greeter.deployed();

  console.log("03");
  
  console.log(
    `Greeter deployed to: ${greeter.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});