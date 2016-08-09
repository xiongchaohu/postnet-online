const postTransformer=require('./public/core/PostcodeTransformer');
const bodyParser=require('body-parser');
const barcodeTransformer=require('./public/core/BarcodeTransformer');
var express = require('express');
var app = express();
//var cors=require('cors');
app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static('public'));
//app.use(cors());

app.post('/postTransformer', function(req, res){
    res.send(postTransformer.postToBarcode(req.body.cmd));
});

app.post('/barcodeTransfomer', function(req, res){
    res.send(barcodeTransformer.barcodeToPostCode(req.body.cmd));
});

app.listen(3000,function(){
    console.log('example app Listening on port 3000!');
});