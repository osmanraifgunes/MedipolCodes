var PORT = 3030;
var HOST = '127.0.0.1';
const screenshot = require('screenshot-desktop')

var dgram = require('dgram');

var client = dgram.createSocket('udp4');

setInterval(function () {
    screenshot().then(function (img) {
        client.send(img.slice( 0, 65000), 0, 65000 , PORT, HOST, function(err, bytes) {
            if (err) throw err;
          });
    }).catch((err) => {
      var a = 1;
    })
},100)

client.on("error", function (err) {
    console.log("Socket error: " + err);
});