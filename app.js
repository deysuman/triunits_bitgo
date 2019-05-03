var express = require('express');
const BitGo = require('bitgo');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(3776, function () {
   var host = server.address().address
   var port = server.address().port   
   console.log("App listening at http://%s:%s", host, port)
})

const bitgo = new BitGo.BitGo({ env: 'prod', accessToken: 'v2x86d563332f056aa507b642aeb9c8ac0c2e72ea1b108d6d4e5539e17afb517017' }); // defaults to testnet. add env: 'prod' if you want to go against mainnet


app.get('/wallet_user', function (req, res) {
    if (req.query.user_id != null && req.query.user_id != ""){ 
        let my_wallet;
        let walletId = req.query.wallet_id; //'5cc461461ce8e48e07a9d8c4a80fc1ba';
            bitgo.coin('btc').wallets().get({ id: walletId })
            .then(function(wallet) {            
                wallet.createAddress({ label: req.query.user_id})
                .then(function(address) {
                    my_wallet = address
                });
            });
        response = {
            error : false,
            user_id:req.query.user_id,
            response: my_wallet
        };
    }
    else{
        response = {
            error:true
        };
    }
    res.end(JSON.stringify(response));
 })