const olayyayici = require('events');

olYayNesne = new olayyayici();

// function bankayaParaGonder() {
//     console.log('vaka gerçekleşti (banakaya para gitti)');
// }

// function emniyeteBildir() {
//     console.log('vaka gerçekleşti (tutuklandi)');
// }

//olYayNesne.on('kartyaklasti', bankayaParaGonder);
//olYayNesne.on('kartyaklasti', emniyeteBildir);

function kartokuyucu() {

    debugger;
    //ana kod
    //cok işlem
    olYayNesne.emit('kartyaklasti');
}

setTimeout(() => {
    kartokuyucu();
}, 500);
setTimeout(() => {
    kartokuyucu();
}, 1000);

module.exports.yayici = olYayNesne;