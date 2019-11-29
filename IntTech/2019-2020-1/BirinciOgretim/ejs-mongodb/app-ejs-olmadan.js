const ekspres = require('express');
const rica = require('request');


var app = ekspres()
var apiKey = '1b74228e15164d17fa2f58579ef9d174d396a8633f648cef';
var anaDizin = 'https://fonoapi.freshpixl.com/v1/getdevice';

app.get('/', function (istek, cevapRsp) {
    var cevap = "<html><head><style> table tr td{border:1px solid black;}</style></head><body><form action='/cihaz' method='GET'>";
    cevap += "<input type='text' name='cihazAdi'>"
    cevap += "<input type='submit' value='ara'>"

    cevap += "</form></body></html>"
    cevapRsp.write(cevap);
    cevapRsp.end();
})
app.get('/cihaz', function (req, res) {
    try {
        rica.post(anaDizin + '?token=' + apiKey + '&device=' + req.query.cihazAdi, function (err, cevap, govde) {
            var veri = JSON.parse(govde);
            var cevap = "<html><head><style> table tr td{border:1px solid black;}</style></head><body><table>";
            veri.forEach(element => {
                cevap += "<tr>"
                cevap += "<td>" + element.Brand + "</td>"
                cevap += "<td>" + element.DeviceName + "</td>"
                cevap += "<td>" + element.resolution + "</td>"
                cevap += "</tr>"

            });
            cevap += "</table></body></html>"
            res.write(cevap);
            res.end();
        })
    } catch (error) {

    }
})

app.get('/cihaz/:appId', function (istek, cevap) {
    debugger
})

app.listen(port = 3500, 'localhost', function (params) {
    console.log('başladı');
})