const ekspres = require('express');
const rica = require('request');
var app = ekspres();
app.set('view engine', 'ejs');

var apiKey = '1b74228e15164d17fa2f58579ef9d174d396a8633f648cef';
var anaDizin = 'https://fonoapi.freshpixl.com/v1/getdevice';

app.get('/', function (istek, cevapRsp) {
    cevapRsp.render('home');
});

app.get('/cihaz', function (req, res) {
    try {
        rica.post(anaDizin + '?token=' + apiKey + '&device=' + req.query.cihazAdi, function (err, cevap, govde) {
            var veri = JSON.parse(govde);
            res.render('sonuc', { dataLar: veri })
        })
    } catch (error) {

    }
});

app.get('/cihaz/:appId', function (istek, cevap) {
    debugger
});

app.listen(port = 3500, 'localhost', function (params) {
    console.log('başladı');
});