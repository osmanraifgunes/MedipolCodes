const eventYayici = require('events');
var eventNesne = new eventYayici();

const fs = require('fs');

fs.watch('/Users/bprlab/Documents/nodeornek/nodeornek/mebisclassders2/gdriveornek/yedeklemedizini', { encoding: 'UTF-8' },
    function (eventType, filename) {
        eventNesne.emit('dosyaDegisti', filename);
    }
);

module.exports.nesne = eventNesne;
