var dinleyici = require('./uygulama')

//console.log(process.argv[2])
console.log(process.env.dizin)

var kopyala = function (dosyaadi) {
    debugger;
}
dinleyici.nesne.on('dosyaDegisti', kopyala);