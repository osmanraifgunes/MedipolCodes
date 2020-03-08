const olayYayici = require('events');

var olayNesnesi = new olayYayici();

//function dovizceviri() {
//    console.log('dolar çevirildi')
//}
//olayNesnesi.on('parayatirildi', dovizceviri)
//
//function ibancontrol() {
//    console.log('iban hatasız')
//}
//olayNesnesi.on('parayatirildi', ibancontrol)


function parayatirma() {
    //bir sürü işlem
    //iş bitti
    console.log('ben parayı yatırdım')
    setTimeout(() => {
        olayNesnesi.emit('parayatirildi');
    }, 500);
}

parayatirma();

module.exports.olayitem = olayNesnesi;
