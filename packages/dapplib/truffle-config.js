require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain clutch guess clog orange situate'; 
let testAccounts = [
"0x4e8095220c459ab74acf3f84620c74ad3fd3235f5ee3ef2ad7bad2ccb5d648cf",
"0xb820f241acdc7b5e4bdcebb347d6d312e7bf932cec7d9bbdce1223ec78c7a0f3",
"0x6438965187d91962b3265140adaeb45447598fcfd9bc77350e2d2bd10629447e",
"0x57de3c04530512dc1ac557c517f6788e9badcbdf4d88c5d696d41374cecf7d79",
"0xe5bc12c6a58ea7b938982fc9b9ad8acd8a560da2ded238a441629448dc178150",
"0xc3e09136702668ec67d07a5f0561642a98f151e7f24a44430419c4fdc243f624",
"0xd9d668ecf642b45ad809fbd517a60e6c1d0e3f128b9690889d00593caa843051",
"0x64c72b5fca58e49c7c2ed2b4eba73b4d9887ca7f4c7cd27e6e2e2bc4d92ec378",
"0x4b2711c7e53c2f8808f4eea0e2372ba72e06a5bcb363229236c870fe118673ff",
"0xf06bc5f9d95362896eb06f55395246ecdef7eb78dcfd22e2ecd4777fa700aba2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


