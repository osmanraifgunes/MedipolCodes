const net = require('net');
const screenshot = require('screenshot-desktop')

var sunucu = net.createServer();

sunucu.on('connection', function (socket) {
    setInterval(function () {
        screenshot().then(function (img) {
            socket.write(img);
        }).catch((err) => {
            // ...
        })
    }, 1000);

});



sunucu.listen('3030', function () {
})