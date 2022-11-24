# BCLibrary

From video:

https://www.youtube.com/watch?v=iM8AcSpIZGo


Create the project:
npm init --yes


Add hardhat to the project:

npm install --save-dev hardhat

In the same directory where you installed Hardhat run:

npx hardhat

Select "yes" for all questions


Install dotenv tool:

npm install dotenv --save

Create the .env file with the follow parameters:

API_URl from Alchemy App settings
PRIVATE_KEY from metamask account

Edit /hardhat.config.js

Create or edit /scripts/deploy.js

compile the code:

npx hardhat compile


Deploy the code to the Polygon testnet (Mumbay)
npx hardhat run scripts/deploy.js --network mumbai

Lock with 1 ETH and unlock timestamp 1700791102 deployed to 0xa916fE63F9c892169a1A6aD4a832b272BB57a2F0
Greeter deployed to: 0xd24d48679F0d0Bb92c69610E554ea5cbd2F2F82e


Create the tes program fro Greeter (scripts/test-greeter.js)

exewcute the test program:

npx hardhat run scripts/test-greeter.js --network mumbai






