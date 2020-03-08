const net = require('net')
const fs = require('fs');
const screenshot = require('screenshot-desktop')



var sunucu = net.createServer(function (soket) {
    // soket.connect({ port: '4343' }, function () {
    //     var okuyucu = new fs.createReadStream("C:\\code\\MedipolCodes\\IntTech\\2019-2020-1\\IkınciOgretim\\resim.jpg");
    //     console.log("tcp bağlanıldı");
    //     soket.write(okuyucu);
    // });
    //var okuyucu = new fs.createReadStream("C:\\code\\MedipolCodes\\IntTech\\2019-2020-1\\IkınciOgretim\\resim.jpg");
    console.log("tcp bağlanıldı");

    setInterval(() => {
        screenshot().then((img) => {
            soket.write(img);
        }).catch((err) => {
            // ...
        })
    }, 1000);

});

sunucu.listen("4343", function () {
    console.log("sunucu başladı");
})