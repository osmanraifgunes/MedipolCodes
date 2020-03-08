const exp = require('express')
var sunucu = exp();
sunucu.set('view engine', 'ejs');

sunucu.get('/cihaz/:cihazAdi', function (istek, cevapMusteri) {
    var temizCevap = '<html><head> <style> table tr td {border: 1px solid red;}</style></head><body><table>';
    var istemci = require("request");

    var baseAdres = 'https://fonoapi.freshpixl.com/v1/getdevice';
    var token = "ec77b74f55377081e656dce92f8c4a3a80be02558c8024bf"
    var cihazlar = '';
    var adres = baseAdres + '?token=' + token + '&limit=5&device=' + istek.params.cihazAdi;

    istemci.get(adres, function (err, cevap, govde) {
        parsed = JSON.parse(govde);
        parsed.forEach(element => {
            temizCevap += '<tr>'
            temizCevap += '<td>' + element.Brand + '</td>'
            temizCevap += '<td>' + element.DeviceName + '</td>'
            temizCevap += '<td>' + element.resolution + '</td>'
            temizCevap += '</tr>'

        });

        temizCevap += '</table></body></html>'
        cevapMusteri.write(temizCevap);
        cevapMusteri.end();
    })
})

sunucu.get('/', function (istek, cevap1) {

    var istemci = require("request");
    var baseAdres = 'https://fonoapi.freshpixl.com/v1/getdevice';
    var token = "ec77b74f55377081e656dce92f8c4a3a80be02558c8024bf"
    var adres = baseAdres + '?token=' + token + '&limit=5&device=note' ;
    istemci.get(adres, function (err, cevap, govde) {
        parsed = JSON.parse(govde);
        cevap1.render('home', { veriler: parsed })

    })

})
sunucu.get('/cihaz/:cihazId', function (istek, cevap) {
    cevap.write('merhaba 45')

})
sunucu.listen(port = 4545, hostname = 'localhost', function () {
    console.log('sunucu başladı')
})