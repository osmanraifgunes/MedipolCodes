var olay = require('./kartokuma');

olay.yayici.on('kartyaklasti', function () {
    //ikinci çalışan    
    console.log('vaka gerçekleşti (tutuklandi)');
})
