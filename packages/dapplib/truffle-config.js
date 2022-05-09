require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind home hunt drop tail swear'; 
let testAccounts = [
"0x0528dca2c71069ff0cd0d5c0b299fa5eddd5c94e2ef29c8e4a1d904950b724c0",
"0x3ff424a0f6ab1778bed214fe97670234947ef5486aa5a38e9adb522b2027399e",
"0xff7b587544380f71be93d36d4a5c6502248e8403fe14df9e6084ea7a8e6aa29a",
"0x934a13afcbe4b9334d0524953330e06820c9588a0638b7b2a25d4caca775279a",
"0x80a893ffff44f8b1ab9dad043d88a00330b9fc997f32d214a28fc808fb4d587c",
"0x101d044f6bda31f37f044678c420fed8ee2d3a832817a53c6795c3b8af35c0f1",
"0xbaa49ef32841ec24037f4115cfb7ea93f7f025d285711fc45fc0ba157c93e52d",
"0x0f95254ead94e9a670a1b237fc25541c27aad76cf84ab9525f6333fc9a18f85a",
"0xd0c4471c5f9971baf2c7872de1dbeeb2c0deffaa9af17656b0bc9113f5d73362",
"0x0b6f7bdb8aa7c475f986b05b37c78815b8dfd7942306ff48d31ff166c2ef74c8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

