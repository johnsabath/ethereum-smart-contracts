## Purpose

This repo is an exploration into the [Truffle framework](https://github.com/trufflesuite/truffle) for developing decentralized applications on the [Ethereum network](https://www.ethereum.org/).

The decentralized applications, or "smart contracts" as they are often refered to, are written using the [Solidity](https://github.com/ethereum/solidity) language.  Once written, they can be deployed to the Ethereum network, or run locally on an emulated blockchain provided by Truffle.

It also uses [Typechain](https://github.com/Neufund/TypeChain) to generate TypeScript bindings for the smart contracts, so that they can be easily integrated with a frontend application.

## Getting started

- Start a local instance of testrpc
  - `npm run testrpc`
- Compile the solidity contracts and generate typescript definitions
  - `npm run compile`
- Deploy contracts to testrpc
  - `npm run migrate`
- Run tests against contracts
  - `npm test`
