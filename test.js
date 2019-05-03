
const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ env: 'prod', accessToken: 'v2x86d563332f056aa507b642aeb9c8ac0c2e72ea1b108d6d4e5539e17afb517017' }); // defaults to testnet. add env: 'prod' if you want to go against mainnet
bitgo.session({}, function(err,res) {
//  console.dir(err);
//  console.dir(res);
});

let my_wallet;

let walletId = '5cc461461ce8e48e07a9d8c4a80fc1ba';
bitgo.coin('btc').wallets().get({ id: walletId })
.then(function(wallet) {
  // print the wallet
//my_wallet = wallet._wallet;
//  console.dir(wallet._wallet);


wallet.createAddress({ label: 'Suman Dey' })
.then(function(address) {
  // print new address
  console.dir(address);
});

/*
wallet.addresses()
.then(function(addresses) {
  // print addresses
  console.dir(addresses);
});
*/

});


/*
bitgo.coin('btc').wallets().list({})
.then(function(wallets) {
 wallet = wallets.wallets._wallet;
// print the wallets
//  console.dir(wallet);
console.log(wallets.wallets);
});



my_wallet.createAddress({ "chain": 10 }, function callback(err, address) {
    console.dir(address);
});

*/

//const BitGoJS = require('src/index.js');

