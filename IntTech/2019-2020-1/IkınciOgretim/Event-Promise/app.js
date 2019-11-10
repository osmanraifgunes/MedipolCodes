const Event = require('events')

var olay = new Event();

cepTelIslemi = function (data) {
    console.log('para tahsil edildi : ', data);
}
var cepTel = olay.on('mesagGedli', cepTelIslemi)
var Tarayici = olay.addListener('mesagGedli', function (data) {
    console.log('para tahsil edildi - addlistenerla : ', data);
})

function sunucu(params) {
    setTimeout(() => {
        console.log('top sizde')
        olay.emit('mesagGedli', 4324324328)
        olay.removeAllListeners('mesagGedli')
        olay.emit('mesagGedli', 4324324328)

    }, 3000);

}


sunucu();