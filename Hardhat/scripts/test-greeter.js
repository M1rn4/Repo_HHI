const hre = require("hardhat");
const ContractJson = require("../artifacts/contracts/Greeter.sol/Greeter.json");


// The ABI is the interface to the contract. It is used to call the contract's functions.
const abi = ContractJson.abi;

async function main() {

    const alchemy = new hre.ethers.providers.AlchemyProvider(
        'maticmum',
        process.env.ALCHEMY_API_KEY
    );

    const userWallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, alchemy);

    // Get the deployed contract. We need booth the specific CONTRACT_ADDRESS and the ABI.
    const Greeter = new hre.ethers.Contract(
        process.env.CONTRACT_ADDRESS_GREETER,
        abi,
        userWallet
    );

    const setTx1 = await Greeter.setGreeting("web3 sucks!");
    await setTx1.wait();
    console.log("before: " + await Greeter.greet());

    const setTx2 = await Greeter.setGreeting("web3 is awesome!");
    await setTx2.wait();
    console.log("after: " + await Greeter.greet());    

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

