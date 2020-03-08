var olay = require('./kartokuma');
var dinleyici = function () {
    //ikinci çalışan    
    console.log('para yatırıldı');
}
olay.yayici.on('kartyaklasti', dinleyici)

olay.yayici.removeListener('kartyaklasti', dinleyici)