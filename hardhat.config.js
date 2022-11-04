// https://eth-goerli.g.alchemy.com/v2/leKYia0JFrHYUXIDNdTrBTbnqlpZiXMa

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/leKYia0JFrHYUXIDNdTrBTbnqlpZiXMa',
      accounts: [ '1c9f99c95a46114bf62c76e940f04226b90e48306852b81d73efd0f0322d968c']
    }
  }
}
