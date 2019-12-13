
// const https = require('https')
// var baseAdres = 'https://fonoapi.freshpixl.com/v1/getdevice';
// var token = "ec77b74f55377081e656dce92f8c4a3a80be02558c8024bf"
// var cihazlar = '';
// var istemci = https.request(baseAdres + '?token=' + token + '&limit=5&device=note', function (cevap) {

//     cevap.on('data', (veri) => {
//         cihazlar += veri.toString();
//     })
//     cevap.on('end', function () {
//         debugger;
//     })
// });

// istemci.write('');

// var istemci = require("request");

// var baseAdres = 'https://fonoapi.freshpixl.com/v1/getdevice';
// var token = "ec77b74f55377081e656dce92f8c4a3a80be02558c8024bf"
// var cihazlar = '';
// var adres = baseAdres + '?token=' + token + '&limit=5&device=note';
// istemci.get(adres, function (err, cevap, govde) {
//     debugger;
// })