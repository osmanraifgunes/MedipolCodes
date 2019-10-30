const parayatirma = require('./parayatti');

function dinleyici(params) {
    // ana işf
    console.log('doviz çevirildi');
}
parayatirma.olayitem.on('parayatirildi', dinleyici)