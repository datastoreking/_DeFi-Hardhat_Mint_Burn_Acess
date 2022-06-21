# Minter, Burner Role Checking
    Only users having mint, burn role can call the mint, burn functions in smart contract
# Minter, Burner Address
    minter address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    burner address: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
# Deploy the smart contract
    ```
        npm install
        npx hardhat node
        npx hardhat run --network localhost script/deploy.js
    ```
# Test the smart contract
    ```
        mocha test/test.js
    ```
