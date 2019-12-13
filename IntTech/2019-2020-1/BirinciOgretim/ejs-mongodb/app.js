const ekspres = require('express');
const rica = require('request');
var app = ekspres();
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

var apiKey = '1b74228e15164d17fa2f58579ef9d174d396a8633f648cef';
var anaDizin = 'https://fonoapi.freshpixl.com/v1/getdevice';

app.get('/', function (istek, cevapRsp) {
    cevapRsp.render('home');
});

const url = 'mongodb+srv://osmanraifgunes:1453Telefon@cluster0-iciws.mongodb.net/test';
const dbName = 'TelefonVeriTababni';


app.get('/cihaz', function (req, res) {
    try {
        rica.post(anaDizin + '?token=' + apiKey + '&device=' + req.query.cihazAdi, function (err, cevap, govde) {
            var veri = JSON.parse(govde);

            MongoClient.connect(url, function (err, client) {
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                const collection = db.collection('Telefon');
                collection.insert(veri[0], function (err, result) {
                    console.log("Inserted 3 documents into the collection");
                 
                });
                client.close();
            });

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