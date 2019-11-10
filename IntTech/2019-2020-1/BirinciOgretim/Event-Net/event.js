const EventEmitter = require('events');
const fs = require('fs');
const https = require('https');

const dosyaGetir = new EventEmitter();

dosyaGetir.on('dosyaGeldiginde', function (data) {
    fs.writeFile('resim.png',data,function (params) {
        
    })
});

dosyaGetir.on('dosyaGeldiginde', function (data) {
    console.log('internetten resim indirildi')
});


dosyaGetir.on('dosyaGeldiginde', function (data) {
    console.log('kullanıcılara resim bildiriliyor')
});

dosyaGetir.addListener('dosyaGeldiginde',function (params) {
    console.log('add listener la eklendi')
})

function dosyayiGetir(params) {
    https.get("https://iadsb.tmgrup.com.tr/ac0fbd/645/344/0/22/800/449?u=https://idsb.tmgrup.com.tr/2019/09/23/turkeys-highest-income-earned-in-istanbul-1569241200609.jpg", response => {
        const file = fs.createWriteStream("resim1.jpg");

        var stream = response.pipe(file);

        stream.on("finish", function () {
            dosyaGetir.emit('dosyaGeldiginde',file)
        });
    });
}

dosyayiGetir();

setTimeout(() => {
    dosyaGetir.removeAllListeners();
    dosyayiGetir();
    console.log('bitti')
    
}, 5000);
