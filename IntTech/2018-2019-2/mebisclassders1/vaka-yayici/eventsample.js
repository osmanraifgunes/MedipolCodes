const eventYayici = require('events');
const dosyasistemi = require('fs');
const myYayici = new eventYayici();

//var veritabani = [];
// function veriyikaydet(dosyaadi) {
//     console.log('veri tababnına kaydedildi : ' + dosyaadi)
// }

// function dosyayikopyala(dosyaadi) {
//     console.log('dosya kopyalandi : ' + dosyaadi)
// }
//myYayici.on('vaka', veriyikaydet);
//console.log(eventYayici.listenerCount(myYayici, 'vaka'));
//myYayici.on('vaka', dosyayikopyala);
//myYayici.removeListener('vaka', maillebildir);
function kayitekle(dosyaadi) {
    //veritabani.push(params);
    myYayici.emit('vaka', dosyaadi);
}


//console.log(eventYayici.listenerCount(myYayici, 'vaka'));

//process.env.dizin
dosyasistemi.watch('/Users/bprlab/Documents/nodeornek/nodeornek/mebisclassders1/kucukdropbox', { encoding: 'UTF-8' }, (eventType, filename) => {
    if (filename) {
        kayitekle(filename);
        // Prints: <Buffer ...>
    }
});


module.exports.olayYayici = myYayici;