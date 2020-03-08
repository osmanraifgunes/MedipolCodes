const net = require('net');
const fs = require('fs');

const soket = new net.Socket();

soket.connect(4343, 'localhost', function () {
    console.log('bağlandı');
});

soket.on('data', (data) => {
    fs.writeFile("C:\\code\\MedipolCodes\\IntTech\\2019-2020-1\\resim.jpg", data, "binary", function () {

    })
    //console.log(data.toString());
});
// var istemci = net.createConnection({ port: '4343', host: "localhost" }, function () {
//     console.log("bağlanıldı")
// });

// istemci.connect({ port: '4343', host: "localhost" }, function () {
// });

